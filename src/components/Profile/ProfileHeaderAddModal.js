import { useDispatch } from "react-redux";
import { useState } from "react";
import { insertPosts, selectMyPost } from "../../store/posts";
import { Container, Modal, Button, Input } from "reactstrap";
const ProfileHeaderAddModal = ({ isOpen, closeModal }) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        content: "",
        img: "/img/1.jpeg",
    });
    const onChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setForm({ ...form, img: reader.result });
                resolve();
            };
        });
    };
    const onChangeName = (e) => {
        const { value } = e.target;
        setForm({ ...form, content: value });
    };
    const onSubmit = async () => {
        console.log("onSubmit 1");
        await dispatch(insertPosts(form));
        console.log("onSubmit 2");
        await dispatch(selectMyPost());
        console.log("onSubmit 3");
        closeModal();
    };
    return (
        <Modal isOpen={isOpen} fullscreen toggle={closeModal}>
            <div className="PostsModalHeader">
                <div>
                    <Button close onClick={closeModal}></Button>{" "}
                </div>
                <div>
                    <strong>게시물 생성</strong>
                </div>

                <Button color="info" outline onClick={onSubmit}>
                    글쓰기
                </Button>
            </div>
            <Container>
                <div className="profileUpdateForm">
                    <Input type="file" hidden accept="image/*" id="imgUpload" onChange={(e) => onChangeFile(e)}></Input>
                    <label htmlFor="imgUpload">
                        <div className="profileImgBox">
                            <img className="profileImg" src={form.img} alt="myProfileImg"></img>
                        </div>
                    </label>
                    <Input type="textarea" value={form.name} onChange={(e) => onChangeName(e)}></Input>
                </div>
            </Container>
        </Modal>
    );
};

export default ProfileHeaderAddModal;

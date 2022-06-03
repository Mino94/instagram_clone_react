import { useState } from "react";
import "./Posts.css";
import { Modal, Button, Container, Spinner } from "reactstrap";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectMyPost, selectOtherPost } from "../../store/posts";
import { selectUserById } from "../../store/users";

const Posts = ({ postState, posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clickPost, setClickPost] = useState();
    const [postUser, setPostUser] = useState();
    const dispatch = useDispatch();
    const location = useLocation();

    const openModal = (post) => {
        dispatch(selectUserById(post.userId))
            .unwrap()
            .then((result) => {
                setPostUser(result);
            })
            .finally(() => {
                setClickPost(post);
                setIsOpen(true);
            });
    };
    const closeModal = () => {
        setClickPost();
        setIsOpen(false);
    };
    const onClickDelete = async (postId) => {
        await dispatch(deletePost(postId));
        await dispatch(location.pathname === "/profile" ? selectMyPost() : selectOtherPost());

        setIsOpen(false);
    };
    return (
        <div className="Posts">
            {postState.loading ? (
                <Spinner>Loading...</Spinner>
            ) : (
                posts?.map((post) => (
                    <div className="PostsImgBox" onClick={() => openModal(post)}>
                        <img className="PostsImg" key={post.id} src={post.img} alt={post.content}></img>
                    </div>
                ))
            )}
            {clickPost ? (
                <PostDetail isOpen={isOpen} clickPost={clickPost} closeModal={closeModal} onClickDelete={onClickDelete} user={postUser}></PostDetail>
            ) : null}
        </div>
    );
};

export default Posts;

const PostDetail = ({ isOpen, clickPost, closeModal, onClickDelete, user }) => {
    const myId = Number(useSelector((state) => state.users.myId));

    return (
        <Modal isOpen={isOpen} fullscreen toggle={closeModal}>
            <div className="PostsModalHeader">
                <div>
                    <Button close onClick={closeModal}></Button>{" "}
                </div>
                <div>
                    {user.name}
                    <strong>게시물</strong>
                </div>

                {user.id === myId ? (
                    <Button color="danger" outline onClick={() => onClickDelete(clickPost?.id)}>
                        삭제하기
                    </Button>
                ) : (
                    <div></div>
                )}
            </div>
            <Container>
                <div className="PostsBody">
                    <div className="PostBodyHeader">
                        <div className="PostsBodyHeaderImgBox">
                            <img className="PostsBodyHeaderImg" src={user.img} alt="userImg"></img>
                        </div>
                        {user.name}
                    </div>
                    <img className="PostsBodyImg" src={clickPost?.img} alt="postimg"></img>
                    <p>{clickPost?.content}</p>
                </div>
            </Container>
        </Modal>
    );
};

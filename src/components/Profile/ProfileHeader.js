import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useNavigate } from "react-router";
import { BiLogOut } from "react-icons/bi";
import { GoDiffAdded } from "react-icons/go";
import { logout } from "../../store/users";
import ProfileHeaderAddModal from "./ProfileHeaderAddModal.js";
import "./ProfileHeader.css";

const ProfileHeader = ({ name }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClickLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false);
    };
    const openModal = () => {
        console.log("수정 모달 오픈");
        setIsOpen(true);
    };

    return (
        <div className="ProfileHeaderBox">
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <Button outline onClick={openModal}>
                    <GoDiffAdded size={30}></GoDiffAdded>
                </Button>
                <Button outline onClick={onClickLogout}>
                    <BiLogOut size={30}></BiLogOut>
                </Button>
            </div>
            <ProfileHeaderAddModal isOpen={isOpen} closeModal={closeModal}></ProfileHeaderAddModal>
        </div>
    );
};

export default ProfileHeader;

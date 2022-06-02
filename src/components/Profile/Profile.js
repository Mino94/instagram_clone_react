import { useContext } from "react";
import { Container } from "reactstrap";
import { UserContext } from "../../store/UserContext";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";
import { PostContext } from "../../store/PostContext";
import { FollowContext } from "../../store/FollowContext";
import Post from "../Posts/Posts";
import { useSelector } from "../../../node_modules/react-redux/es/exports";

const Profile = () => {
    // redux에서 가져올떄 useSelector
    const { name, img, id } = useSelector((state) => state.users.me);
    const { posts, deletePost } = useContext(PostContext);
    const { follows } = useContext(FollowContext);
    const myPosts = () => {
        return posts.filter((post) => post.userId === id);
    };
    const myFollower = () => {
        return follows.filter((follow) => follow.following === id);
    };
    const myFollowing = () => {
        return follows.filter((follow) => follow.follower === id);
    };

    return (
        <>
            <ProfileHeader name={name}></ProfileHeader>
            <Container className="ProfileContainer">
                <ProfileBody img={img} follower={myFollower()} following={myFollowing()} posts={myPosts()}></ProfileBody>
                <Post posts={myPosts()} name={name} img={img} deletePost={deletePost}></Post>
            </Container>
        </>
    );
};

export default Profile;

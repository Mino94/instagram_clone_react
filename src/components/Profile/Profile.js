import { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import { UserContext } from "../../store/UserContext";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";
import { PostContext } from "../../store/PostContext";
import { FollowContext } from "../../store/FollowContext";
import Post from "../Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { selectMyPost } from "../../store/posts";

const Profile = () => {
    // redux에서 가져올떄 useSelector
    const { name, img, id } = useSelector((state) => state.users.me);
    const { follows } = useContext(FollowContext);

    const dispatch = useDispatch();
    const myPosts = useSelector((state) => state.posts.myPosts);

    const getMyPost = () => {
        dispatch(selectMyPost());
    };
    useEffect(() => {
        getMyPost();
    }, []);
    // const myPosts = () => {
    //     return posts.filter((post) => post.userId === id);
    // };
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
                <ProfileBody img={img} name={name} follower={myFollower()} following={myFollowing()} posts={myPosts.posts}></ProfileBody>
                <Post posts={myPosts.posts} name={name} img={img} postState={myPosts}></Post>
            </Container>
        </>
    );
};

export default Profile;

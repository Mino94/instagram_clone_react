import { useContext } from "react";
import { Container } from "reactstrap";
import { UserContext } from "../../data/UserContext";
import ProfileHeader from "./ProfileHeader";

const Profile = () => {
  const { users } = useContext(UserContext);
  const id = Number(localStorage.getItem("id"));
  const getUser = () => {
    return users.find((user) => id === user.id);
  };
  const { name } = getUser();
  return (
    <>
      <ProfileHeader name={name}></ProfileHeader>
      <Container className="ProfileContainer">
        <div>profile</div>
      </Container>
    </>
  );
};

export default Profile;

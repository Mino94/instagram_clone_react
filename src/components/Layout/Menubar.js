import "./Menubar.css";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "reactstrap";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineCamera,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Menubar = () => {
  const location = useLocation();
  return (
    <div className="Menubar">
      <Row className="MenuContainer">
        <Col className="Icon">
          <Link to={"/"}>
            <AiFillHome
              size={30}
              fill={location.pathname === "/" ? "blue" : "black"}
            ></AiFillHome>
          </Link>
        </Col>
        <Col className="Icon">
          <Link to={"/search"}>
            <AiOutlineSearch
              size={30}
              fill={location.pathname === "/search" ? "blue" : "black"}
            ></AiOutlineSearch>
          </Link>
        </Col>
        <Col className="Icon">
          <Link to={"/camera"}>
            <AiOutlineCamera
              size={30}
              fill={location.pathname === "/camera" ? "blue" : "black"}
            ></AiOutlineCamera>
          </Link>
        </Col>
        <Col className="Icon">
          <Link to={"/shopping"}>
            <AiOutlineShopping
              size={30}
              fill={location.pathname === "/shopping" ? "blue" : "black"}
            ></AiOutlineShopping>
          </Link>
        </Col>
        <Col className="Icon">
          <Link to={"/profile"}>
            <BiUserCircle
              size={30}
              fill={location.pathname === "/profile" ? "blue" : "black"}
            ></BiUserCircle>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Menubar;

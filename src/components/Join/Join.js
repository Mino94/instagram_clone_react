import { useState } from "react";
import { Button, Col, Container, Form, Input, Row, Alert } from "reactstrap";
import { Users } from "../data/User";
import { useNavigate } from "react-router";
import AuthRouter from "../AuthRouter";
import "../Login/Login.css";

const Join = () => {
    const [isFail, setIsFail] = useState(false);
    const [text, setText] = useState("");

    const [user, setUser] = useState({
        id: "",
        password: "",
        name: "",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const openAlert = (text) => {
        setIsFail(true);
        setText(text);
        setTimeout(() => closeAlert(), 3000);
    };

    const navigate = useNavigate();
    const onSubmitLogin = (e) => {
        e.preventDefault();
        const findUser = Users.find((data) => data.userId === user.id);
        if (findUser) {
            openAlert("이미 존재하는 아이디");
            return;
        } else if (user.id === "") {
            openAlert("아이디 입력 해");
            return;
        } else if (user.password === "") {
            openAlert("비번 입력해");
            return;
        } else if (user.name === "") {
            openAlert("이름 입력해");
            return;
        } else {
            Users.push({ ...user, userId: user.id, id: Users.length });
            localStorage.setItem("id", Users.length);
            navigate("/");
        }
    };

    const closeAlert = () => {
        setIsFail(false);
        setText("");
    };

    return (
        <div className="JoinPage">
            <Container className="bg-light border">
                <Row style={{ rowGap: "1em", padding: "3em" }}>
                    <Col xl={12}>
                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Logo"></img>
                    </Col>

                    <Col xl={12}>
                        <Form className="JoinForm">
                            <Input type="text" placeholder="Id" name="id"></Input>
                            <Input type="password" placeholder="Password" name="password"></Input>
                            <Input type="text" placeholder="name" name="name"></Input>

                            <Button type={"submit"} color="primary" block>
                                가입
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container className="bg-light border">
                <Row style={{ padding: "1em", textAlign: "center" }}>
                    <p>
                        계정이 있으신가요? <a href="/login">로그인</a>
                    </p>
                </Row>
            </Container>

            <AuthRouter></AuthRouter>
        </div>
    );
};

export default Join;

import { useState } from "react";
import { Button, Col, Container, Form, Input, Row, Alert } from "reactstrap";
import { Users } from "../data/User";
import "./Login.css";
import { useNavigate } from "react-router";
import AuthRouter from "../AuthRouter";

const BootstrapLogin = () => {
  const [isFail, setIsFail] = useState(false);

  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const findUser = Users.find(
      (data) => data.userId === user.id && data.password === user.password
    );
    if (findUser) {
      localStorage.setItem("id", findUser.id);
      navigate("/");
    } else {
      setIsFail(true);
      setTimeout(() => closeAlert(), 3000);
    }
  };

  const closeAlert = () => {
    setIsFail(false);
  };

  return (
    <div className="LoginPage">
      <Container className="bg-light border">
        <Row style={{ rowGap: "1em", padding: "3em" }}>
          <Col xl={12}>
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="Logo"
            ></img>
          </Col>

          <Col xl={12}>
            <Form onSubmit={onSubmitLogin} className="LoginForm">
              {isFail ? (
                <Alert color="warning" toggle={() => closeAlert}>
                  아이디 또는 비밀번호가 틀렸습니다.
                </Alert>
              ) : null}
              <Input
                type="text"
                placeholder="Id"
                name="id"
                onChange={(e) => onChangeHandler(e)}
              ></Input>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => onChangeHandler(e)}
              ></Input>
              <Button type={"submit"} color="primary" block>
                로그인
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="bg-light border">
        <Row style={{ padding: "1em", textAlign: "center" }}>
          <p>
            계정이 없으신가요? <a href="/join">가입하기</a>
          </p>
        </Row>
      </Container>

      <AuthRouter></AuthRouter>
    </div>
  );
};

export default BootstrapLogin;

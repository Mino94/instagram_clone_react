import "./Login.css";

import { Col, Row, Container, Button, Input, Form } from "reactstrap";

const BootstrapLogin = () => {
  return (
    <div className="LoginPage">
      <Container className="bg-light border">
        <Row style={{ rowGap: "item", padding: "3em" }}>
          <Col xl={12}>
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="Logo"
            ></img>
          </Col>
          <Col xl={12}>
            <Form className="LoginForm">
              <Input type={"text"} placeholder="ID" name="id"></Input>
              <Input
                type={"password"}
                placeholder="password"
                name="password"
              ></Input>
              <Button type={"submit"} color="primary">
                로그인
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="bg-light border">
        <Row style={{ rowGap: "item", padding: "3em" }}>
          <p>
            계정이 없으신가요? <a href="#">가입하기</a>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default BootstrapLogin;

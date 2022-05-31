import "./Login.css";
import { Button } from "reactstrap";

const Login = () => {
  return (
    <div className="LoginPage">
      <div className="Box">
        <div className="imgBox">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="Logo"
          ></img>
        </div>
        <div className="LoginBox">
          <input type={"text"} placeholder="id"></input>
          <input type={"password"} placeholder="password"></input>
          <Button>로그인</Button>
        </div>
        <div className="Box">
          <p>
            계정이 없으신가요? <a href="/join">가입하기</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

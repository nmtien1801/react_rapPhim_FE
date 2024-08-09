import { useEffect, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
// import { LoginNewUser } from "../../services/userService";
import _ from "lodash";
// import * as actions from "../../store/actions";

const Login = (props) => {
  const [email, setEmail] = useState("");

  let history = useNavigate();
  //   const handleLogin = () => {
  //     history.push("/login");
  //   };

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  return <div className="login-container">this is login</div>;
};

const mapStateToProps = (state) => {
  return {
    //     language: state.app.language,
    //     userInfo: state.user.userInfo,
    //     isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // navigate: (path) => dispatch(push(path)),
    //     userLoginFail: () => dispatch(actions.userLoginFail()),
    //     userLoginSuccess: (userInfo) =>
    //       dispatch(actions.userLoginSuccess(userInfo)),
  };
};
export default Login;

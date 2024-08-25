import { useEffect, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import { handleLogin } from "../../service/userService";
import _, { set } from "lodash";
import * as actions from "../../store/actions";
import { connect } from "react-redux"; // kết nối với store redux

const Login = (props) => {
  const [valueLogin, setValueLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isValidValueLogin, setIsValidValueLogin] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  let history = useNavigate();

  // đẩy ra khi đã có người dùng này
  // login: nếu đã đăng nhập thì đẩy ra trang chủ -> chặn /login
  useEffect(() => {
    if (props.isLoggedIn === true) {
      history("/");
    }
  }, []);

  const handleOnChangeLogin = (event) => {
    setValueLogin(event.target.value);
  };

  // search: press ENTER: react on keypress
  const handlePressEnter = (event) => {
    if (event.key === "Enter" && event.charCode === 13) {
      handleClickLogin();
    }
  };

  const HandleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleClickLogin = async () => {
    setErrMessage("");

    if (!valueLogin) {
      toast.error("please enter your email or phone number");
      setIsValidValueLogin(false);
      return;
    }
    if (!password) {
      toast.error("please enter your password");
      setIsValidPassword(false);
      return;
    }
    let res = await handleLogin(valueLogin, password);
    if (res && +res.EC === 0) {
      toast.success(res.EM);
      localStorage.setItem("rapPhim", res.DT.access_token); // cookies đã là string nên không dùng json.stringfy nữa
      props.userLoginSuccess(res.DT);
      history("/"); // đưa về trang chủ (nếu là admin thì có thêm thanh menu admin)
    } else {
      toast.error(res.EM);
      setErrMessage(res.EM);
    }
  };

  const handleCreateNewAccount = () => {
    history("/register");
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-ms-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">
              <Link to="/">
                <span>this is logo</span>
              </Link>
            </div>
            <div className="detail">This is detail</div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3 my-3 ">
            <div className="brand d-sm-none">This is logo</div>
            <input
              className={
                isValidValueLogin ? "form-control" : "form-control is-invalid"
              }
              type="text"
              placeholder="Email addrest or phone number"
              value={valueLogin}
              onChange={(event) => {
                handleOnChangeLogin(event);
              }}
            />
            <div className="custom-input-password">
              <input
                className={
                  isValidPassword ? "form-control" : "form-control is-invalid"
                }
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onKeyPress={(event) => {
                  handlePressEnter(event);
                }}
                onChange={(event) => {
                  HandleOnChangePassword(event);
                }}
              />
              <span
                onClick={() => {
                  handleShowHidePassword();
                }}
              >
                <i
                  className={isShowPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                />
              </span>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {errMessage}
            </div>
            <button
              className="btn btn-primary login"
              onClick={() => {
                handleClickLogin();
              }}
            >
              Login
            </button>
            <span className="forgot-password">
              <a href="#" className="">
                forgot your password ?
              </a>
              <span className="mx-5"></span>
              <span className="social-login">
                <i className="fa fa-google-plus google"></i>
                <i className="fa fa-facebook facebook"></i>
              </span>
            </span>

            <div className="btn-createAccount">
              <button
                className="btn btn-success"
                onClick={() => handleCreateNewAccount()}
              >
                Create New Acount
              </button>

              <div className="mt-3 return">
                <Link to="/">
                  <i className="fa fa-arrow-circle-left "></i>
                  <span title="return to home page">Return To HomePage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    userInfo: state.user.userInfo,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // navigate: (path) => dispatch(push(path)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

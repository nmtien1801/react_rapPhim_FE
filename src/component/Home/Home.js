import { useEffect, useState } from "react";
import "./Home.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
// import { LoginNewUser } from "../../services/userService";
import _ from "lodash";
// import * as actions from "../../store/actions";
import HomeHeader from "./HomeHeader";
import HomeFooter from "./HomeFooter";
import MovieIsShow from "./HomeContent/MovieIsShow";
import MovieUpComing from "./HomeContent/MovieUpComing";
import Discount from "./HomeContent/Discount";
import Cinema_Corner from "./HomeContent/Cinema_Corner/Cinema_Corner";

const Home = (props) => {
  const [email, setEmail] = useState("");

  let history = useNavigate();
  //   const handleLogin = () => {
  //     history.push("/login");
  //   };

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  return (
    <div className="home-container">
      <div className="home-header ">
        <HomeHeader />
      </div>

      <div className="home-content ">
        <MovieIsShow />
        <MovieUpComing />
        <Discount />
        <Cinema_Corner />
      </div>

      <div className="home-footer">
        <HomeFooter />
      </div>
    </div>
  );
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
export default Home;

import { useEffect, useState } from "react";
import "./HomeFooter.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../store/actions";

const HomeFooter = (props) => {
  const [email, setEmail] = useState("");

  let history = useNavigate();
  //   const handleLogin = () => {
  //     history.push("/login");
  //   };

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  return <div className="home-footer-container"></div>;
};

const mapStateToProps = (state) => {
  return {
    //     language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default HomeFooter;

import { useEffect, useState } from "react";
import "./Cinema_Corner.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../store/actions";

const Review_Movie = (props) => {
  const [email, setEmail] = useState("");

  let history = useNavigate();

  useEffect(() => {}, []);

  let location = props.location; // css bên trái khác bên phải
  return (
    <div
      className={
        location === "left"
          ? "left-location review-container "
          : "right-location review-container"
      }
    >
      <div className="img-review">
        <div
          className={
            location === "left" ? "left-location img " : "right-location img"
          }
        ></div>
      </div>
      <div className="title-review">
        <div className="title">
          {`[REVIEW] Thám Tử Lừng Danh Conan Ngôi Sao 5 Cánh 1 Triệu Đô: Bí Ẩn Lớn Nhất Về Kaito Kid`}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //     language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default Review_Movie;

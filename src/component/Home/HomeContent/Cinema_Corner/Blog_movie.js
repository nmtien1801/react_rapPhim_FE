import { useEffect, useState } from "react";
import "./Cinema_Corner.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../store/actions";

const Blog_movie = (props) => {
  const [email, setEmail] = useState("");

  let history = useNavigate();

  useEffect(() => {}, []);

  let location = props.location; // css bên trái khác bên phải
  return (
    <div
      className={
        location === "left"
          ? "left-location blog-container"
          : "right-location blog-container"
      }
    >
      <div className="img-blog">
        <div
          className={
            location === "left" ? "left-location img " : "right-location img"
          }
        ></div>
      </div>
      <div className="title-blog">
        <div className="title">
          {`Despicable Me 4: Chúng Ta Biết Được Bao Nhiêu Về Minions?`}
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
export default Blog_movie;

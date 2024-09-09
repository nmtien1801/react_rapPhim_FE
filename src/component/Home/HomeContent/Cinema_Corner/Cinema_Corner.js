import { useEffect, useState } from "react";
import "./Cinema_Corner.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
import Review_Movie from "./Review_Movie";
import Blog_movie from "./Blog_movie";
// import * as actions from "../../store/actions";

const Cinema_Corner = (props) => {
  const [isReview, setIsReview] = useState(true); // đang ở bình luận phim hay blog điện ảnh

  let history = useNavigate();

  useEffect(() => {}, []);

  const handleSelectReview = () => {
    setIsReview(true);
  };

  const handleSelectBlog = () => {
    setIsReview(false);
  };

  const handleSeeMore = () => {
    if (isReview) {
      history("/review-all-movie");
    } else {
      history("/blog-all-movie");
    }
  };

  return (
    <div className="cinema-corner-container">
      <div className="title-corner-cinema">
        <div className="title">GÓC ĐIỆN ẢNH</div>
        <div
          className={isReview ? "review-movie active" : "review-movie"}
          onClick={() => {
            handleSelectReview();
          }}
        >
          Bình luận phim
        </div>
        <div
          className={isReview ? "blog-movie" : "blog-movie active"}
          onClick={() => {
            handleSelectBlog();
          }}
        >
          Blog điện ảnh
        </div>
      </div>
      <div className="content-corner-cinema row">
        {isReview ? (
          <>
            <div className="left col-md-6">
              <Review_Movie location={"left"} />
            </div>
            <div className="right col-md-6">
              <Review_Movie location={"right"} />
              <Review_Movie location={"right"} />
              <Review_Movie location={"right"} />
            </div>
          </>
        ) : (
          <>
            <div className="left col-md-6">
              <Blog_movie location={"left"} />
            </div>
            <div className="right col-md-6">
              <Blog_movie location={"right"} />
              <Blog_movie location={"right"} />
              <Blog_movie location={"right"} />
            </div>
          </>
        )}
      </div>

      <button className="btn see-more" onClick={() => handleSeeMore()}>
        Xem thêm
      </button>
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
export default Cinema_Corner;

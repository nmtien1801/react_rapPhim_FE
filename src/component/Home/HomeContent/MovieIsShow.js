import { useEffect, useState } from "react";
import "./ListMovie.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../../store/actions";
import Slider from "react-slick"; // băng truyền
import "slick-carousel/slick/slick.css"; // bể layout slider hàng dọc
import "slick-carousel/slick/slick-theme.css";

const MovieIsShow = (props) => {
  const [email, setEmail] = useState("");

  let history = useNavigate();
  //   const handleLogin = () => {
  //     history.push("/login");
  //   };

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  let settings = {
    dots: true, // Ẩn dấu chấm phân trang
    infinite: true, // mũi tên đầu / cuối +  tự động quay về slide đầu tiên
    speed: 500,
    swipeToSlide: true, // trượt để chuyển slide
    autoplay: true, // tự chuyển slide
    autoplaySpeed: 2000,

    slidesToShow: 4, // số lượng slide hiển thị
    slidesToScroll: 1, // số lượng slide di chuyển

    // khi màn hình thu nhỏ sẽ thay đổi theo
    responsive: [
      {
        breakpoint: 1024, // kích thước màn hình dưới 1024px
        settings: {
          slidesToShow: 2, // hiển thị 3 slide
          slidesToScroll: 1,
          infinite: true,
          dots: true, // Ẩn dấu chấm phân trang
        },
      },
      {
        breakpoint: 768, // kích thước màn hình dưới 768px
        settings: {
          slidesToShow: 2, // hiển thị 2 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // kích thước màn hình dưới 480px
        settings: {
          slidesToShow: 1, // hiển thị 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="session movie-is-show-container">
      <div className="title">PHIM ĐANG CHIẾU</div>
      <div className="session-movie-list">
        <Slider {...settings}>
          <div className="customize-img-slider">
            <div className="bg-img"></div>
            <div className="name-movie">DeadPool and wolverine</div>
            <div className="option-movie">
              <Link to="/detail-movie">
                <i className="fa fa-play-circle me-2"></i>Xem trailer
              </Link>
              <button className="btn btn-warning">Đặt vé</button>
            </div>
          </div>
          <div className="customize-img-slider">
            <div className="bg-img"></div>
            <div className="name-movie">DeadPool and wolverine</div>
            <div className="option-movie">
              <Link to="/detail-movie">
                <i className="fa fa-play-circle me-2"></i>Xem trailer
              </Link>
              <button className="btn btn-warning">Đặt vé</button>
            </div>
          </div>
          <div className="customize-img-slider">
            <div className="bg-img"></div>
            <div className="name-movie">DeadPool and wolverine</div>
            <div className="option-movie">
              <Link to="/detail-movie">
                <i className="fa fa-play-circle me-2"></i>Xem trailer
              </Link>
              <button className="btn btn-warning">Đặt vé</button>
            </div>
          </div>
          <div className="customize-img-slider">
            <div className="bg-img"></div>
            <div className="name-movie">DeadPool and wolverine</div>
            <div className="option-movie">
              <Link to="/detail-movie">
                <i className="fa fa-play-circle me-2"></i>Xem trailer
              </Link>
              <button className="btn btn-warning">Đặt vé</button>
            </div>
          </div>
          <div className="customize-img-slider">
            <div className="bg-img"></div>
            <div className="name-movie">DeadPool and wolverine</div>
            <div className="option-movie">
              <Link to="/detail-movie">
                <i className="fa fa-play-circle me-2"></i>Xem trailer
              </Link>
              <button className="btn btn-warning">Đặt vé</button>
            </div>
          </div>
          <div className="customize-img-slider">
            <div className="bg-img"></div>
            <div className="name-movie">DeadPool and wolverine</div>
            <div className="option-movie">
              <Link to="/detail-movie">
                <i className="fa fa-play-circle me-2"></i>Xem trailer
              </Link>
              <button className="btn btn-warning">Đặt vé</button>
            </div>
          </div>
        </Slider>
      </div>
      <button className="btn see-more">Xem thêm</button>
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
export default MovieIsShow;

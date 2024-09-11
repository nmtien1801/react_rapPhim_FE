import { useEffect, useState } from "react";
import "./HomeHeader.scss";
import { Link, NavLink, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
import * as actions from "../../store/actions";
import { LANGUAGE } from "../../utils/constants";
import Slider from "react-slick"; // băng truyền
import "slick-carousel/slick/slick.css"; // bể layout slider hàng dọc
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux"; // kết nối với store redux
import { logoutUser } from "../../service/userService";
import { Modal } from "bootstrap";
import MovieIsShow from "./HomeContent/MovieIsShow"; // dùng trong modal hover vào phim
import MovieUpcoming from "./HomeContent/MovieUpComing";
import CustomScrollbars from "../../setup/CustomScrollbars";

const HomeHeader = (props) => {
  const [dataMoviePopular, setDataMoviePopular] = useState([]); // top 5 ds phim show trên banner
  const [dataPromotion, setDataPromotion] = useState([]); // ds ưu đãi
  const [showBurgerMenu, setShowBurgerMenu] = useState(false); // show menu burger

  const [showModalPhim, setShowModalPhim] = useState(false); // show modal phim
  const [showModalCornerMovie, setShowModalCornerMovie] = useState(false); // show modal góc điện ảnh
  const [showModalEvent, setShowModalEvent] = useState(false); // show modal sự kiện
  const [showModalTheaters, setShowModalTheaters] = useState(false); // show modal rạp/giá vé

  let history = useNavigate();

  const handleLogin = () => {
    history("/login"); // history.push("/login");
  };

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  const handleChangeLanguage = (language) => {
    props.changeLanguageApp(language);
  };

  let settings = {
    dots: true, // Ẩn dấu chấm phân trang
    infinite: true, // mũi tên đầu / cuối +  tự động quay về slide đầu tiên
    speed: 500,
    swipeToSlide: true, // trượt để chuyển slide
    autoplay: true, // tự chuyển slide
    autoplaySpeed: 1000,

    centerMode: true, // dư ra 1 phần ở 2 bên
    centerPadding: "170px", // Khoảng cách từ cạnh trái/phải của các slide

    slidesToShow: 1, // số lượng slide hiển thị
    slidesToScroll: 1, // số lượng slide di chuyển

    // khi màn hình thu nhỏ sẽ thay đổi theo
    responsive: [
      {
        breakpoint: 1024, // kích thước màn hình dưới 1024px
        settings: {
          slidesToShow: 1, // hiển thị 1 slide
          slidesToScroll: 1,

          centerMode: false, // dư ra 1 phần ở 2 bên
          centerPadding: 0, // Khoảng cách từ cạnh trái/phải của các slide

          infinite: true,
          dots: true, // Ẩn dấu chấm phân trang
        },
      },
    ],
  };

  const handleLogout = async () => {
    localStorage.removeItem("rapPhim"); // clear local storage
    let data = await logoutUser(); // clear cookies
    if (data && +data.EC === 0) {
      props.processLogout();
      toast.success("logout success...");
      // redux tự đẩy về trang login
    } else {
      toast.error(data.EM);
    }
  };

  const handleChooseMovie = () => {
    history("/booking");
  };

  // ẩn hiện modal khi hover vào phim
  const handleOnShowModalMovie = () => {
    setShowModalPhim(true);
  };
  const handleOnHideModalMovie = () => {
    setShowModalPhim(false);
  };

  // ẩn hiện modal khi hover vào góc điện ảnh
  const handleOnShowModalCornerMovie = () => {
    setShowModalCornerMovie(true);
  };
  const handleOnHideModalCornerMovie = () => {
    setShowModalCornerMovie(false);
  };

  // ẩn hiện modal khi hover vào sự kiện
  const handleOnShowModalEvent = () => {
    setShowModalEvent(true);
  };
  const handleOnHideModalEvent = () => {
    setShowModalEvent(false);
  };

  // ẩn hiện modal khi hover vào rạp/giá vé
  const handleOnShowModalTheaters = () => {
    setShowModalTheaters(true);
  };

  const handleOnHideModalTheaters = () => {
    setShowModalTheaters(false);
  };

  let { language, isLoggedIn } = props;
  return (
    <>
      <div className="home-header-container">
        <div className="up">
          <div className="row intro-header">
            <div className="logo-header col-md-2"></div>

            <div className="booking col-md-4">
              <div className="booking-ticket">
                <i className="fa fa-ticket me-2"></i>ĐẶT VÉ NGAY
              </div>
              <div className="booking-food">
                <i className="fa fa-trash-o me-2"></i>ĐẶT BẮP NƯỚC
              </div>
            </div>

            <div className="login-header col-md-6 ">
              <div className="search">
                <input type="text" placeholder="Tìm kiếm" />
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>

              {/* gợi ý search */}
              {isLoggedIn === false ? (
                <div className="login" onClick={() => handleLogin()}>
                  <i className="fa fa-user-circle-o"></i>
                  <span>Đăng nhập</span>
                </div>
              ) : (
                <div className="login login-auth">
                  <i className="fa fa-user-circle-o"></i>
                  {/* <span>Nguyễn Minh Tiến</span> */}
                  <div className="login-auth-content">
                    <div className="login-auth-content-item">
                      Thông tin cá nhân
                    </div>
                    <div
                      className="login-auth-content-item"
                      onClick={() => handleLogout()}
                    >
                      Đăng xuất
                    </div>
                  </div>
                </div>
              )}

              <div className="language">
                <div
                  className={
                    language === LANGUAGE.VI
                      ? "language-vi active"
                      : "language-vi"
                  }
                  onClick={() => handleChangeLanguage(LANGUAGE.VI)}
                >
                  <span>VI</span>
                </div>

                <div
                  className={
                    language === LANGUAGE.EN
                      ? "language-en active"
                      : "language-en"
                  }
                  onClick={() => handleChangeLanguage(LANGUAGE.EN)}
                >
                  <span>EN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="option-header row">
            <div className="option-app-location col-md-3">
              <div className="choose-location">
                <i className="fa fa-map-marker me-2"></i>
                Chọn rạp
              </div>
              <div className="choose-time">
                <i className="fa fa-map-marker me-2"></i>
                lịch chiếu
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="option-app-menu col-md-5">
              <div className="buy-ticket" onClick={() => handleChooseMovie()}>
                mua vé
              </div>
              <div
                className="movie"
                onMouseOver={() => handleOnShowModalMovie()}
                onMouseOut={() => handleOnHideModalMovie()}
              >
                Phim
              </div>
              <div
                className="cinema-corner"
                onMouseOver={() => handleOnShowModalCornerMovie()}
                onMouseOut={() => handleOnHideModalCornerMovie()}
              >
                góc điện ảnh
              </div>
              <div
                className="event"
                onMouseOver={() => handleOnShowModalEvent()}
                onMouseOut={() => handleOnHideModalEvent()}
              >
                Sự kiện
              </div>
              <div
                className="Theaters-ticketPrices"
                onMouseOver={() => handleOnShowModalTheaters()}
                onMouseOut={() => handleOnHideModalTheaters()}
              >
                Rạp/giá vé
              </div>
            </div>
          </div>

          <button
            className=" p-4 d-block d-lg-none burger-menu"
            onClick={() => props.handleShowMenuBurger()}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>

        <div className="down">
          <div className="slider-all">
            <Slider {...settings}>
              <div className="customize-img-slider-header">
                <div className="bg-img"></div>
              </div>
              <div className="customize-img-slider-header">
                <div className="bg-img"></div>
              </div>
              <div className="customize-img-slider-header">
                <div className="bg-img"></div>
              </div>
              <div className="customize-img-slider-header">
                <div className="bg-img"></div>
              </div>
              <div className="customize-img-slider-header">
                <div className="bg-img"></div>
              </div>
              <div className="customize-img-slider-header">
                <div className="bg-img"></div>
              </div>
            </Slider>
          </div>

          <div className="procedure-book-ticket">
            <div className="procedure">
              <span>1</span>
              <select className="procedure-content">
                <option value={"Chọn Phim"}>Chọn Phim</option>
              </select>
            </div>

            <div className="procedure">
              <span>2</span>
              <select className="procedure-content">
                <option value={"Chọn Rạp"}>Chọn Rạp</option>
              </select>
            </div>

            <div className="procedure">
              <span>3</span>
              <select className="procedure-content">
                <option value={"Chọn Ngày"}>Chọn Ngày</option>
              </select>
            </div>
            <div className="procedure">
              <span>4</span>
              <select className="procedure-content">
                <option value={"Chọn Suất"}>Chọn Suất</option>
              </select>
            </div>
            <div className="procedure">
              <div className="procedure-content buy-ticket">Mua Vé Nhanh</div>
            </div>
          </div>
        </div>

        {/* modal phim */}
        {showModalPhim && (
          <div
            className="show-modal-movie"
            onMouseOver={() => handleOnShowModalMovie()}
            onMouseLeave={() => handleOnHideModalMovie()}
          >
            <div className="modal-movie-fix-is-show">
              <MovieIsShow />
            </div>
            <div className="modal-movie-fix-up-coming">
              <MovieUpcoming />
            </div>
          </div>
        )}

        {/* modal góc điện ảnh */}
        {showModalCornerMovie && (
          <div
            className="show-modal-corner-movie"
            onMouseOver={() => handleOnShowModalCornerMovie()}
            onMouseLeave={() => handleOnHideModalCornerMovie()}
          >
            <div
              className="modal-corner-movie-item category"
              onClick={() => history("/category-movie")}
            >
              Thể Loại Phim
            </div>
            <div
              className="modal-corner-movie-item cast"
              onClick={() => history("/actor-movie")}
            >
              Diễn Viên
            </div>
            <div
              className="modal-corner-movie-item director"
              onClick={() => history("/director-movie")}
            >
              Đạo Diễn
            </div>
            <div
              className="modal-corner-movie-item comment"
              onClick={() => history("/review-all-movie")}
            >
              Bình Luận Phim
            </div>
            <div
              className="modal-corner-movie-item blog-movie"
              onClick={() => history("/blog-all-movie")}
            >
              Blog Điện Ảnh
            </div>
          </div>
        )}

        {/* modal sự kiện */}
        {showModalEvent && (
          <div
            className="show-modal-event"
            onMouseOver={() => handleOnShowModalEvent()}
            onMouseLeave={() => handleOnHideModalEvent()}
          >
            <div
              className="modal-event-item"
              onClick={() => history("/promotion")}
            >
              Ưu Đãi
            </div>
            <div className="modal-event-item">Phim Hay Tháng</div>
          </div>
        )}

        {/* modal rạp/giá vé */}
        {showModalTheaters && (
          <div
            className="show-modal-theaters"
            onMouseOver={() => handleOnShowModalTheaters()}
            onMouseLeave={() => handleOnHideModalTheaters()}
          >
            <CustomScrollbars style={{ height: "200px" }}>
              <div
                className="modal-theaters-item"
                onClick={() => history(`/rap-galaxy-Nguyen-du`)}
              >
                Galaxy Nguyễn Du
              </div>
              <div className="modal-theaters-item">Galaxy Tân Bình</div>
              <div className="modal-theaters-item">Galaxy Quang Trung</div>
              <div className="modal-theaters-item">Galaxy Huế</div>
              <div className="modal-theaters-item">Galaxy Quảng Ngãi</div>
              <div className="modal-theaters-item">Galaxy Quảng Bình</div>
            </CustomScrollbars>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageApp: (language) => dispatch(actions.changeLanguage(language)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

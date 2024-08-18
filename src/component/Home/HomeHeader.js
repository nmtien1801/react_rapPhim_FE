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

const HomeHeader = (props) => {
  const [dataMoviePopular, setDataMoviePopular] = useState([]); // top 5 ds phim show trên banner
  const [dataPromotion, setDataPromotion] = useState([]); // ds ưu đãi
  const [showBurgerMenu, setShowBurgerMenu] = useState(false); // show menu burger

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

  let language = props.language;
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

              <div className="login" onClick={() => handleLogin()}>
                Đăng nhập
              </div>
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
              <div className="buy-ticket">mua vé</div>
              <div className="movie">Phim</div>
              <div className="cinema-corner">góc điện ảnh</div>
              <div className="event">Sự kiện</div>
              <div className="Theaters-ticketPrices">Rạp/giá vé</div>
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
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // processLogout: () => dispatch(actions.processLogout()),
    changeLanguageApp: (language) => dispatch(actions.changeLanguage(language)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

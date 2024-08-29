import { useEffect, useState } from "react";
import "./ChooseMovie.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../store/actions";
import { connect } from "react-redux"; // kết nối với store redux
import HomeHeader from "../../Home/HomeHeader";
import HomeFooter from "../../Home/HomeFooter";
import Slider from "react-slick"; // băng truyền
import "slick-carousel/slick/slick.css"; // bể layout slider hàng dọc
import "slick-carousel/slick/slick-theme.css";

const ChooseMovie = (props) => {
  const [active, setActive] = useState(""); // chọn lịch chiếu hiện Blue

  let history = useNavigate();

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  const handleSelectSchedule = (time) => {
    setActive(time);
  };

  let settings = {
    dots: false, // Ẩn dấu chấm phân trang
    infinite: false, // mũi tên đầu / cuối +  tự động quay về slide đầu tiên
    speed: 500,
    swipeToSlide: true, // trượt để chuyển slide
    autoplay: false, // tự chuyển slide
    autoplaySpeed: 1000,

    centerMode: false, // dư ra 1 phần ở 2 bên
    centerPadding: "170px", // Khoảng cách từ cạnh trái/phải của các slide

    slidesToShow: 4, // số lượng slide hiển thị
    slidesToScroll: 1, // số lượng slide di chuyển

    rows: 2, // số hàng
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

  const showtimes = [
    { cinema: "Galaxy Nguyễn Du", format: "2D Lồng tiếng", time: "09:15" },
    { cinema: "CGV Vincom Đồng Khởi", format: "3D Phụ đề", time: "12:30" },
    { cinema: "Lotte Cinema Nam Sài Gòn", format: "2D Phụ đề", time: "15:00" },
    { cinema: "BHD Star Cineplex", format: "4DX Lồng tiếng", time: "18:45" },
    { cinema: "CineStar Hai Bà Trưng", format: "2D Lồng tiếng", time: "20:00" },
  ];

  return (
    <div className="choose-movie-container">
      <div className="header-css">
        <HomeHeader />
      </div>

      <div className="procedure-booking">
        <div className="choose">Chọn phim/ Rạp/ Suất</div>
        <div className="not-choose">Chọn ghế</div>
        <div className="not-choose">Chọn thức ăn</div>
        <div className="not-choose">Thanh toán</div>
        <div className="not-choose">Xác nhận</div>
      </div>

      <div className="procedure-choose-movie row">
        <div className="col-md-8 left">
          <div className="choose-location choose-css">
            <div className="title">Chọn vị trí</div>
            <div className="show-location">
              <button className="btn">TP Hồ Chí Minh</button>
              <button className="btn">Hà Nội</button>
            </div>
          </div>

          <div className="choose-movie choose-css">
            <div className="title">Chọn phim</div>
            <div className="show-movie">
              <Slider {...settings}>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
                <div className="customize-img-slider-movie">
                  <div className="bg-img"></div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="choose-show-time choose-css">
            <div className="title">Chọn suất chiếu</div>
            <div className="show-time">
              <div className="option-schedule form-group row">
                <div className="col-md-8 schedule">
                  {["hôm nay 26/08", "ngày mai 27/08", "ngày kia 28/08"].map(
                    (time, index) => (
                      <div
                        key={index}
                        className={active === index ? "active" : ""}
                        onClick={() => handleSelectSchedule(index)}
                      >
                        {time}
                      </div>
                    )
                  )}
                </div>

                <div className="col-md-4">
                  <select className="form-control">
                    <option>Tất cả rạp</option>
                    <option>Rạp 1</option>
                    <option>Rạp 2</option>
                    <option>Rạp 3</option>
                  </select>
                </div>
              </div>

              <div className="content-schedule">
                {showtimes.map((show, index) => (
                  <div
                    key={index}
                    className="cinema-showTime"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? "" : "rgb(253 251 250)",
                    }}
                  >
                    <div className="thread">{show.cinema}</div>
                    <div className="detail-booking">
                      <div className="formality">{show.format}</div>
                      <button className="btn">{show.time}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 right">
          <div className="right-content">
            <div className="info-img">
              <div className="img"></div>
              <div className="info">
                <div className="name-movie">Đẹp Trai... Thấy Sai Sai</div>
                <div className="formality">2D Lồng Tiếng</div>
              </div>
            </div>
            <div className="show-time-movie-select">
              <div className="location">
                <strong>Galaxy Nguyễn Du</strong> - RAP 3
              </div>
              <div className="time">
                Suất: <strong>13:15</strong> - Thứ Năm,
                <strong> 29/08/2024</strong>
              </div>
            </div>
            <div className="pay">
              <strong>Tổng cộng</strong>
              <span>100.000 đ</span>
            </div>
          </div>
        </div>
      </div>

      <HomeFooter />
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
export default connect(mapStateToProps, mapDispatchToProps)(ChooseMovie);

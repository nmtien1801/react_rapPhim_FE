import { useEffect, useState } from "react";
import "./DatVe.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
import * as actions from "../../store/actions";
import { connect } from "react-redux"; // kết nối với store redux
import HomeFooter from "../Home/HomeFooter";
import HomeHeader from "../Home/HomeHeader";

const DatVe = (props) => {
  const [active, setActive] = useState(""); // chọn lịch chiếu hiện Blue

  let history = useNavigate();

  useEffect(() => {}, []);

  const handleSelectSchedule = (time) => {
    setActive(time);
  };

  const showtimes = [
    { cinema: "Galaxy Nguyễn Du", format: "2D Lồng tiếng", time: "09:15" },
    { cinema: "CGV Vincom Đồng Khởi", format: "3D Phụ đề", time: "12:30" },
    { cinema: "Lotte Cinema Nam Sài Gòn", format: "2D Phụ đề", time: "15:00" },
    { cinema: "BHD Star Cineplex", format: "4DX Lồng tiếng", time: "18:45" },
    { cinema: "CineStar Hai Bà Trưng", format: "2D Lồng tiếng", time: "20:00" },
  ];

  return (
    <div className="booking-ticket-container">
      <HomeHeader />

      <div className="booking-ticket-content">
        <div className="detail-movie">
          <div className="trailer-movie">
            {/* CHÈN VIDEO VÀO WEB
            B1: chuột phải chọn coppy embed code trên youtobe 
            B2: chỉnh css*/}
            <iframe
              // width="500px" //-> trong css
              // height="450px"
              src="https://www.youtube.com/embed/dV0MJEENgvg"
              title="Review phim Ma Da: Thêm một bước &#39;giậm chân tại chỗ&#39; của phim kinh dị Việt Nam"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className="detail">
            <div className="img"></div>

            <div className="info">
              <div className="title-info">
                Thám tử lừng danh Conan: Ngôi sao 5 cánh 1 triệu đô
              </div>
              <div className="time">
                <span>
                  <i className="fa fa-clock-o"></i> 111 phút
                </span>
                <span>
                  <i className="fa fa-calendar-o"></i> 02/08/2024
                </span>
              </div>
              <div className="nation">
                <span>Quốc gia: </span>
                <span>Nhật bản</span>
              </div>
              <div className="category">
                <span>Thể loại: </span>
                <button className="btn">Hoạt hình</button>
              </div>
              <div className="Director">
                <span>Đạo diễn: </span>
                <button className="btn">Nagaoka Tomoka</button>
              </div>
              <div className="cast">
                <span>Diễn viên: </span>
                <button className="btn">
                  Minami Takayama, Wakana Yamazaki, Rikiya Koyama
                </button>
              </div>
            </div>
          </div>

          <div className="intro">
            <div className="title-intro">Nội dung phim</div>
            <div className="content-intro">
              Siêu trộm Kaito Kid và thám tử miền Tây Hattori Heiji cùng đối đầu
              trong cuộc tranh giành thanh kiếm thuộc về Hijikata Toushizou -
              phó chỉ huy của Shinsengumi! Thù mới hận cũ, Heiji sẽ xử trí Kid
              thế nào đây? Ngoài ra, một bí mật kinh khủng về Kaito Kid sắp được
              tiếp lộ... Phim mới Thám Tử Lừng Danh Conan: Ngôi Sao 5 Cánh 1
              Triệu Đô suất chiếu sớm 27.07 (Không áp dụng Movie Voucher), ra
              mắt tại các rạp chiếu phim toàn quốc từ 27.07.2024
            </div>
          </div>
        </div>

        <div className="schedule-movie">
          <div className="title-schedule">Lịch chiếu</div>
          <div className="option-schedule form-group row">
            <div className="col-md-6 schedule">
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
            <div className="col-md-3">
              <select className="form-control">
                <option>Toàn quốc</option>
                <option>TP Hồ Chí Minh</option>
                <option>Đà Nẵng</option>
                <option>Hải Phòng</option>
              </select>
            </div>
            <div className="col-md-3">
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
                  backgroundColor: index % 2 === 0 ? "" : "rgb(253 251 250)",
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
          <div></div>
        </div>
      </div>

      <HomeFooter />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(DatVe);

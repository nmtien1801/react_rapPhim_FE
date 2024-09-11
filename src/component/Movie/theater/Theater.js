import { useEffect, useState } from "react";
import "./Theater.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../store/actions";
import { connect } from "react-redux"; // kết nối với store redux
import HomeHeader from "../../Home/HomeHeader";
import HomeFooter from "../../Home/HomeFooter";

const Theater = (props) => {
  const [active, setActive] = useState(""); // chọn lịch chiếu hiện Blue

  const handleSelectSchedule = (time) => {
    setActive(time);
  };

  let history = useNavigate();

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  const scheduleArr = [
    "hôm nay 26/08",
    "Thứ Tư 27/08",
    "Thứ Năm 28/08",
    "Thứ Sáu 29/08",
    "Thứ Bảy 30/08",
    "Chủ Nhật 31/08",
    "Thứ Hai 01/09",
    "Thứ Ba 02/09",
    "Thứ Tư 03/09",
  ];

  return (
    <div className="promotion-container">
      <div className="header">
        <HomeHeader />
      </div>

      <div className="choose-show-time choose-css">
        <div className="title">Chọn suất chiếu</div>
        <div className="show-time">
          <div className="option-schedule form-group">
            <div className="schedule">
              {scheduleArr.map((time, index) => (
                <div
                  key={index}
                  className={active === index ? "active" : ""}
                  onClick={() => handleSelectSchedule(index)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>

          <div className="content-schedule">
            <div className="list-img">
              <div className="img "></div>
              <div className="img "></div>
              <div className="img "></div>
              <div className="img "></div>
              <div className="img "></div>
              <div className="img "></div>
              <div className="img "></div>
              <div className="img "></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <HomeFooter />
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
export default connect(mapStateToProps, mapDispatchToProps)(Theater);

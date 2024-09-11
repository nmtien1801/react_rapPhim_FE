import { useEffect, useState } from "react";
import "./Promotion.scss";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../store/actions";
import { connect } from "react-redux"; // kết nối với store redux
import HomeHeader from "../../Home/HomeHeader";
import HomeFooter from "../../Home/HomeFooter";

const Promotion = (props) => {
  const [email, setEmail] = useState("");

  let history = useNavigate();

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  const promotions = [
    {
      id: 1,
      title: "C’STUDENT - 45K CHO HỌC SINH SINH VIÊN",
      description:
        "Đồng giá 45K/2D cho HSSV/GV/U22 cả tuần tại mọi cụm rạp Cinestar",
      condition:
        "HSSV xuất trình thẻ HSSV hoặc CCCD từ dưới 22 tuổi. Giảng viên/ giáo viên xuất trình thẻ giảng viên.",
      note: "Mỗi thẻ mua được một vé. Không áp dụng cho các ngày Lễ, Tết, hoặc suất chiếu có phụ thu từ nhà phát hành phim.",
    },
    {
      id: 2,
      title: "C’STUDENT - 45K CHO HỌC SINH SINH VIÊN",
      description:
        "Đồng giá 45K/2D cho HSSV/GV/U22 cả tuần tại mọi cụm rạp Cinestar",
      condition:
        "HSSV xuất trình thẻ HSSV hoặc CCCD từ dưới 22 tuổi. Giảng viên/ giáo viên xuất trình thẻ giảng viên.",
      note: "Mỗi thẻ mua được một vé. Không áp dụng cho các ngày Lễ, Tết, hoặc suất chiếu có phụ thu từ nhà phát hành phim.",
    },
  ];

  return (
    <div className="promotion-container">
      <div className="header">
        <HomeHeader />
      </div>

      <div className="content-promotion">
        <div>
          {promotions.map((promotion, index) => (
            <div key={promotion.id} className="item-promotion">
              {index % 2 === 0 ? (
                <>
                  <div className="left">
                    <div className="content">
                      <div className="title">{promotion.title}</div>
                      {promotion.description}
                      <div className="condition">
                        <div>Điều kiện:</div>
                        {promotion.condition}
                      </div>
                      <div className="note">
                        <div>Lưu ý:</div>
                        {promotion.note}
                      </div>
                    </div>
                    <button className="btn-promotion btn btn-warning">
                      ĐẶT VÉ NGAY
                    </button>
                  </div>
                  <div className="right">
                    <div className="img"></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="right">
                    <div className="img"></div>
                  </div>
                  <div className="left">
                    <div className="content">
                      <div className="title">{promotion.title}</div>
                      {promotion.description}
                      <div className="condition">
                        <div>Điều kiện:</div>
                        {promotion.condition}
                      </div>
                      <div className="note">
                        <div>Lưu ý:</div>
                        {promotion.note}
                      </div>
                    </div>
                    <button className="btn-promotion btn btn-warning">
                      ĐẶT VÉ NGAY
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(Promotion);

import { useEffect, useState } from "react";
import "../../Home/HomeContent/Cinema_Corner/SeeMore.scss";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import HomeHeader from "../../Home/HomeHeader";
import HomeFooter from "../../Home/HomeFooter";
import { connect } from "react-redux"; // kết nối với store redux
// import * as actions from "../../store/actions";

const ActorMovie = (props) => {
  const [email, setEmail] = useState("");

  //   let history = useNavigate();

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  const contentSeeMore = [
    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/DienVien.jpg",
      title: "Chris Evans",
      content:
        "Khác với Chris Hemsworth vẫn đang loay hoay trong hình tượng vị thần sấm sét, đa số người hâm mộ vẫn nhìn nhận rõ ràng, Chris Evans và Captain America là hai con người hoàn toàn khác nhau.",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/DienVien.jpg",
      title: "Chris Evans",
      content:
        "Khác với Chris Hemsworth vẫn đang loay hoay trong hình tượng vị thần sấm sét, đa số người hâm mộ vẫn nhìn nhận rõ ràng, Chris Evans và Captain America là hai con người hoàn toàn khác nhau.",
    },
    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/DienVien.jpg",
      title: "Chris Evans",
      content:
        "Khác với Chris Hemsworth vẫn đang loay hoay trong hình tượng vị thần sấm sét, đa số người hâm mộ vẫn nhìn nhận rõ ràng, Chris Evans và Captain America là hai con người hoàn toàn khác nhau.",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/DienVien.jpg",
      title: "Chris Evans",
      content:
        "Khác với Chris Hemsworth vẫn đang loay hoay trong hình tượng vị thần sấm sét, đa số người hâm mộ vẫn nhìn nhận rõ ràng, Chris Evans và Captain America là hai con người hoàn toàn khác nhau.",
    },
  ];

  return (
    <div className="see-more-container">
      <div className="see-more-css-homeHeader">
        <HomeHeader />
      </div>

      <div className="see-more-content">
        <div className="up">
          <div className="title-see-more">BÌNH LUẬN PHIM</div>
          <div className="form-group row">
            <div className="col-md-2">
              <select className="form-control ">
                <option value="">Quốc Gia</option>
                <option value="">Ấn Độ</option>
                <option value="">Mỹ</option>
              </select>
            </div>

            <div className="col-md-2">
              <select className="form-control ">
                <option value="">Xem nhiều nhất</option>
                <option value="dangChieu">Mới nhất</option>
                <option value="sapChieu">Đánh giá tốt nhất</option>
              </select>
            </div>

            <div className="col-md-3"></div>
          </div>
        </div>

        <div className="down">
          <div className="item-see-more">
            {contentSeeMore &&
              contentSeeMore.map((item, index) => {
                return (
                  <div className="item-content">
                    <div
                      className="img-see-more"
                      style={{
                        backgroundImage: `url(${item.previewIMG})`,
                      }}
                    ></div>
                    <div className="content-see-more">
                      <div className="item-see-more">
                        <div className="title-item">{item.title}</div>
                        <div className="content-item">{item.content}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="see-more-css-homeFooter">
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
export default connect(mapStateToProps, mapDispatchToProps)(ActorMovie);

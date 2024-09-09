import { useEffect, useState } from "react";
import "./SeeMore.scss";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import HomeHeader from "../../HomeHeader";
import HomeFooter from "../../HomeFooter";
import { connect } from "react-redux"; // kết nối với store redux
// import * as actions from "../../store/actions";

const SeeMore_reviewMovie = (props) => {
  const [email, setEmail] = useState("");

  //   let history = useNavigate();

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  const contentSeeMore = [
    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-1.webp",
      title: " [Review] Beetlejuice 2: Phim Kinh Dị Về Mái Ấm Gia Đình",
      content:
        "   Không đánh đố, không hù dọa, không cố phức tạp hóa câu chuyện nên Beetlejuice 2 hoàn toàn xứng đáng thưởng thức cùng bạn bè hoặc người thân để có những giờ phút giải trí thoải mái.",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-1.webp",
      title: " [Review] Beetlejuice 2: Phim Kinh Dị Về Mái Ấm Gia Đình",
      content:
        "   Không đánh đố, không hù dọa, không cố phức tạp hóa câu chuyện nên Beetlejuice 2 hoàn toàn xứng đáng thưởng thức cùng bạn bè hoặc người thân để có những giờ phút giải trí thoải mái.",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-1.webp",
      title: " [Review] Beetlejuice 2: Phim Kinh Dị Về Mái Ấm Gia Đình",
      content:
        "   Không đánh đố, không hù dọa, không cố phức tạp hóa câu chuyện nên Beetlejuice 2 hoàn toàn xứng đáng thưởng thức cùng bạn bè hoặc người thân để có những giờ phút giải trí thoải mái.",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-1.webp",
      title: " [Review] Beetlejuice 2: Phim Kinh Dị Về Mái Ấm Gia Đình",
      content:
        "   Không đánh đố, không hù dọa, không cố phức tạp hóa câu chuyện nên Beetlejuice 2 hoàn toàn xứng đáng thưởng thức cùng bạn bè hoặc người thân để có những giờ phút giải trí thoải mái.",
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
            <div className="col-md-3">
              <select className="form-control ">
                <option value="all">Tất cả</option>
                <option value="review">Review</option>
                <option value="preview">Preview</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-control ">
                <option value="">Đang chiếu/ Sắp chiếu</option>
                <option value="dangChieu">Đang chiếu</option>
                <option value="sapChieu">Sắp chiếu</option>
              </select>
            </div>
            <div className="col-md-3">
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeeMore_reviewMovie);

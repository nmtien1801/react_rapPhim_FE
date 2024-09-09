import { useEffect, useState } from "react";
import "../../Home/HomeContent/Cinema_Corner/SeeMore.scss";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import HomeHeader from "../../Home/HomeHeader";
import HomeFooter from "../../Home/HomeFooter";
import { connect } from "react-redux"; // kết nối với store redux
// import * as actions from "../../store/actions";

const DirectorMovie = (props) => {
  const [email, setEmail] = useState("");

  //   let history = useNavigate();

  // đẩy ra khi đã có người dùng này
  useEffect(() => {}, []);

  const contentSeeMore = [
    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-2.webp",
      title: "James Wan",
      content:
        "Khi Hollywood vẫn còn bị chỉ trích về nạn phân biệt chủng tộc, khi những tài năng da màu đều phải chật vật để tìm chỗ đứng, một người đàn ông đã chứng minh rằng chỉ cần có khả năng kiệt xuất thì dù ở đâu hay bất cứ vị trí nào, bạn cũng sẽ tỏa sáng. Anh ấy là James...",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-2.webp",
      title: "James Wan",
      content:
        "Khi Hollywood vẫn còn bị chỉ trích về nạn phân biệt chủng tộc, khi những tài năng da màu đều phải chật vật để tìm chỗ đứng, một người đàn ông đã chứng minh rằng chỉ cần có khả năng kiệt xuất thì dù ở đâu hay bất cứ vị trí nào, bạn cũng sẽ tỏa sáng. Anh ấy là James...",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-2.webp",
      title: "James Wan",
      content:
        "Khi Hollywood vẫn còn bị chỉ trích về nạn phân biệt chủng tộc, khi những tài năng da màu đều phải chật vật để tìm chỗ đứng, một người đàn ông đã chứng minh rằng chỉ cần có khả năng kiệt xuất thì dù ở đâu hay bất cứ vị trí nào, bạn cũng sẽ tỏa sáng. Anh ấy là James...",
    },

    {
      previewIMG:
        "https://raw.githubusercontent.com/nmtien1801/react_rapPhim_FE/master/public/movie/km-m-2.webp",
      title: "James Wan",
      content:
        "Khi Hollywood vẫn còn bị chỉ trích về nạn phân biệt chủng tộc, khi những tài năng da màu đều phải chật vật để tìm chỗ đứng, một người đàn ông đã chứng minh rằng chỉ cần có khả năng kiệt xuất thì dù ở đâu hay bất cứ vị trí nào, bạn cũng sẽ tỏa sáng. Anh ấy là James...",
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
export default connect(mapStateToProps, mapDispatchToProps)(DirectorMovie);

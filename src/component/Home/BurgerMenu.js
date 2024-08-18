import { useEffect, useState } from "react";
import "./BurgerMenu.scss";
import { NavLink, useNavigate } from "react-router-dom"; // useHistory -> useNavigate
import { toast } from "react-toastify";
import _ from "lodash";
// import * as actions from "../../store/actions";

const BurgerMenu = (props) => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false); // show menu burger

  let history = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className="show-menu-burger">
      <NavLink to="/home" className="menu-item" />
      Trang chủ
      <NavLink to="/home" className="menu-item" />
      Đặt vé
      <NavLink to="/home" className="menu-item" />
      Bắp nước
      <NavLink to="/home" className="menu-item" />
      Lịch chiếu
      <NavLink to="/home" className="menu-item" />
      Khuyến mãi
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
export default BurgerMenu;

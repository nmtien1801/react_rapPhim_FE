import "./style/App.css";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavLink,
  redirect,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./component/Home/Home";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import DatVe from "./component/Movie/DatVe";
import { connect } from "react-redux";
import { path } from "./utils/constants";
import ChooseMovie from "./component/Movie/procedureBooking/ChooseMovie";
import CustomScrollbars from "./setup/CustomScrollbars";
import SeeMore_reviewMovie from "./component/Home/HomeContent/Cinema_Corner/SeeMore_reviewMovie";
import SeeMore_Blog from "./component/Home/HomeContent/Cinema_Corner/SeeMore_Blog";

function App() {
  return (
    <>
      {/* khi thẻ div bị over flow thì sẽ xuất hiện thanh cuộn */}
      <div className="App">
        <CustomScrollbars style={{ height: "100vh" }}>
          <BrowserRouter>
            <Routes>
              <Route path={path.HOME} exact element={<Home />} />
              <Route path={path.LOGIN} element={<Login />} />
              <Route path={path.REGISTER} element={<Register />} />

              <Route path={path.DAT_VE} element={<DatVe />} />
              <Route path={path.BOOKING} element={<ChooseMovie />} />
              <Route
                path={path.Review_Movie}
                element={<SeeMore_reviewMovie />}
              />
              <Route path={path.Blog_movie} element={<SeeMore_Blog />} />
            </Routes>
          </BrowserRouter>
        </CustomScrollbars>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

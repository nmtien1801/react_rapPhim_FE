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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={path.HOME} exact element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />

          <Route path={path.DAT_VE} element={<DatVe />} />
        </Routes>

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
      </BrowserRouter>
    </div>
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

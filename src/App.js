import "./style/App.css";
import {
  NavLink,
  redirect,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Login from "./component/Auth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />

          {/* <Route path="/login" element={<LogInPage />} /> */}
          {/* <Route path="*">
          <redirect to="/" />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

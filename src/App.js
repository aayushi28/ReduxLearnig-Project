import { Route, Routes } from "react-router-dom";
import Welcome from "./Page/WelcomeAdmin";
import WelcomeHome from "./Page/WelcomeHome";
import Login from "./Component/Login/Login";
import RegistrationPage from "./Component/Login/RegistrationPage";
import UsersList from "./Component/List/UsersList";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Welcome />}/>
        <Route path="/home" element={<WelcomeHome/>}/>
        <Route path="/" element={<RegistrationPage/>}/>
        <Route path="/media" element={<UsersList/>}/>
      </Routes>
    </div>
  );
}

export default App;

// 34708467709-9ogiga3t1l1sl1tif92ndil5lepndphm.apps.googleusercontent.com -CLient id
// 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 - Client secret
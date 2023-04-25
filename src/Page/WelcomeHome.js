import CommonNavbar from "./CommonNavbar";
import SubNavbar from "./SubNavbar";
import CarList from "../Component/Car/CarList";
import CarSearch from "../Component/Car/CarSearch";
import CarValue from "../Component/Car/CarValue";
import CarForm from "../Component/Car/CarForm";
function WelcomeHome() {
  return (
    <>
      <CommonNavbar/>
      <SubNavbar/>
      <div className="container is-fluid">
        <CarForm/>
        <CarSearch/>
        <CarList/>
        <CarValue/>
      </div>
    </>
  );
}

export default WelcomeHome;

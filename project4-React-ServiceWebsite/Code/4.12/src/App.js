import "./App.css";
import Header from "./Components/Header/header";
import Footer from "./Components/footer/footer";
import Profile from "./Pages/Profile/Profile";
import Services from "./Pages/services/services";
import Login from "./Pages/login/ValiationForm";
// import Cards from "./Components/Cards/servicesCards";
import Coverflow from "./Components/Coverflow/Coverflow";
// import CoverFlow from "./Components/3DCoverFlow/3dcoverFlow";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Services /> */}
      <Login />
      {/* <Profile /> */}
      {/* <Coverflow /> */}
      <Footer />
    </div>
  );
}

export default App;

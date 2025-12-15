import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import WhoWeAre from "./views/who-we-are/WhoWeAre";
import History from "./views/history/History";
import InvestmentCommitee from "./views/investment-commitee/InvestmentCommitee";
import Staff from "./views/staff/Staff";
import InstitutionalPillars from "./views/institutional-pillars/InstitutionalPillars";
import News from "./views/news/News";
import BoardOfDirectors from "./views/board-of-directors/BoardOfDirectors";
import ContactView from "./views/contact-view/ContactView";
import { FooterComponent } from "./components/footer/FooterComponent";
import ManagedFunds from "./views/managed-funds/ManagedFunds";
import ProductsDescriptions from "./views/product-descriptions/ProductsDescriptions";
import Advantages from "./views/advantages/Advantages";
import InfrastructurePrivateEquityMF from "./views/infrastructure-private-equity-managed-funds/InfrastructurePrivateEquityMF";
import OperatingLease from "./views/operating-lease/OperatingLease";
import Article from "./views/news/articles/Article";
import StaffPerson from "./views/staff/StaffPerson";
import Navidad from "./views/navidad/Navidad";
 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/es" element={<Home />}></Route>
        <Route path="/who-we-are" element={<WhoWeAre />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/institutional-pillars" element={<InstitutionalPillars />}></Route>
        {/* <Route path="/staff" element={<Staff />}></Route> */}
        {/* <Route path="/staff/:personId" element ={<StaffPerson/>}></Route> */}
        {/* <Route path="/investment-committee" element={<InvestmentCommitee />}></Route>
        <Route path="/investment-committee/:personId" element={<StaffPerson />}></Route>      */}
        <Route path="/operating-lease" element={<OperatingLease />}></Route>
        {/* <Route path="/board-of-directors" element={<BoardOfDirectors />}></Route> */}
        {/* <Route path="/board-of-directors/:personId" element={<StaffPerson />}></Route> */}
        <Route path="/news" element={<News />}></Route>
        <Route path="/news/:articleId" element={<Article />}></Route>
        <Route path="/managed-funds" element={<ManagedFunds />}></Route>
        <Route path="/product-description" element={<ProductsDescriptions />}></Route>
        <Route path="/advantages" element={<Advantages />}></Route>
        <Route path="/infrastructure-private-equity/managed-funds" element={<InfrastructurePrivateEquityMF />}></Route>
        <Route path="/contact-us" element={<ContactView />}></Route>
        <Route path="/navidad" element={<Navidad></Navidad>}></Route>
      </Routes>
      <FooterComponent/>
    </>
  );
}

export default App;

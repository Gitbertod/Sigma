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
import KarenAmes from "./views/staff/KarenAmes";
import KatherineReyes from "./views/staff/KatherineReyes";
import GuillermoTeramura from "./views/staff/GuillermoTeramura";
import { ArturoPalomares } from "./views/staff/ArturoPalomares";
import CraigCarletonSmith from "./views/investment-commitee/CraigCarletonSmith";
import LuizFelipeMauger from "./views/investment-commitee/LuizFelipeMauger";
import ManuelSalazar from "./views/investment-commitee/ManuelSalazar";
import IrzioPinasco from "./views/board-of-directors/IrzioPinasco";
import GonzaloDeLasCasas from "./views/board-of-directors/GonzaloDeLasCasas";
import MartinPerez from "./views/board-of-directors/MartinPerez";
import AnaMariaBitar from "./views/board-of-directors/AnaMariaBitar";
 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/who-we-are" element={<WhoWeAre />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/institutional-pillars" element={<InstitutionalPillars />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
        <Route path="/staff/karen-ames" element={<KarenAmes />}></Route>
        <Route path="/staff/katherine-reyes" element={<KatherineReyes />}></Route>
        <Route path="/staff/guillermo-teramura" element={<GuillermoTeramura />}></Route>
        <Route path="/staff/arturo-palomares" element={<ArturoPalomares />}></Route>
        <Route path="/investment-commitee" element={<InvestmentCommitee />}></Route>
        <Route path="/investment-commitee/craig-carleton" element={<CraigCarletonSmith />}></Route>
        <Route path="/investment-commitee/luiz-felipe-mauger" element={<LuizFelipeMauger />}></Route>
        <Route path="/investment-commitee/manuel-salazar" element={<ManuelSalazar />}></Route>
        <Route path="/investment-commitee/katherine-reyes" element={<KatherineReyes />}></Route>
        <Route path="/board-of-directors" element={<BoardOfDirectors />}></Route>
        <Route path="/board-of-directors/craig-carleton" element={<CraigCarletonSmith />}></Route>
        <Route path="/board-of-directors/luiz-felipe-mauger" element={<LuizFelipeMauger />}></Route>
        <Route path="/board-of-directors/irzio-pinasco" element={<IrzioPinasco />}></Route>
        <Route path="/board-of-directors/gonzalo-de-las-casas" element={<GonzaloDeLasCasas />}></Route>
        <Route path="/board-of-directors/martin-perez" element={<MartinPerez />}></Route>
        <Route path="/board-of-directors/ana-maria-bitar" element={<AnaMariaBitar />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact-us" element={<ContactView />}></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;

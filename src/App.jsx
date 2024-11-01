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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/who-we-are" element={<WhoWeAre />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/institutional-pillars" element={<InstitutionalPillars />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
        <Route path="/investment-commitee" element={<InvestmentCommitee />}></Route>
        <Route path="/board-of-directors" element={<BoardOfDirectors />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact-us" element={<ContactView />}></Route>
      </Routes>
    </>
  );
}

export default App;

//React router components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Agendar from "./pages/Agendar";

//Components
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

function App() {
   return (
      <>
         <Router>
            <Menu />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/agendar" element={<Agendar />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;

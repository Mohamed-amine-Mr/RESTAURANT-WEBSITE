import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  Contact,
  Footer,
  Hotel,
  Fitness,
} from "./sections/sections";
import { Menu, Reservation, ScrollToTop } from "./components/components";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation bookingLink="https://www.booking.com/hotel/ma/borj-el-arab.fr.html" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/fitness" element={<Fitness />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

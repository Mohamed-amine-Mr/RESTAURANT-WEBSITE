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
          <Route path="/reservation" element={<Reservation bookingLink="https://www.booking.com/index.en-gb.html?aid=2336990;label=en-ma-booking-desktop-q4cK3TQcnarHAo7x8L6CyAS652804038404:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-33467740:lp1029469:li:dec:dm;ws=&gclid=CjwKCAiAudG5BhAREiwAWMlSjNPuKrgNoxErAM7j_lvFiG5D2WqEYYACR5ql6eAZTtOz_dgihHvK8RoCyMgQAvD_BwE" />} />
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

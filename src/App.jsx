import { Route, Routes } from "react-router-dom";
import { Termos } from "./pages/termos";
import { Politica } from "./pages/política";
import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { Pains } from "./pages/pains";
import { AboutUs } from "./pages/aboutUs";
import { Services } from "./pages/servicings";
import { Testimonials } from "./pages/testimonials";
import { Action } from "./pages/action";
import { ContactForm } from "./pages/form";
import { Footer } from "./pages/footer";
import { FloatingButton } from "./buttonFloat";
import { Obrigado } from "./pages/thanks";

function App() {
  return (
    <>
      <FloatingButton />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Pains />
              <AboutUs />
              <Services />
              <Testimonials />
              <Action />
              <ContactForm />
            </>
          }
        />
        <Route path="/termos" element={<Termos />} />
        <Route path="/politica" element={<Politica />} />
          <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

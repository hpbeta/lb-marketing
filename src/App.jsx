import {  Pains } from "./pages/pains";
import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { AboutUs } from "./pages/aboutUs";
import { Services } from "./pages/servicings";
import { Testimonials } from "./pages/testimonials";
import { Action } from "./pages/action";
import { ContactForm } from "./pages/form";
import { Footer } from "./pages/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Pains />
      <AboutUs />
      <Services />
      <Testimonials />
      <Action />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

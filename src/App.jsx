import Navbar from "./component/navbar";
import Header from "./component/header";
import About from "./component/about";
import Experience from "./component/experience";
import Services from "./component/services";
import Portfolio from "./component/portfolio";
import Testimonial from "./component/testimonials";
import Contact from "./component/contact";
import Footer from "./component/footer";
import BackToTop from "./commons/BackToTop";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Services />
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;

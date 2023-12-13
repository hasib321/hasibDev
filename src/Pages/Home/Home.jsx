import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import ExperiAndEducation from "../Experience/ExperiAndEducation";
import Footer from "../Footer/Footer";
import MyServices from "../MyServices/MyServices";
import Projects from "../Projects/Projects";
import Skills from "../Skill/Skills";
import "./Home.scss";
const Home = () => {
  return (
    <div className="font-dmSans ">
      <Nav></Nav>
      <section id="#">
        <Header></Header>
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>

      <section id="services">
        <MyServices></MyServices>
      </section>
      <section id="project">
        <Projects></Projects>
      </section>
      <section id="experience">
        <ExperiAndEducation></ExperiAndEducation>
      </section>
      <section id="contact">
        <ContactUs></ContactUs>
      </section>
      <section id="footer">
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Home;

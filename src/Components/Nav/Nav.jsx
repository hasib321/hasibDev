import "./nav.css";
import { CiHome } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <CiHome></CiHome>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser></FaRegUser>
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaHeadSideVirus></FaHeadSideVirus>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdOutlineHomeRepairService></MdOutlineHomeRepairService>
      </a>
      <a
        href="#project"
        onClick={() => setActiveNav("#project")}
        className={activeNav === "#project" ? "active" : ""}
      >
        <FaProjectDiagram></FaProjectDiagram>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdCastForEducation></MdCastForEducation>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail></MdContactMail>
      </a>
    </nav>
  );
};

export default Nav;

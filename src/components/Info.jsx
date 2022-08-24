import "../App.css";
import ali from "../images/ali.png";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";
import About from "./About";
import Footer from "./Footer";
import Interests from "./Interests";

const Info = () => {
  return (
    <>
      <div className="card">
        <img src={ali} alt="Avatar" className="avatar" />
        <div className="info">
          <h1>Ali O. Ajibade</h1>
          <h2 className="card__title">Frontend Developer</h2>
          <a
            href="https://leewebstechnologies.github.io/leewebs_technologies/"
            target="_blank"
            rel="noreferrer"
          >
            leewebs
          </a>
        </div>
        <div className="btn">
          <button className="btn-email">
            <img src={email} alt="email" className="email" />
            <a
              href="mailto:aliuajibade317@gmail.com"
              className="mail"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </button>
          <button className="btn-linkedin">
            <img src={linkedin} alt="linkedin" className="linkedin" />
            <a
              href="https://www.linkedin.com/in/aliu-ajibade-a43210139/"
              target="_blank"
              rel="noreferrer"
              className="linked"
            >
              Linked In
            </a>
          </button>
        </div>
        <br />
        <About />
        <Interests />
        <Footer />
      </div>
    </>
  );
};

export default Info;

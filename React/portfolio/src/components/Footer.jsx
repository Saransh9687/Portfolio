import React from "react";
import me from "../assets/Saransh.jpeg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Founder" />
        <h2>Saransh Mittal</h2>
        <p>This is my portfolio</p>
      </div>
      <aside>
        <h2>Social media</h2>
        <article>
          <a href="https://instagram.com/_saaranshhh" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Saransh9687" target="blank">
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;

import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import pic1 from "../images/pic1.png";

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const dataa = {
      strings: [
        "Frontend Developer",
        "Frontend Developer",
        "Frontend Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    };

    const typed = new Typed(typingRef.current, dataa);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>SHREY JAIN</h1>
        <h3>
          And I'm a <span ref={typingRef} className="mutiple-text" />
        </h3>
        <p>
          Hello,I am Shrey. This name means marvelous. I am a kind of an
          extrovert person who is full of confidence. I'm always being energetic
          and action oriented.{" "}
        </p>
        <div className="social-media">
          <a href="https://www.facebook.com/shrey.jain.311056">
            <i className="bx bxl-facebook" />
          </a>
          <a href="https://twitter.com/shrey3219">
            <i className="bx bxl-twitter" />
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=ha7mjv9a97ba&utm_content=muhsby7">
            <i className="bx bxl-instagram-alt" />
          </a>
          <a href="https://www.linkedin.com/in/shrey-jain-304147283/">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1vjf8Vu1pY2IcmRdWDA50f3nNk1qwdW07/view?usp=sharing"
          className="btn"
        >
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src={pic1} alt="true" loading="lazy" />
      </div>
    </section>
  );
};

export default Home;

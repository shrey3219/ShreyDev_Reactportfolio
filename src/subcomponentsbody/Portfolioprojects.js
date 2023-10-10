import portfolio1 from "../images/portfolio1.jpg";
import portfolio2 from "../images/portfolio2.jpg";
import portfolio3 from "../images/portfolio3.jpg";
import portfolio4 from "../images/portfolio4.jpg";
import portfolio5 from "../images/portfolio5.jpg";
import portfolio6 from "../images/portfolio6.jpg";

const PortfolioProjects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        LATEST <span>PROJECTS</span>
      </h2>
      <div className="portcontainer">
        <div className="portbox">
          <img src={portfolio1} alt="true" />
          <div className="portlayer">
            <h3>Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              itaque!
            </p>
            <a href="https://github.com/shrey3219">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio2} alt="true" />
          <div className="portlayer">
            <h3>Bus Reserve</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              itaque!
            </p>
            <a href="https://github.com/shrey3219">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio3} alt="true" />
          <div className="portlayer">
            <h3>Cafeteria</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              itaque!
            </p>
            <a href="https://github.com/shrey3219">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio4} alt="true" />
          <div className="portlayer">
            <h3>Weather App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              itaque!
            </p>
            <a href="https://github.com/shrey3219">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio5} alt="true" />
          <div className="portlayer">
            <h3>Environ App</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              itaque!
            </p>
            <a href="https://github.com/shrey3219">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
        <div className="portbox">
          <img src={portfolio6} alt="true" />
          <div className="portlayer">
            <h3>Turtiles</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab,
              itaque!
            </p>
            <a href="https://github.com/shrey3219">
              <i className="bx bx-link-external" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;
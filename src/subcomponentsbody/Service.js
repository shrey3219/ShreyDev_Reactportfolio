const Service = () =>{
  return(<section className="service" id="service">
  <h2 className="heading">
    EDU<span>CATION</span>
  </h2>
  <div className="servcontainer">
    <div className="code">
      <a href="#">
        <i className="bx bx-code-alt" />
      </a>
      <h3>Web Development</h3>
      <p>
        Web development, also known as website development, refers to the
        tasks associated with creating, building, and maintaining websites
        and web applications that run online on a browser
      </p>
      <a
        href="https://www.geeksforgeeks.org/web-development/"
        className="btn"
      >
        Read More
      </a>
    </div>
    <div className="code">
      <a href="#">
        <i className="bx bxs-paint" />
      </a>
      <h3>Graphic Design</h3>
      <p>
        Graphic design is a craft where professionals create visual
        content to communicate messages. By applying visual hierarchy and
        page layout techniques, designers use typography and pictures to
        meet users'
      </p>
      <a
        href="https://www.interaction-design.org/literature/topics/graphic-design#"
        className="btn"
      >
        Read More
      </a>
    </div>
    <div className="code">
      <a href="#">
        <i className="bx bx-bar-chart-alt" />
      </a>
      <h3>Digital Marketing</h3>
      <p>
        Digital marketing, also called online marketing, is the promotion
        of brands to connect with potential customers using the internet
        and other forms of digital communication
        <br /> This includes not only email, social media, and web-based
        advertising, but also text and multimedia messages as a marketing
        channel.
      </p>
      <a
        href="https://www.coursera.org/articles/digital-marketing"
        className="btn"
      >
        Read More
      </a>
    </div>
  </div>
</section>);
};

export default Service;
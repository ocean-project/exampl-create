function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to our store! We are passionate about delivering high-quality tech products that improve everyday life.
      </p>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our goal is to make cutting-edge technology accessible, affordable, and reliable. We believe everyone deserves smart, useful tools in their lives.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2020 by a group of tech enthusiasts, we started as a small online shop and quickly grew into a trusted name in the electronics market.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>🎧 Premium quality gadgets</li>
          <li>📦 Fast, secure delivery</li>
          <li>🔧 Easy returns & warranty support</li>
          <li>💬 Helpful customer service</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>🛡️ Trust & Transparency</li>
          <li>🌱 Sustainability</li>
          <li>💡 Innovation</li>
          <li>👥 Community First</li>
        </ul>
      </section>

      <section className="about-section team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Doe" />
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Jane Smith" />
            <h4>Jane Smith</h4>
            <p>Marketing Lead</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Mike Lee" />
            <h4>Mike Lee</h4>
            <p>Product Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

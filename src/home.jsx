

  import { Appmy,Appmydd,Appmylist,Appform } from './test.jsx'
  function Home() {
    return (
<div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My React Website</h1>
        <p>Simple, fast, and component-based web development.</p>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Why Choose Us?</h2>
        <div className="card-container">
          <div className="card">
            <h3>Fast Development</h3>
            <p>Build UIs quickly using reusable components.</p>
          </div>
          <div className="card">
            <h3>Easy to Maintain</h3>
            <p>Organize code in modules for easy updates.</p>
          </div>
          <div className="card">
            <h3>React Power</h3>
            <p>Leverage the powerful React ecosystem and tools.</p>
          </div>
        </div>
      </section>
    </div>
    );
  }

  export default Home;
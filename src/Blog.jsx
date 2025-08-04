function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Welcome to Our Blog</h1>
        <p className="intro">Insights, tips, stories, and news from our team.</p>
      </header>

      <section className="featured-post">
        <h2>🌟 Featured Article</h2>
        <div className="post-card large">
          <h3>How to Stay Focused While Working Remotely</h3>
          <p>Discover proven strategies to boost your productivity while working from home...</p>
          <button>Read More</button>
        </div>
      </section>

      <section className="latest-posts">
        <h2>📰 Latest Posts</h2>
        <div className="post-grid">
          <div className="post-card">
            <h3>10 Tools Every Developer Should Know</h3>
            <p>Speed up your dev workflow with these essential tools...</p>
            <button>Read More</button>
          </div>
          <div className="post-card">
            <h3>Understanding React Hooks</h3>
            <p>A beginner-friendly guide to mastering hooks in React...</p>
            <button>Read More</button>
          </div>
          <div className="post-card">
            <h3>Website SEO in 2025</h3>
            <p>Everything you need to know about ranking in modern search engines...</p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>📂 Browse by Category</h2>
        <ul className="category-list">
          <li>🚀 Technology</li>
          <li>💼 Business</li>
          <li>🎨 Design</li>
          <li>🧠 Personal Growth</li>
          <li>📈 Marketing</li>
        </ul>
      </section>

      <section className="subscribe-section">
        <h2>📬 Subscribe to Our Newsletter</h2>
        <p>Get the latest updates right in your inbox. No spam, ever.</p>
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </section>
    </div>
  );
}

export default Blog;

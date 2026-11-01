
function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <img
        src={post.image}
        alt={post.title}
        className="blog-image"
      />

      <div className="blog-content">
        <span className="category">
          {post.category}
        </span>

        <h2>{post.title}</h2>

        <p>{post.description}</p>

        <div className="blog-meta">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

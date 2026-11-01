
import { useState } from 'react'

import posts from './data/posts.json'

import Header from './components/Header.jsx'
import BlogCard from './components/BlogCard.jsx'
import SearchBar from './components/SearchBar.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'

import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Search and Filter Logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <Header />

      <main className="container">
        <h1>Explore Our Blog</h1>

        <p className="subtitle">
          Discover articles about web development and technology.
        </p>

        <div className="controls">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <p className="no-results">
              No blog posts found!
            </p>
          )}
        </div>
      </main>
    </div>
  )
}

export default App

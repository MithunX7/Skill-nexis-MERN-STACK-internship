
function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="filter-container">
      <label>Filter by Category: </label>

      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="React">React</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Web Design">Web Design</option>
      </select>
    </div>
  )
}

export default CategoryFilter

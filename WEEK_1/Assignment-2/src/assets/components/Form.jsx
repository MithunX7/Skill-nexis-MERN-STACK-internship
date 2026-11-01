
function Form() {
  function handleSubmit(event) {
    event.preventDefault()
    alert("Form Submitted Successfully!")
  }

  return (
    <div className="form-container">
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <button type="submit" className="custom-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form

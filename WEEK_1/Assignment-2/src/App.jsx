
import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Card from './assets/components/Card.jsx'
import Button from './assets/components/Button.jsx'
import Form from './assets/components/Form.jsx'
import Counter from './assets/components/Counter.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <h2>Welcome to My React Website!</h2>
      <p>This is my first React component.</p>

      {/* Cards with Props */}
      <Card
        title="Web Development"
        description="Learning HTML, CSS and JavaScript."
      />

      <Card
        title="React Development"
        description="Learning React components and Props."
      />

      {/* Buttons with Props */}
      <Button text="Click Me" />
      <Button text="Explore More" />

      {/* Counter Component */}
      <Counter />

      {/* Contact Form */}
      <Form />

      <Footer />
    </>
  )
}

export default App

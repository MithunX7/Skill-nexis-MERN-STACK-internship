
function Button(props) {
  function handleClick() {
    alert(props.text + " Button Clicked!")
  }

  return (
    <button onClick={handleClick} className="custom-button">
      {props.text}
    </button>
  )
}

export default Button

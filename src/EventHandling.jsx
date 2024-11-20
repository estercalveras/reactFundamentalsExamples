import './App.css'

function App() {

  function handleClick(event) {
    console.log(event);
    console.log("You clicked!")
  }

  function handleInput(e) {
    console.log(e.target.value)
  }


  return (
    <>
      <button onClick={handleClick}>Handler function!</button>
      <button onClick={() => console.log("Hello there!")}>Anonymous function!</button>
      <button onMouseOver={() => console.log("I'm hovered over")}>Hover over me!</button>
      <input type="text" onKeyDown={handleInput} />
    </>
  )
}

export default App

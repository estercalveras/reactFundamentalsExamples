import './App.css'
import facebookLogo from "./assets/facebookLogo.svg"


function Logo ({height}) {
  return(
    <img src={facebookLogo} style={{height: height}} alt="" />
  )
}

function Btn ({text, color, round, href}) {
  return (
    <a href={href}>
      <button style={{backgroundColor: color, borderRadius: round}}>{text}</button>
    </a>
    
  )
}

function Header ({person}) {
  console.log(person.name?.person)
  return(
    <div><Logo height="50px" color="red"/> Landing page  {person.name && "for " + person.name}</div>
  )
}


function Footer () {
  const value = "10px"
  return(
    <footer><Logo height={value}/> Footer content</footer>
  )
}

function App() {
  const urlCSS = "https://www.w3schools.com/tags/ref_colornames.asp"
  const obj = {
    surname: "Doe"
  }
  return (
  <>
  <Header person={obj}/>
  <div> Some content is going to go here</div>
  <Btn text="Submit" color="#2596be" round="50px" href={urlCSS}/>
  <Btn text="Cancel" color="FireBrick"/>
  <Btn text="Go back" round="50px"/>
  <Footer/>
  </>)
}

export default App

import './App.css'

const UserInfo = ({ user }) => {
  const { name, surname, age, country } = user;
  return (
    <div className="bg-yellow-50 rounded-xl text-neutral-800 p-6 flex flex-col items-start justify-end">
      {name && surname && age && country ?
        <>
          <p>{name}</p>
          <p>{surname}</p>
          <p>{age}</p>
          <p>{country}</p>
        </> : <p>User info incomplete</p>}
    </div>
  )
}

const NoResults = () => {
  return (
    <p>Uh oh, something went wrong...</p>
  )
}


function App() {

  const person = {

    surname: "Doe",
    age: 50,
    country: "Portugal"
  }




  return (
    <>
      {person && <UserInfo user={person} />}
      {person ? <UserInfo user={person} /> : <NoResults />}
    </>
  )
}

export default App

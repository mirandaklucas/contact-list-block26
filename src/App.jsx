import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './Components/ContactList.jsx'


function App() {
  // const [contactArray, setContactArray] = useState(dummyContacts)

  // useEffect(() => {

  //   async function fetchContacts() {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //       const data = response.json()

  //       setContactArray(data)

  //     } catch(error) {
  //       console.error(error)
  //     }
  //   }
  //   fetchContacts()
  // })

  return (
    <>
      <ContactList />
    </>
  )
}

export default App

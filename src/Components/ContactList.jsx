import React from 'react'
import { useEffect } from 'react'

// const [contactArray, setContactArray] = useState(dummyContacts)

export default function ContactList() {

    const [contactArray, setContactArray] = useState([])

    useEffect(() => {

        async function fetchContacts() {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = response.json()
    
            setContactArray(data)
    
          } catch(error) {
            console.error(error)
          }
        }
        fetchContacts()
    })
        


    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {
                    // maping over data here
                    {contactArray.map((contact) => {
                        return (
                          <div>
                            <li key={contact.id}>{contact.name}</li>
                            <li key={contact.name}>{contact.username}</li>
                          </div>)
                      })}
                }
            </tbody>
            </thead>
        </table>
    )
}

// export default ContactList

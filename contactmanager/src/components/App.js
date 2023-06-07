import React, {useState, useEffect} from "react";
import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import Contactlist from './ContactList';

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContacthandler = (contact) => {
      setContacts([...contacts, { id: uuid(), ...contacts }]);
    };

    const removeContacthandler = (id) =>{
      const newContactList = contacts.filter((contact) =>{
        return contact.id !== id;
      })

      setContacts(newContactList);
    };

  
    useEffect(() => {
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retrieveContacts) setContacts(retrieveContacts);
    }, []);


    useEffect(() =>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);


  return (
    <div className="ui container">
      <Header />
      <AddContact addContacthandler = {addContacthandler} />
      <Contactlist  contacts={contacts} getContactId={removeContacthandler}/>
    </div>
  );
}

export default App;

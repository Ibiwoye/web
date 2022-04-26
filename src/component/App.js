import './App.css';
import React, {useState}from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";



function App() {
const[contact,setContacts] =useState([]);

  return (
    <div className='ui container'>
      <Header />
       <AddContact />
       <ContactList contact = {contact} />

    </div>
  );
}


export default App;
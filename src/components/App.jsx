import React from "react";
import AddContact from './AddContact';
import ContactsList from "./ContactsList";
import { useState } from 'react';

let contactList = [];
if (localStorage.getItem("contactsInStorage") !== null) {
    contactList = JSON.parse(localStorage.getItem("contactsInStorage"));
}

export default function App() {
    
    const [contacts, setContact] = useState(contactList);
    
    function addContact(contact) {

        const newContactList = [...contactList];

        newContactList.push(contact);
        setContact(newContactList);

        contactList.push(contact);
        // Local storage takes only strings
        localStorage.setItem("contactsInStorage", JSON.stringify(contactList));
    }

    function removeContact(i) {
        
        const newContactList = [...contactList];

        newContactList.splice(i, 1);
        setContact(newContactList);

        contactList.splice(i, 1);
        // Local storage takes only strings
        localStorage.setItem("contactsInStorage", JSON.stringify(contactList));
    }

    return <div className="contacts">
        <h1>My Contacts</h1>
        <ContactsList items={contacts} removeContact={removeContact}/>
        <AddContact addContact={addContact}/>        
    </div>
}
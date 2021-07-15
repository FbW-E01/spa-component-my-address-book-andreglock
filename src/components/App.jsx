import React from "react";
import AddContact from './AddContact';
import ContactsList from "./ContactsList";
import { useState } from 'react';

const contactList = [];

export default function App() {
    
    const [contacts, setContact] = useState(contactList);
    
    function addContact(contact) {

        const newContactList = [...contactList];

        newContactList.push(contact);
        setContact(newContactList);

        contactList.push(contact);
    }

    function removeContact(i) {
        
        const newContactList = [...contactList];

        newContactList.splice(i, 1);
        setContact(newContactList);

        contactList.splice(i, 1);
    }


    return <div className="contacts">
        <h1>My Contacts</h1>
        <ContactsList items={contacts} removeContact={removeContact}/>
        <AddContact addContact={addContact}/>        
    </div>
}
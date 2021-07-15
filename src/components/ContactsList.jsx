import React from "react";
// import removeContact from "./App"

export default function ContactsList(props) {

    return (
        <div className="contacts">
            <ul>
                {props.items.map((contact, i) =>
                    <li key={i}>
                        {contact.name}
                        {contact.phoneNumber}
                        <button onClick={() => props.removeContact(i)}>
                            X
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}
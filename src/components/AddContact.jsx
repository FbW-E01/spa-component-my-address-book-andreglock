import React from "react";

export default class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
        };
    }

    addContact(event) { // Arrow function doesn't require bind
        event.preventDefault();
        this.props.addContact({
            name: this.state.name,
            phoneNumber: this.state.phoneNumber,
        });

        // This doesn't work: How to clear the values onSubmit?
        const inputs = document.querySelectorAll("input");
        inputs[0].value = '';
        inputs[1].value = '';
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }

    render() {
        return <form onSubmit={this.addContact.bind(this)}> {/* Binds this to the function being called */}
            <legend>New Contact</legend>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    id="name" name="name" type="text" 
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="number">Phone number:</label>
                <input 
                    id="number" name="number" type="tel" 
                    value={this.state.phoneNumber} 
                    onChange={this.handlePhoneChange}
                />
            </div>
            <button type="submit">+</button>
        </form>;
    }
}
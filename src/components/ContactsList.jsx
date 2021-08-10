import React from "react";
// import removeContact from "./App"

export default class ContactsList extends React.Component {

    constructor(props) {
        super();
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ loading: false })
            console.log('done');
        }, 3000);
    }

    render() {
        return (<div className="contacts">
            {this.state.loading ?
            <div>Loading...</div> : 
            <ul>
                {this.props.items.map((contact, i) =>
                    <li key={i}>
                        {contact.name}
                        {contact.phoneNumber}
                        <button onClick={() => this.props.removeContact(i)}>
                            X
                        </button>
                    </li>
                )}
            </ul>}
        </div>
    )}
}
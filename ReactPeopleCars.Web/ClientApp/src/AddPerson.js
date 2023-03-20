import React from 'react';
import axios from 'axios';

class AddPerson extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    onSubmitClick = async () => {
        await axios.post('/api/peoplecars/addperson', this.state.person);
        this.props.history.push('/');
    }

    render() {
        // const { firstName, lastName, age } = this.state.person;
        return (
            <div className="container">
    <div className="row col-md-6 offset-md-3 card card-body bg-light">
    <h2>Add a New Person</h2>
    <input type="text" className="form-control" onChange={this.onTextChange} name="firstName" placeholder="First Name" />
    <br />
    <input type="text" className="form-control" onChange={this.onTextChange} name="lastName" placeholder="Last Name" />
    <br />
    <input type="text" className="form-control" onChange={this.onTextChange} name="age" placeholder="Age" />
    <br />
    <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>
    </div>
</div>
        )
    }
}

export default AddPerson;
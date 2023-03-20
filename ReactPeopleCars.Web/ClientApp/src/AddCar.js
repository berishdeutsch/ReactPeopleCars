import React from 'react';
import axios from 'axios';

class AddCar extends React.Component {
   
  state = {
    person: {
        id:'',
        firstName: '',
        lastName: ''
    },
    car: {
        make: '',
        model: '',
        year: '',
        personId: ''
    }
  }
        componentDidMount = async () => {
            const { id } = this.props.match.params;
            const { data } = await axios.get(`/api/peoplecars/getpersonbyid?id=${id}`);
            this.setState({
                person: data,
                car: { personId: id }
            });
        }

        onTextChange = e => {
            const copy = { ...this.state.car };
            copy[e.target.name] = e.target.value;
            this.setState({ car: copy });
        }

        onSubmitClick = async () => {
            await axios.post('/api/peoplecars/addcar', this.state.car);
            this.props.history.push('/');
        }

        render() {
            const {firstName, lastName} = this.state.person;
        return (
            <div className="container">
                <div className="row col-md-6 offset-md-3 card card-body bg-light">
                <h2>Add a car for {firstName} {lastName}</h2>
                <input type="text" className="form-control" onChange={this.onTextChange} name="make" placeholder="Make" />
                <br />
                <input type="text" className="form-control" onChange={this.onTextChange} name="model" placeholder="Model" />
                <br />
                <input type="text" className="form-control" onChange={this.onTextChange} name="year" placeholder="Year" />
                <br />
                <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>
                </div>
            </div>
        )
    }
}


export default AddCar;
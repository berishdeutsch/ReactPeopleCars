import React from 'react';
import axios from 'axios';
import {Link} from  'react-router-dom';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: []
    }

    componentDidMount = async () => {
        await this.refreshPeople();
    }
    
    refreshPeople = async () => {
        const { data } = await axios.get('/api/peoplecars/getall');
        this.setState({ people: data });
    }

    render() {
        const { people } = this.state;
        return (
            <>
           <Link to={`/addperson`}> <button className="btn btn-success btn-lg btn-block">Add Person</button></Link>
           <br />
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                    <th>First Name:</th>
                    <th>Last Name:</th>
                    <th>Age:</th>
                    <th>Car Count:</th>
                    <th>Add Car:</th>
                    <th>Delete Cars:</th>
                    </tr>
                </thead>
                <tbody>
                    { people.map(p => <PersonRow
                    person={p}
                    key={p.id}
                    />)}
                </tbody>
                </table>
            </>
        )
    }
}
export default PeopleTable;
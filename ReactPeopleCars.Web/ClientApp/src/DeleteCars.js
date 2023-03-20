import React from 'react';
import axios from 'axios';
import CarRow from './CarRow.js';
import {Link} from  'react-router-dom';

class DeleteCars extends React.Component {
    state = {
        cars: []
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/peoplecars/getcarsbypersonid?id=${id}`);
        this.setState({ cars: data });
    }

    onCancelClick= () => {
        this.props.history.push('/');
    }

    onDeleteClick = async () => {
        const { id } = this.props.match.params;
         await axios.post('/api/peoplecars/deletecars', { id });
         this.props.history.push('/');
     }

    render() {
        const { cars } = this.state;
        return (
            <div className="container">
                <div className="row col-md-10"></div>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(c => <CarRow
                            car={c}
                            key={c.id}
                        />
                        )}
                    </tbody>
                </table>
                <h3>Are you sure you want to delete all of these cars?</h3>
                <div className="row">
                <div className="col-md-6">
                        <button className="btn btn-primary btn-lg btn-block" onClick={this.onCancelClick}>No</button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger btn-lg btn-block" onClick={this.onDeleteClick}>Yes</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default DeleteCars;
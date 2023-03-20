import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout.js';
import PeopleTable from'./PeopleTable.js';
import AddPerson from './AddPerson.js';
import AddCar from './AddCar.js';
import DeleteCars from './DeleteCars.js';



const App = () => {
    return (
        <Layout>
              <Route exact path='/' component={PeopleTable} />
              <Route exact path='/addperson' component={AddPerson} />
              <Route exact path='/addcar/:id' component={AddCar} />
              <Route exact path='/deletecars/:id' component={DeleteCars} />
        </Layout>
    )
}

export default App;
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import FamilyCheckbox from '../components/FamilyCheckbox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [familyCheckbox, setFamilyCheckbox] = useState(false);

    useEffect(() => {
        
        //fetch('https://jsonplaceholder.typicode.com/users')
        
        fetch('http://localhost:8000/')
            .then(response => {return response.json()})
                .catch(error => {return console.log(error)})
            .then(users => {setRobots(users)})
                .catch(error => {return console.log(error)});

            console.log("rerender");
    
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value); 
    }

    const onCheckboxClick = () => {
        setFamilyCheckbox(toggle(familyCheckbox));
    }

    const toggle = (value) => {
        return !value;
    }

    const filteredRobots = robots.filter(robot => {
        if (familyCheckbox) {
            return robot.family && robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        } else {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        };
    });

    return !robots.length ?
            <h1 className="fl w-100 tc ba pa3">Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <menu className="flex justify-center">
                    <SearchBox searchChange={onSearchChange} />
                    <FamilyCheckbox checkboxChange={onCheckboxClick} />
                </menu>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>                
            </div>
        );

}

export default App;
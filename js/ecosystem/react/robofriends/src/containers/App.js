import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json()})
            .then(users => {this.setState({ robots: users })});
            this.setState({robots: []});
    }

    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchField: event.target.value}); 
        //this.setState({robots: filteredRobots});
    }

    render() {
        const { robots, searchField } = this.state; //destructuring state object into 2 variables
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })

        return !robots.length ?
             <h1 className="fl w-100 tc ba pa3">Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>                
                </div>
            );
    }
}

export default App;
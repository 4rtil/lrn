import React, { useEffect } from 'react';
import { connect } from "react-redux";

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import FamilyCheckbox from '../components/FamilyCheckbox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

import { handleRobots, filterRobots } from "../actions";

const mapStateToProps = (state) => {
    // console.info("mapStateToProps state:", state)
    return {
        searchField: state.handleRobots.searchField,
        robots: state.handleRobots.robots,
        filteredRobots : state.handleRobots.filteredRobots,
        isPending: state.handleRobots.isPending,
        error: state.handleRobots.error,
        familyCheckbox: state.toggleFamilyCheckbox.familyCheckbox
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestRobots: () => dispatch(handleRobots()),
        onSearchChange: (event) => {
            // console.info("App level log", props);
            dispatch(filterRobots(event.target.value))
        }
    }
}

const App = (props) => {

    // console.info("App level log", props);

    const {
        filteredRobots, isPending, familyCheckbox,
        onRequestRobots, onSearchChange
    }  = props;

    useEffect(() => {
        onRequestRobots();
        console.info("useEffect hook triggered rerender");
    }, [onRequestRobots]);

    return isPending ?
        <h1 className="fl w-100 tc ba pa3">Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">Robofriends</h1>
                <menu className="flex justify-center">
                    <SearchBox searchChange={onSearchChange} active={familyCheckbox} />
                    <FamilyCheckbox />
                </menu>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
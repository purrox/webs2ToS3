import React, {Component} from 'react';
import logo from './logo.svg';
import Tree from 'react-d3-tree';
import axios from 'axios';
import 'react-tree-graph/dist/style.css'
import './App.css';
import MenuExamplePointing from './menu';
import LandingComponent from './LandingComponent'
import {Segment} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import dashboard from './DashboardComponent'

let data = [{
    "id": 1,
    "name": "11",
    "weight": 11,
    "createDate": 1534744339000,
    "children": [{
        "id": 13,
        "name": "4",
        "weight": 4,
        "createDate": 1534744339000,
        "children": [{
            "id": 14,
            "name": "8",
            "weight": 8,
            "createDate": 1534744339000,
            "children": [{
                "id": 15,
                "name": "10",
                "weight": 10,
                "createDate": 1534744339000,
                "children": [],
                "inserted": false
            }],
            "inserted": false
        }],
        "inserted": false
    }, {
        "id": 16,
        "name": "19",
        "weight": 19,
        "createDate": 1534744339000,
        "children": [{
            "id": 17,
            "name": "17",
            "weight": 17,
            "createDate": 1534744343000,
            "children": [],
            "inserted": false
        }, {
            "id": 18,
            "name": "43",
            "weight": 43,
            "createDate": 1534744343000,
            "children": [{
                "id": 19,
                "name": "31",
                "weight": 31,
                "createDate": 1534744343000,
                "children": [],
                "inserted": false
            }, {"id": 20, "name": "49", "weight": 49, "createDate": 1534744343000, "children": [], "inserted": false}],
            "inserted": false
        }],
        "inserted": false
    }],
    "inserted": false
}];
class App extends Component {
    state = {
        data: []
    }

    render() {
        return (
            <Router >
                <div className="App">
                    <div>
                        <Route exact path="/" component={LandingComponent}/>
                        <Route exact path="/Dashboard" component={dashboard}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;

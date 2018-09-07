/**
 * Created by csalas on 8/28/18.
 */
import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import TransferComponent from './TransferComponent'
import PaymentComponent from './PaymentComponent'
import CheckComponent from './CheckComponent'
import MenuExamplePointing from './menu';
import {withRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';

class dashboard extends Component {

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div>
                        <MenuExamplePointing/>
                    </div>
                    <div className="container-div">
                    </div>
                    <div>

                            <Route path="/check" component={CheckComponent}/>
                            <Route path="/transfers" component={TransferComponent}/>
                            <Route path="/payments" component={PaymentComponent}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default withRouter(dashboard);
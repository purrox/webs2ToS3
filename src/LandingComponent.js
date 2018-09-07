/**
 * Created by csalas on 8/27/18.
 */
import React, {Component} from 'react';
import LandingMenuComponent from './LandingMenuComponent';
import {Button} from 'semantic-ui-react'

export default class LandingComponent extends Component {

    state = {
        active: 'relational',
        check: {
            active: false,
            structure: 'tree'
        },
        transfers: {
            active: false,
            structure: 'tree'
        },
        payments: {
            active: false,
            structure: 'tree'
        }
    };

    handleActiveButton(name) {
        this.setState({active: name});
    }

    setTransactionData = () =>{
        this.props.history.push('/Dashboard');
    }

    handleActiveButtonForStructure = (transaction, struct) => {
        let customState = this.state;
        if (transaction === 'check') {
            customState.check.structure = struct;
        }
        else if (transaction === 'transfers') {
            customState.transfers.structure = struct;
        } else {
            customState.payments.structure = struct;
        }
        this.setState({customState});
    }

    render() {
        return (
            <div className="land-component">
                <img className="title-img" src='http://empleos.506.cr/jsjobsdata/data/employer/comp_309/logo/logo.jpg'
                     styles={{"width": "100px"}}/>
                <h2 className="title-la-comp">Transaction Center</h2>

                <h3 className="title-la-comp">Choose the Database type to store the transactions</h3>
                <div className="data-base-picker">
                    <div className='ui two buttons'>
                        <Button className={this.state.active === 'relational' ? 'active' : ''}
                                basic onClick={() => this.handleActiveButton('relational')}
                                name='relational'>
                            Relational Database
                        </Button>
                        <Button basic className={this.state.active === 'no-relational' ? 'active' : ''}
                                onClick={() => this.handleActiveButton('no-relational')}
                                name='no-relational'>
                            No Relational Database
                        </Button>
                    </div>
                </div>
                <h3 className="title-la-comp">Choose the structure for each one of the transactions </h3>
                <LandingMenuComponent check={this.state.check} transfers={this.state.transfers}
                                      payments={this.state.payments}
                                      handleClick={this.handleActiveButtonForStructure}
                />
                <Button className='start-button' size='small' onClick={this.setTransactionData}>Continue</Button>
            </div>
        );
    }
}
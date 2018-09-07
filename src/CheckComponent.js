/**
 * Created by csalas on 8/28/18.
 */
import _ from 'lodash'
import React, {Component} from 'react';
import './App.css';
import {Search, Grid, Input, Accordion, Form, Menu, Button} from 'semantic-ui-react'
import Tree from 'react-d3-tree';

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


const source = []

const ColorForm = (
    <Form>
        <Form.Group grouped>
            <Form.Input fluid label='Name' placeholder='Name'/>
            <Form.Input fluid label='Weight' placeholder='Weight'/>
            <Form.Field control={Button}>Insert</Form.Field>
        </Form.Group>
    </Form>
)

export default class CheckComponent extends Component {
    state = {activeIndex: 0}

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({isLoading: false, results: [], value: ''})

    handleResultSelect = (e, {result}) => this.setState({value: result.title})

    handleSearchChange = (e, {value}) => {
        this.setState({isLoading: true, value})

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {isLoading, value, results} = this.state;
        const {activeIndex} = this.state

        return (
            <div className="App">
                <Grid columns='three' divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Accordion as={Menu} vertical>
                                <Menu.Item>
                                    <Accordion.Title
                                        active={activeIndex === 0}
                                        content='Insert Transaction'
                                        index={1}
                                        onClick={this.handleClick}
                                    />
                                    <Accordion.Content active={activeIndex === 1} content={ColorForm}/>
                                </Menu.Item>
                            </Accordion>
                        </Grid.Column>
                        <Grid.Column>
                            <Input action='Delete' placeholder=''/>
                        </Grid.Column>
                        <Grid.Column>
                            <Search
                                loading={isLoading}
                                onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, {leading: true})}
                                results={results}
                                value={value}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div className="structure-content">
                    <Tree data={data} orientation={'vertical'} pathFunc = {'elbow'}/>
                </div>
            </div>
        );
    }
}
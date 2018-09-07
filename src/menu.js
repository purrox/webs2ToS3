import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';

class MenuExamplePointing extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name})
        this.props.history.push(name);
    }

    render() {
        const {activeItem} = this.state
        return (
            <div>
                <Menu stackable>
                    <Menu.Item>
                        <img src='http://www.camtic.org/wp-content/uploads/2017/05/Logo-Perfil-Avantica.png'
                             styles={{"width": "100px"}}/>
                    </Menu.Item>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                    <Menu.Item
                        name='check'
                        active={activeItem === 'check'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='transfers'
                        active={activeItem === 'transfers'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='payments'
                        active={activeItem === 'payments'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        )
    }
}
export default withRouter(MenuExamplePointing);
import React, { Component } from 'react'
import './header.css'

class Header extends Component {  
    
    constructor(props){
        super(props);
        this.state = {
            moduleName: this.props.module
        }
    }
    
    render() {
        const { moduleName } = this.state;
        const mountTime = new Date();
        return <div id='header'>
            <div>Header of module: {moduleName}</div>
                <div>
                    <span>Rendered at: </span>
                    <span>{mountTime.toTimeString()} </span>
                </div>
            </div>
   }
}

Header.defaultProps = {
    module: 'Noname'
}

Header.propTypes = {
    module: React.PropTypes.string
};

export default Header
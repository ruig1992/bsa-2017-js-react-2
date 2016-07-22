import React, { Component } from 'react';

class TimePoints extends Component {  
    constructor(props){
        super(props);
        this.state = {
            timePoints: this.props.timePoints
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        this.setState({
            timePoints: nextProps.timePoints
        });
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        if (nextProps.timePoints.length !== this.props.timePoints.length) {
            return true;
        } else {
            return false;
        }
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }

    render() {
        const { timePoints } = this.state;
        return (
            (timePoints.length > 0) ? <div>
                { timePoints.map( (elem, index, array) => {
                    return <div key={index}>{'Lap '+ index + ': ' + elem + ' sec'}</div>
                })}
            </div> : null
        )
    }
}

export default TimePoints
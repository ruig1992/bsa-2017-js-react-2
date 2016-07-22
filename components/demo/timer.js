import React, { Component } from 'react'
import TimePoints from './timePoints'
import './timer.css'

class Timer extends Component {  
    constructor(){
        super();
        this.state = {
            startTime: 0,
            timePoints: [],
            time: 0,
            interval: undefined,
            inProgress: false
        }
        this.handleStartTimer = this.handleStartTimer.bind(this);
        this.handleStopTimer = this.handleStopTimer.bind(this);
        this.handleResetTimer = this.handleResetTimer.bind(this);
        this.handleInterval = this.handleInterval.bind(this);
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({
            time: this.state.time + 1
        });
    }

    handleStartTimer(event) {
        if (!this.state.inProgress) {
            const interval = setInterval(this.tick, 1000);
            this.setState({
                interval,
                startTime: Date.now(),
                inProgress: true
            })
        };
    }

    handleStopTimer(event) {
        const { interval } = this.state;
        if (interval) {
            clearInterval(interval);
            this.setState({
                interval: undefined,
                inProgress: false
            })
        }
    }

    handleInterval(event) {
        const { timePoints, time } = this.state;
        this.setState({
            timePoints: [...timePoints, time]
        })
    }

    handleResetTimer(event) {
        this.handleStopTimer();
        this.setState({
            timePoints: [],
            time: 0
        })
    }

    render() {
        const { time, timePoints, inProgress} = this.state;
        return (
            <div className='timer'>
                <div className='timer-value'>{time} sec</div>
                <div className='button start' onClick={this.handleStartTimer}>{ (!inProgress && time !== 0) ? 'Resume' : 'Start'}</div>
                <div className='button stop' onClick={this.handleStopTimer}>Stop</div>
                <div className='button interval' onClick={this.handleInterval}>Interval</div>
                <div className='button reset' onClick={this.handleResetTimer}>Reset</div>
                <TimePoints timePoints={timePoints} />
            </div>
        )
    }
}

export default Timer
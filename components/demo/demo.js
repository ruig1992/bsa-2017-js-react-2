import React, { Component } from 'react';
import Header from '../common/header.js';
import Timer from './Timer.js';
import PageContent from '../../containers/pageContent/pageContent'

class Demo extends Component {  
    render() {
        return (
            <div>
                <Header module={'Demo'}/>
                <PageContent>
                    <Timer />
                </PageContent>
            </div>
        )
    }
}

export default Demo
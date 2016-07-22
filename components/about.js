import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './common/header'
import PageContent from '../containers/pageContent/pageContent'

class Demo extends Component {
    render() {
        return (
            <div>
                <Header module={'About'} />
                <PageContent>
                    <div>
                        <span>This is a demo app. Navigate to </span>
                        <Link to={`/demo`}>/demo</Link>
                        <span>.</span>
                    </div>
                    <div>
                        <span>Try default props: </span>
                        <Link to={`/noname`}>/noname</Link>
                        <span>.</span>
                    </div>
                </PageContent>
            </div>
        )
    }
}

export default Demo
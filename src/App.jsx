import React, { Component } from 'react'
import AccountStatus from './components/AccountStatus'
import Auth from './components/Auth'
import Balance from './components/Balance'
import Banking from './components/Banking'

export class App extends Component {
    render() {
        return (
            <div>
                <Auth/>
                <Balance/>
                <Banking/>
                <AccountStatus/>
            </div>
        )
    }
}

export default App

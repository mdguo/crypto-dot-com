import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import eventEmitter from '../helper/event';
import NavDropdown from 'react-bootstrap/NavDropdown';

// header, contains currency selector, and probably pagination
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currency: 'USD'
        }
    }

    onCurrencyChanged = (currency) => {
        if (currency != this.state.currency) {
            this.setState({ currency })
            console.log('currency changed: ' + currency)
            eventEmitter.emit('currencyChanged', currency)
        }
    }

    render() {
        let currencyList = ['USD', 'EUR', 'HKD', 'CNY']
        let dropDownItems = currencyList.map((currency, idx) => {
            return <NavDropdown.Item 
                key={idx}
                className={this.state.currency === currency ? 'active' : ''}
                onClick={this.onCurrencyChanged.bind(this, currency)}>
                {currency}
            </NavDropdown.Item>
        })

        return (
            <Navbar>
                <Navbar.Brand href="/">Crypto</Navbar.Brand>
                <NavDropdown title="Currency" id="basic-nav-dropdown">
                    {dropDownItems}
                </NavDropdown>
            </Navbar>
        )
    }
}

export default Header;
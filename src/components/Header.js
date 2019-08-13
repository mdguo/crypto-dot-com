import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import eventEmitter from '../helper/event';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pagination from 'react-bootstrap/Pagination'

// header, contains currency selector, and probably pagination
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currency: 'USD',
            currPage: 0
        }
    }

    onCurrencyChanged = (currency) => {
        if (currency != this.state.currency) {
            this.setState({ currency })
            // console.log('currency changed: ' + currency)
            eventEmitter.emit('currencyChanged', currency)
        }
    }

    onPaginate = (offset) => {
        let newPage = this.state.currPage + offset
        console.log(`paginate called, current: ${this.state.currPage} next: ${newPage}`)
        this.setState({
            currPage: newPage
        })
        eventEmitter.emit('paginate', newPage)
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

        let pager = (
            <Navbar.Collapse className="justify-content-end">
                <Pagination>
                    <Pagination.Item disabled={this.state.currPage === 0} onClick={this.onPaginate.bind(this, -1)}>{'Previous 50'}</Pagination.Item>
                    <Pagination.Item onClick={this.onPaginate.bind(this, 1)}>{'Next 50'}</Pagination.Item>
                </Pagination>
            </Navbar.Collapse>
        )

        return (
            <Navbar>
                <Nav.Link href="/" eventKey="home">Home</Nav.Link>
                <Nav.Link href="/tracker" eventKey="tracker">Tracker</Nav.Link>
                <NavDropdown title="Currency" id="basic-nav-dropdown">
                    {dropDownItems}
                </NavDropdown>
                {pager}
            </Navbar>
        )
    }
}

export default Header;
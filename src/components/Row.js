import React from 'react';

// takes in a row and renders it
class Row extends React.Component {
    render() {
        let {
            short,
            name,
            price,
            token,
            symbol,
            volume_24h,
            supply,
            market_cap
        } = this.props.data

        return (<tr>
            <td>{this.props.rank+1}</td>
            <td>{short}</td>
            <td>{name}</td>
            <td>{symbol}{price}</td>
            <td>{supply} {token}</td>
            <td>{symbol}{market_cap}</td>
            <td>{symbol}{volume_24h}</td>
        </tr>)
    }
}

export default Row;
import React from 'react';
import RowRenderer from './RowRenderer';
import query from '../helper/network';
import Table from 'react-bootstrap/Table';

class TableView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rowsList: [
                '1', '2', '3'
            ],
            sort: {
                column: 'marketCap',
                desc: true
            }
        }
    }

    // TODO: parameterize convertion currency, default USD for now
    componentDidMount() {
        let response = query.getMarketCap({})
        let data = response.Data.map(data => {
            return {
                name: data.CoinInfo.Name,
                fullName: data.CoinInfo.FullName,
                price: data.RAW['USD'].PRICE,
                volume24: data.RAW['USD'].TOTALVOLUME24HTO,
                supply: data.RAW['USD'].SUPPLY,
                marketCap: data.RAW['USD'].MKTCAP
            }
        })
        this.setState({
            rowsList: data
        })
    }

    render() {
        return (<div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Symbol</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Supply</th>
                        <th>Market Cap</th>
                        <th>Volume (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    <RowRenderer rows={this.state.rowsList} />
                </tbody>
            </Table>
        </div>)
    }
}

export default TableView;
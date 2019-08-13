import React from 'react';
import RowRenderer from './RowRenderer';
import query from '../helper/network';
import eventEmitter from '../helper/event';
import { columnsMap, columnsInfo, multiSymbolsMap } from '../helper/collection';
import Table from 'react-bootstrap/Table';
import _ from 'lodash';

class TableView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                collection: []
            },
            prevSort: '',
            sorting: '',
            sortOrder: '',
            currPage: 0,
            currency: 'USD'
        }

        eventEmitter.on('currencyChanged', this.handleCurrencyChanged)
        eventEmitter.on('paginate', this.handlePagination)
    }

    sort = (columnName) => {
        let newData = this.sortRows(this.state.data, columnName, this.state.prevSort)
        this.setState({
            data: newData,
            prevSort: (this.state.prevSort == columnName) ? '' : columnName,
            sorting: columnName
        })
    }

    sortRows = (data, currSortCol, prevSortCol) => {
        // console.log("now sorting: " + currSortCol + ", previously sorting: " + prevSortCol)
        data.collection = this.sortCollection(data.collection, currSortCol, (currSortCol == prevSortCol))
        return data
    }

    sortCollection = (collection, columnName, ascending) => {
        let order = ascending ? 'asc' : 'desc'
        this.setState({sortOrder: order})
        return _.orderBy(collection, columnName, order)
    }

    handleCurrencyChanged = (currency) => {
        if (currency && currency != this.state.currency) {
            this.queryMarketCapData({tsym: currency}).then(data => {
                this.setState({
                    data,
                    currency
                })
            })
        }
    }

    handlePagination = (page) => {
        this.queryMarketCapData({
            tsym: this.state.currency,
            page
        }).then(data => {
            this.setState({
                data
            })
        })
    }

    queryMarketCapData = (options) => {
        options = options || {}
        let { tsym } = options
        eventEmitter.emit('dataQuerying', {})
        return query.getMarketCap(options).then(response => {
            // rebuild column mapping based on currency
            let columnMap = columnsMap(tsym)
            let collection = response.Data.map(datum => {
                let result = {}
                Object.keys(columnMap).forEach(colName => {
                    result[colName] = _.get(datum, columnMap[colName])
                })
                return result
            });
            
            eventEmitter.emit('dataLoaded', {})
            // return results
            return {
                collection
            }
        })
    }

    queryMultiSymbolsData = (options) => {
        options = options || {}
        let { fsyms, tsyms } = options
        eventEmitter.emit('dataQuerying', {})
        return query.getMultiSymbols(options).then(response => {
            // result response is not an array, need to determine total
            // and build column mapping for each crypto currency
            let collection = fsyms.split(',').map(fsym => {
                let result = {}
                let columnMap = multiSymbolsMap(fsym, tsyms)
                Object.keys(columnMap).forEach(colName => {
                    result[colName] = _.get(response, columnMap[colName])
                })
                return result
            })
            
            eventEmitter.emit('dataLoaded', {})
            
            return {
                collection
            }
        })
    }

    componentDidMount() {
        let {isTracker, trackList} = this.props
        // determine if showing tracker list
        if (isTracker) {
            this.queryMultiSymbolsData({
                fsyms: trackList,   // CSV
                tsyms: this.state.currency
            }).then(data => {
                this.setState({ data })
            })
        } else {
            this.queryMarketCapData({tsym: this.state.currency}).then(data => {  
                this.setState({ data })
            })
        }
    }

    render() {
        let {sorting, sortOrder} = this.state

        let header = Object.keys(columnsInfo).map((col, idx) => {
            let sortClass = ' sortable'
            if(sorting && sorting === columnsInfo[col].data) {
                if(sortOrder === 'desc') {
                    sortClass += ' desc'
                } else {
                    sortClass += ' asc'
                }
            }

            return <th key={idx} className={columnsInfo[col].className + sortClass}
                onClick={this.sort.bind(this, columnsInfo[col].data)}>
                {columnsInfo[col].display}
            </th>
        })

        return (<div>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        {header}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <RowRenderer collection={this.state.data.collection} />
                </tbody>
            </Table>
        </div>)
    }
}

export default TableView;
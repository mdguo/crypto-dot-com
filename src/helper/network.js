import axios from 'axios'
import * as data from './data.json'

function network() {
    let XHR = axios.create({
        baseURL: 'https://min-api.cryptocompare.com/',
        timeout: 3000,
        headers: {
            'authorization': 'Apikey ' + process.env.REACT_APP_APIKEY
        }
    })

    function getMarketCap(options) {
        // limit: number of coins get back paginated by {page}
        // page: pagination
        // tsyms: currency symbol to convert into

        let {
            limit = 10,
            page = 0,
            tsym = 'USD'
        } = options

        // temporaryly return static data to save API calls
        return data ? data.default : {};

        // return XHR.get('/data/top/mktcapfull', {
        //     params: {
        //         limit,
        //         page,
        //         tsym
        //     }
        // }).then(response => {
        //     return response
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    function getMultiSymbols(options) {
        // fsyms: Comma separated cryptocurrency symbols list
        // tsyms: Comma separated cryptocurrency symbols list to convert into
        let {
            fsyms,
            tsyms = 'USD'
        } = options

        return XHR.get('/data/pricemultifull', {
            params: {
                fsyms,
                tsyms
            }
        }).then(response => {
            console.log(response)
            return response
        }).catch(error => {
            console.log(error)
        });
    }

    return {
        getMarketCap,
        getMultiSymbols
    }
}

let query = network()
export default query;
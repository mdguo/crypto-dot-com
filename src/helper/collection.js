export let columnsMap = (currency) => {
    return {
        token: `DISPLAY.${currency}.FROMSYMBOL`,    // cryptocurrency symbol
        symbol: `DISPLAY.${currency}.TOSYMBOL`,     // selected currency symbol
        short: 'CoinInfo.Name',
        name: 'CoinInfo.FullName',
        price: `DISPLAY.${currency}.PRICE`,
        supply: `DISPLAY.${currency}.SUPPLY`,
        market_cap: `DISPLAY.${currency}.MKTCAP`,
        volume_24h: `DISPLAY.${currency}.TOTALVOLUME24HTO`,
        price_raw: `RAW.${currency}.PRICE`,
        supply_raw: `RAW.${currency}.SUPPLY`,
        market_cap_raw: `RAW.${currency}.MKTCAP`,
        volume_24h_raw: `RAW.${currency}.TOTALVOLUME24HTO`
    }
}

export let displayCols = {
    short: 'Symbol',
    name: 'Full Name',
    price: 'Price',
    supply: 'Supply',
    market_cap: 'Market Cap',
    volume_24h: 'Volume (24)'
}

export let dataCols = {
    short: 'Symbol',
    name: 'Full Name',
    price_raw: 'Price',
    supply_raw: 'Supply',
    market_cap_raw: 'Market Cap',
    volume_24h_raw: 'Volume (24)'
}

export let cellAlign = {
    short: 'text-left',
    name: 'text-left',
    price: 'text-right',
    supply: 'text-right',
    market_cap: 'text-right',
    volume_24h: 'text-right'
}
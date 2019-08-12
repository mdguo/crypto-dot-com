export let columnsMap = (currency) => {
    return {
        short: 'CoinInfo.Name',
        name: 'CoinInfo.FullName',
        price: `DISPLAY.${currency}.PRICE`,
        supply: `DISPLAY.${currency}.SUPPLY`,
        token: `DISPLAY.${currency}.FROMSYMBOL`,    // cryptocurrency symbol
        market_cap: `DISPLAY.${currency}.MKTCAP`,
        volume_24h: `DISPLAY.${currency}.TOTALVOLUME24HTO`,
        symbol: `DISPLAY.${currency}.TOSYMBOL`      // selected currency symbol
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

export let cellAlign = {
    short: 'text-left',
    name: 'text-left',
    price: 'text-right',
    supply: 'text-right',
    market_cap: 'text-right',
    volume_24h: 'text-right'
}
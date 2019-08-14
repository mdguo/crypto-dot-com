# Crpyto dot com

## Usage
This app uses NodeJS v6.9.0

To run, configure the API key, then run

`$ npm install`

`$ npm run start`

## API Key
API key is stored in an environment file. It's used to access CryptoCompare APIs. The ".env" file should be placed in the top level directory. The variable needs to be named `REACT_APP_APIKEY`

## Functionality
This is a simple web app to show market capitalization for cryptocurrencies.

There are 2 views. The main view shows a datagrid that lists a couple attributes of the currencies queried from a toplist from the CryptoCompare API. The user is able to select the conversion currency for display, such as USD, HKD, etc… The list is also paginated since the API conveniently has native support. The datagrid is paginated at 50 rows per page. The datagrid is sortable by simply clicking on the grid header. This will only sort data that is already on the client.

The user can also track specific crypto coins. The tracking preferences are stored in the browser’s local storage. The second view shows a datagrid for the tracked crypto coins only. The data is also queried from the CryptoCompare API, but on a different endpoint.

## Architecture
Since the app is not too big, I decided to only split code in two directories. All front end react components are in /components, and backend code along with utilities are in /helper.

### Components
`App.js` main entry point of the app. Contains a router that routes between the main view and the tracker view.

`Header.js`Contains navigation links, currency selector, and pagination controls

`LoadingModal.js` A simple modal to to overlay the UI when there is a pending network call to prevent any user actions

`RowsRenderer`, `Row.js` Controls how to render a list of rows, and a single row

`TableView.js` The main datagrid implementation. Contains most of the data and render logic.

`Tracker.js` Datagrid for rendering tracked coins. Uses TableView


### Helper
`Collection.js` contains column definitions that controls how data should be accessed from query results, processed by sort algorithms, and displayed to the web page.

`Event.js` contains a simple event handling module.

`Network.js` contains endpoint handling for the CryptoCompare API. Though most of the development time was spent using local json files saved from sample calls to save API usage.

`Storage.js` contains a wrapper module for accessing the browser’s localStorage

PS: I did not test on IE.
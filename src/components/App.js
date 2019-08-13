import React from 'react';
import Header from './Header';
import TableView from './TableView';
import Tracker from './Tracker';
import LoadingModal from './LoadingModal';
import { Route, BrowserRouter } from 'react-router-dom';
import '../css/App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={TableView} />
                    <Route path="/tracker" component={Tracker} />
                    <LoadingModal />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
import React from 'react';
import Header from './components/Header';
import TableView from './components/TableView';
import Tracker from './components/Tracker';
import LoadingModal from './components/LoadingModal';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

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
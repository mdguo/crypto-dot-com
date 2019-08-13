import React from 'react';
import Header from './Header';
import TableView from './TableView';
import Tracker from './Tracker';
import LoadingModal from './LoadingModal';
import TrackingModal from './TrackingModal';
import Container from 'react-bootstrap/Container';
import { Route, BrowserRouter } from 'react-router-dom';
import '../css/App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Container>
                        <Header />
                        <Route exact path="/" component={TableView} />
                        <Route path="/tracker" component={Tracker} />
                        <LoadingModal />
                        <TrackingModal />
                    </Container>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
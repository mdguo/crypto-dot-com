import React from 'react';
import Header from './components/Header';
import TableView from './components/TableView';
import LoadingModal from './components/LoadingModal';
import './App.css';

class App extends React.Component {
    render() {
        return (
        <div className="App">
            <Header />
            <TableView />
            <LoadingModal />
        </div>
    )
  }
}

export default App;

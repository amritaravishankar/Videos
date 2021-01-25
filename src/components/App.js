import React from 'react';
import SearchBar from './SearchBar.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';

class App extends React.Component {

    render() {
        return <div className = "ui container"> App!
            <SearchBar />
            <VideoList />
            <VideoDetail /> 
            
             </div>;
    }
}

export default App;
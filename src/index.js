import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_lists';
import VideoDetail from './components/video_details';


const API_KEY = 'AIzaSyCL6RkMIKwXFk4euossIXWQ4veJfsKr868';

//create a new Component. this component should produce HTML.
class App extends Component {

    constructor(props) {
        super(props)
        this.state = { videos: [],
        selectedVideo: null }
        this.videoSearch('Avengers 4: Infinity War')
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ videos,
            selectedVideo: videos[0] })
        })
    }
    render() {
     
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo =>  this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        )
    }
}


//Take this component's generated HTML and put it on the Page. (into the DOM)
ReactDOM.render(<App />,
    document.querySelector('.container'));
import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData.json';
import Articles from './Articles';

const api = new DataApi(data);

class App extends React.Component{

    constructor(){
        super();
        this.state={
            articles:api.getArticles(),
            authors:api.getAuthors()
        }
    }

    articleActions = {
        lookupAuthor : authorId => this.state.authors[authorId],
    };

    render(){
        return(
            <div>
                <Articles
                    articles={this.state.articles}
                    articleActions={this.articleActions}
                ></Articles>
            </div>
        );
    }
}

export default App;

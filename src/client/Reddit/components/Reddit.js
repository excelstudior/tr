import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Picker from './Picker';
import Posts from './Posts'
import { fetchPostsIfNeeded } from '../actions';

class Reddits extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick=this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        fetchPostsIfNeeded(this.props.selectedSubreddit)
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedSubreddit !== prevProps.selectedSubreddit){
            fetchPostsIfNeeded(this.props.selectedSubreddit)
        }
    }
    handleChange(nextSubreddit) {
        this.props.handleChange(nextSubreddit)
    }
    handleRefreshClick(e){
        e.preventDefault();

        this.props.handleRefreshClick(this.props.selectedSubreddit)
    }
    render() {
        const {
            selectedSubreddit,
            posts,
            isFetching,
            lastUpdated } = this.props

        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    options={['reactjs', 'frontend', 'nba']}
                    onChange={this.handleChange}
                />
                <p>
                   <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}</span>
                   {!isFetching && 
                   <button onClick={this.handleRefreshClick}
                   >Refresh</button>}
                </p>
                {isFetching && posts.length===0 && <h2>Loading...</h2>}
                {!isFetching && posts.length ===0 && <h2>Empty</h2>}
                {posts.length>0 && 
                <div style={{opacity:isFetching?0.5:1}}>
                    <Posts posts={posts}/>
                </div>}
            </div>
        )
    }
}

Reddits.PropTypes = {
    selectSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
}

export default Reddits
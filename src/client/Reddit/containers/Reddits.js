import { connect } from 'react-redux';
import Reddits from '../components/Reddit';
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions/index'


const mapStateToProps = state => {
   
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleChange:(nextSubreddit)=>{
        dispatch(selectSubreddit(nextSubreddit));
        dispatch(fetchPostsIfNeeded(nextSubreddit))},
    handleRefreshClick:(selectedSubreddit)=>{
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    },
    fetchPostsIfNeeded:()=>dispatch(fetchPostsIfNeeded(selectedSubreddit)),




})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reddits)
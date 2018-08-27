import { combineReducers } from 'redux';
import selectedSubreddit from '../Reddit/reducers/selectedSubreddit'
import postsBySubreddit from '../Reddit/reducers/postsBySubreddit'
export default combineReducers({
    selectedSubreddit,
    postsBySubreddit
})
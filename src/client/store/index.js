import { createStore } from 'redux';
import reducer from '../reducer/index'
import {state} from '../../common/mock-data'
const initialState = state;
export const store = createStore(reducer, initialState)
import { createStore } from 'redux';
import reducer from '../reducer/index'
const initialState = { tech: ["Redux","React","Elm"] };
export const store = createStore(reducer, initialState)
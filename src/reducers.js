import { combineReducers } from 'redux'
import Map from './Map/redux'
import History from './History/redux'
import Dashboard from './Dashboard/redux'

const app = combineReducers({
    Map,
    History,
    Dashboard
})

export default app

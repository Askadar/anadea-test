import { combineReducers } from 'redux'
import Map from './Map/redux'
import History from './History/redux'
import Dashboard from './Dashboard/redux'
import NewTask from './Dashboard/NewTask/redux'

const app = combineReducers({
    Map,
    History,
    Dashboard,
    NewTask
})

export default app

import { combineReducers } from 'redux'
import Dashboard from './Dashboard/redux'
import History from './History/redux'

const app = combineReducers({
  History,
  Dashboard
})

export default app

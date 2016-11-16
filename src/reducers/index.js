import {combineReducers} from 'redux';
import airports from './AirportReducer';
import route from './RouteReducer';
import tickets from './TicketReducer';

const rootReducer = combineReducers({airports,route,tickets});

export default rootReducer
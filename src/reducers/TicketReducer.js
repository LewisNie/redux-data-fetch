import {RECEIVE_TICKETS,REQUEST_TICKETS} from '../constants';

const ticket = (state=[],action)=>{
    switch(action.type){
        case REQUEST_TICKETS:
            return [];
        case RECEIVE_TICKETS:
            return action.tickets;
        default:
            return state;
    }
}
export default ticket;
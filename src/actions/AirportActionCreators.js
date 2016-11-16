import {REQUEST_AIRPORTS,RECEIVE_AIRPORTS,CHOOSE_AIRPORT,RECEIVE_TICKETS,REQUEST_TICKETS} from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

let AirportActionCreators = {
    fetchAirports(origin,destination){
        return (dispatch) => {
            dispatch({type:REQUEST_AIRPORTS});
            AirCheapAPI.fetchAirports().then(
                (airports)=>dispatch({type:RECEIVE_AIRPORTS,success:true,airports}),
                (error) => dispatch({type:RECEIVE_AIRPORTS,success:false})
            );
        }
    },

    chooseAirport(target,airport){
        return {
            type:CHOOSE_AIRPORT,
            target:target,
            code:airport?airport.value:''
        }
    },
    fetchTicket(origin,destination){
        return (dispatch)=>{
            console.log('I am in creator');
            dispatch({type:REQUEST_TICKETS});
            AirCheapAPI.fetchTickets(origin,destination).then(
                (tickets)=> dispatch({type:RECEIVE_TICKETS,success:true,tickets}),
                (error)=>dispatch({type:RECEIVE_TICKETS,success:false})
            )
        }
    }
}
export default AirportActionCreators;

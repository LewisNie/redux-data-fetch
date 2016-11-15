import {REQUEST_AIRPORTS,RECEIVE_AIRPORTS,CHOOSE_AIRPORT} from '../constants';
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
    }
}
export default AirportActionCreators;

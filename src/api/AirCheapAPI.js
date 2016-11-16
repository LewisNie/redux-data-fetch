import 'whatwg-fetch';

let AirCheapAPI = {
    fetchAirports(){
        return fetch('https://aircheapapi.pro-react.com/airports').then((response)=>response.json())
    },
    fetchTickets(origin,destination){
        console.log('I am fetching');
        //console.log(origin,destination);
        return fetch(`https://aircheapapi.pro-react.com/tickets?origin=${origin}&destination=${destination}`).then((response)=>response.json());
    }
};

export default AirCheapAPI;
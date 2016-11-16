import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect,Provider} from 'react-redux';
import aircheapStore from './store/aircheapStore';
import Select from 'react-select';
import AirportActionCreators from './actions/AirportActionCreators';
import TicketItem from './components/TicketItem';

class Flight extends Component{
    componentDidMount(){
        this.props.fetchAirports();
       // this.props.fetchTickets('SFO','HKG');
    }

    componentWillUpdate(nextProps,nextState){
        console.log('next props is');
        console.log(nextProps);
        let originAndDestinationSelected = nextProps.origin && nextProps.destination;
        let selectionHasChangedSinceLastUpdate = nextProps.origin!==this.props.origin||nextProps.destination!==this.props.destination;
        if(originAndDestinationSelected&&selectionHasChangedSinceLastUpdate){
            this.props.fetchTickets(nextProps.origin,nextProps.destination);
        }

    }

    render(){
        let ticketList = this.props.tickets.map((ticket)=>{
            return (<TicketItem key={ticket.id} ticket={ticket} />)
        });

        return (
            <div>
                <header>
                    <div className="header-brand">
                        <img src="logo.png" height="35" />
                        <p>Check discount ticket prices and pay using your AirCheap points</p>
                    </div>

                    <div className="header-route"></div>

                    <Select name="origin" value={this.props.origin} options={this.props.airports} onChange={this.props.onChooseAirport.bind(this,"origin")} />
                    <Select name="destination" value={this.props.destination} options={this.props.airports} onChange={this.props.onChooseAirport.bind(this,'destination')} />
                </header>
                <div>
                    {ticketList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return ({
    airports:state.airports.map((airport)=>({
        value:airport.code,
        label:`${airport.city} - ${airport.country} (${airport.code})`
    })),
    origin:state.route.origin,
    destination:state.route.destination,
        tickets:state.tickets
})
}

const mapDispatchToProps = (dispatch) => ({
    fetchAirports:()=>dispatch(AirportActionCreators.fetchAirports()),
    fetchTickets: (origin,destination)=>dispatch(AirportActionCreators.fetchTicket(origin,destination)),
    onChooseAirport:(target,airport)=>dispatch(AirportActionCreators.chooseAirport(target,airport))
})

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(Flight);

render(<Provider store={aircheapStore}><AppContainer/></Provider>, document.getElementById('root'));

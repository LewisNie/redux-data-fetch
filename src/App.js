import React, {Component} from 'react';
import {render} from 'react-dom';

class Flight extends Component{
    render(){
        return (
            <div>hello world</div>
        )
    }
}

render(<Flight />, document.getElementById('root'));

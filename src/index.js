import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basicos/Primeiro'


const tag = <h1>Olá React!!</h1>

ReactDOM.render(
    <div>
        <Primeiro/>
    </div>,
    document.getElementById('root')
);
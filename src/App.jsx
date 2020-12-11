import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default () => {
    return (
        <div>
            <h1>Fundamento React (Arrow)</h1>
            <Aleatorio min={1} max={60}/>
            <Fragmento/>
            <ComParametro titulo="Situação do Aluno" aluno="Mateus" nota={9.3}/>
            <Primeiro/>
        </div>
    )
}
import "./App.css"
import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default () => {
    return (
        <div className="app">
            <h1>Fundamento React</h1>

            <div className="cards">
                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parametro" color="#E8B71A">
                    <ComParametro titulo="Situação do Aluno" aluno="Mateus" nota={9.3} />
                </Card>

                <Card titulo="#01 - Primeiro Fragment" color="#588C73">
                    <Primeiro />
                </Card>
            </div>

        </div>
    )
}
import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return(
        <div>
            <FamiliaMembro nome="Mateus" sobrenome={props.sobrenome} /> 
            <FamiliaMembro nome="Victória" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
        </div>
    )
}
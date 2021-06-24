import './Card.css';
import React from 'react';

export default props => {

    const cardStyle = {
        backgroundColor: props.color || "#f00",
        borderColor: props.color || "#f00"
    }

    return (
    <div className="card" style={cardStyle}>
        <div className="title">{props.titulo}</div>
        <div className="content">
            {props.children}
        </div>
    </div>
    );
};
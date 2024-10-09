import React from 'react';

const Card = (props) => {
    return (
        
        <div className="card" style= {{ width: '20rem'}} >
            <img src={props.imageUrl} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.url} className="btn btn-primary">Saber más</a>
            </div>
        </div>
    );
};

export default Card;

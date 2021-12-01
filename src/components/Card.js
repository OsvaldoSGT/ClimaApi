import React, { useState } from "react";
//Importacion de libreria card flip para hacer el efecto de giro
import ReactCardFlip from 'react-card-flip';

function Card(props) {

    //Declaracion del valor para determinar en que estado se encuentra la tarjeta
    const [isFlipped, setIsFlipped] = useState(false);

    //Funcion que se llama y cambia el estado de la tarjeta para que gire, es un handle click ya que maneja el boton de la tarjeta
    function handleClick () {
        setIsFlipped(!isFlipped);
    }

    return (
        //Se declara el componente ReactCardFlip que engloba todo el render de la tarjeta con sus respectivos props
        //Se accede a cada uno de los valores por medio de los props que pasamos por ejemplo props.img
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card">
            <div className="cardCuerpo">
                <img src={props.img} className="cardImg" />
                <h2 className='cardTitulo'>{props.nombre}</h2>
                <h3 className='cardDescripcion'>{props.descripcion}</h3>
            </div>
            <button className='cardBtn' onClick={handleClick}>Detalles</button>
        </div>

        <div className="cardBack">
            <div className="cardCuerpo">
                <img src={props.img} className="cardImg" />
                <h2 className='cardTitulo'>{props.nombre}</h2>
                <h3 className='cardDescripcion'>Pais: {props.pais}</h3>
                <h3 className='cardDescripcion'>Ciudad: {props.ciudad}</h3>
                <h3 className='cardDescripcion'>Clima: {props.descripcion}</h3>
                <h3 className='cardDescripcion'>Temperatura: {props.temperatura} ºC</h3>
                <h3 className='cardDescripcion'>Humedad: {props.humedad}</h3>
            </div>
            <button className='cardBtn' onClick={handleClick}>Regresar</button>
        </div>
        </ReactCardFlip>
    );
}

export default Card;
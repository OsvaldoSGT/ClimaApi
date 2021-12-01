import React, { useState, useEffect } from "react";
import Card from './Card';

//Dashboard es el componente principal de la App, dentro de dashboard se manda a llamar el componente Card

//Key de la Api OpenWeather. 
const APIKey = '22a22eeaf9e5608ab6a79e86de2d1a65';

//Se declaran hooks de react para los valores de cada uno de los lugares especificos
function Dashboard() {

    const [infoMontemorelos, setInfoMontemorelos] = useState({
        ciudad: 'Montemorelos',
        pais: '',
        temperatura: '',
        descripcion: '',
        humedad: '',
    });

    const [infoAllende, setInfoAllende] = useState({
        ciudad: 'Allende',
        pais: '',
        temperatura: '',
        descripcion: '',
        humedad: '',
    });

    const [infofranciscoGarza, setInfofranciscoGarza] = useState({
        ciudad: '',
        latitud: '25.648803',
        longitud: '-100.412027',
        pais: '',
        temperatura: '',
        descripcion: '',
        humedad: '',
    });

    const [infoMadero, setInfoMadero] = useState({
        pais: '',
        latitud: '25.500321',
        longitud: '-102.191446',
        temperatura: '',
        descripcion: '',
        humedad: '',
    });

    const [infoAeropuerto, setInfoAeropuerto] = useState({
        ciudad: '',
        latitud: '25.867009',
        longitud: '-100.238896',
        pais: '',
        temperatura: '',
        descripcion: '',
        humedad: '',
    });

    //Funcion que hace el fetch de datos dentro de DatosCiudad, en este caso se hace el fetch utilizando la ciudad como base para obtener los datos con la api
    const datosCiudad = async (ciudad, key) =>{
        const APILink = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${key}`;
        const response = await fetch(APILink);
        const datos = await response.json();
        //Almacenamiento de datos dentro de un objeto para pasarlo posteriormente al useState de cada uno. 
        const objetoDatos = {
            ciudad: ciudad,
            pais: datos.sys.country,
            temperatura: datos.main.temp,
            descripcion: datos.weather[0].description,
            humedad: datos.main.humidity
        };
        return objetoDatos;
    }

    //Funcion que hace el fetch de datos utilizando en lugar de la ciudad, la latitud y longitud del lugar en especifico, en este caso del aeropuerto, helipuerto, etc. 
    const datosLugar = async (latitud, longitud, key) =>{
        const APILink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=${key}`;
        const response = await fetch(APILink);
        const datos = await response.json();
        const objetoDatos = {
            ciudad: datos.name,
            latitud: latitud,
            longitud: longitud,
            pais: datos.sys.country,
            temperatura: datos.main.temp,
            descripcion: datos.weather[0].description,
            humedad: datos.main.humidity
        };
        return objetoDatos;
    }

    //UseEffect utilizado para asignar los valores a los usestate y llamar las funciones anteriores, se utilizan funciones asincronas para que espere respuesta de la API, se corre una vez 
    useEffect(async ()=>{

        const morelos = await datosCiudad(infoMontemorelos.ciudad, APIKey);
        setInfoMontemorelos(morelos);

        const allende = await datosCiudad(infoAllende.ciudad, APIKey);
        setInfoAllende(allende);

        const fGarza = await datosLugar(infofranciscoGarza.latitud, infofranciscoGarza.longitud, APIKey);
        setInfofranciscoGarza(fGarza);

        const madero = await datosLugar(infoMadero.latitud, infoMadero.longitud, APIKey);
        setInfoMadero(madero);

        const aeropuerto = await datosLugar(infoAeropuerto.latitud, infoAeropuerto.longitud, APIKey);
        setInfoAeropuerto(aeropuerto);
    },[]);
    
    //Los valores almacenados en los usetate (componentes de react) se pasan como props al componente card 5 veces (1 por cada ubicacion) y se renderizan


    return(
        <div className="contenedor">
            <Card 
            ciudad = {infoMontemorelos.ciudad}
            nombre = 'Montemorelos'
            temperatura = {infoMontemorelos.temperatura}
            descripcion = {infoMontemorelos.descripcion}
            pais = {infoMontemorelos.pais}
            humedad = {infoMontemorelos.humedad}
            img = 'http://conarte.org.mx/wp-content/uploads/2017/09/Templo_Parroquial_Sagrado_Coraz%C3%B3n_de_Jes%C3%BAs-montemorelos-nuevoleon.jpg'
            />
            <Card 
            ciudad = {infoAllende.ciudad}
            nombre = 'Allende'
            temperatura = {infoAllende.temperatura}
            descripcion = {infoAllende.descripcion}
            pais = {infoAllende.pais}
            humedad = {infoAllende.humedad}
            img = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-bO8qWB2bJ1g%2FTsxXwZahrrI%2FAAAAAAAAMJI%2F1XxtlfiM5RQ%2Fw1200-h630-p-nu%2FIglesia%2Bde%2BAllende%2Bnuevo%2Bleon.jpg&f=1&nofb=1'
            />
            <Card 
            ciudad = {infofranciscoGarza.ciudad}
            nombre = 'Francisco Garza'
            temperatura = {infofranciscoGarza.temperatura}
            descripcion = {infofranciscoGarza.descripcion}
            pais = {infofranciscoGarza.pais}
            humedad = {infofranciscoGarza.humedad}
            img = 'https://pbs.twimg.com/media/D1klwSMU8AAKTwU?format=jpg&name=large'
            />
            <Card 
            ciudad = {infoMadero.ciudad}
            nombre = 'Casa Madero'
            temperatura = {infoMadero.temperatura}
            descripcion = {infoMadero.descripcion}
            pais = {infoMadero.pais}
            humedad = {infoMadero.humedad}
            img = 'https://en-mexico.com.mx/fotos/coahuila/parras-de-la-fuente.jpg'
            />
            <Card 
            ciudad = {infoAeropuerto.ciudad}
            nombre = 'Aeropuerto del Norte'
            temperatura = {infoAeropuerto.temperatura}
            descripcion = {infoAeropuerto.descripcion}
            pais = {infoAeropuerto.pais}
            humedad = {infoAeropuerto.humedad}
            img = 'https://aerolineasmexicanas.mx/wp-content/uploads/2011/09/aeropuerto-internacional-monterrey.jpg'
            />
        </div>
    );
}

export default Dashboard;
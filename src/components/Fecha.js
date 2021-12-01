import  React, { useState , useEffect } from 'react'

function Fecha(){
    let [date,setDate] = useState(new Date());
    
    //Declara el tiempo y fecha del lugar. 
    useEffect(() => {
        let timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    //De parte de la variable que se declaro, se pone el titulo de la pagina y se accede al valor de la fecha y hora correspondientemente. 
    return(
        <div>
            <h1> {date.toLocaleDateString()}     {date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default Fecha;
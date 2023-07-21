import { useAuth0 } from "@auth0/auth0-react";
import React, { Fragment } from "react";
import Axios from 'axios';
import { useEffect, useState } from "react";
import CelebritiesList from "../components/CelebritiesList";
import "./estilosPages.css";

const Home = () => {
    const { user, isLoading } = useAuth0();
    const [celebridad, setCelebridad] = useState([]);

    const key = process.env.REACT_APP_KEY;
    const headers = {
        'X-Api-Key': key
    }
    const nombre = 'Michael Jordan';
    const url = process.env.REACT_APP_URL_APP + 'max_net_worth=30';

    /*En la estructutra la funcion flecha:
    Cuando es dentro de un return se usa() => ()
    Cuando es fuera de un return se usa () => {}*/

    useEffect(() => {
        //Estructura de la promesa
        Axios.get(url, { headers })
            //En el then se coloca lo que se quiere mostrar
            .then(
                //resp de respuesta
                resp => {
                    console.log(resp.data);
                    setCelebridad(resp.data);
                    console.log(celebridad);
                }
            )
            //En el catch lo que se quiere hacer
            .catch(
                error => {
                    console.log(error);
                }
            )
    }, [])

    if (isLoading) {
        return (<div>Cargando ...</div>)
    }

    return (
        <Fragment>
            <div id="seccion_usuario">
                <img src={user.picture} class="rounded mx-auto d-block" id='imagen_perfil' alt={user.name}></img>
                <br></br>
                <div id="seccion_usuario2">
                    <h3>{user.name}</h3>
                    <p><i>{user.email} </i> </p>
                </div>
            </div>
            {/*celebridad.map(c => <p>{c.name}</p>)*/}
            {<div>
                <CelebritiesList celebridades={celebridad}></CelebritiesList>
            </div>}
        </Fragment>


    );
}

export default Home
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from '../actions/userActions';
import "./estilosAuth.css";



export const Login = () => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user));
        }
    }, [isAuthenticated, user, dispatch]);

    if (isLoading) {
        return (
            <main id="cargando">
                <img src="https://cdn.pixabay.com/animation/2022/12/26/19/49/19-49-19-662_512.gif" alt="imagen_cargando"></img>
                {/* //  */}
                <h5>Cargando...</h5>
            </main>
        )
    }

    return (
        <main id="cuerpo_login">
            <div class="row">
                <div id="login" class="col-lg-4 offset-lg-4 col-md-6 offset-md-3
                    col-12">
                    <h2 class="text-center" id="titulo_login">Bienvenido</h2>
                    <img class="img-fluid mx-auto d-block rounded"
                        src='https://static.vecteezy.com/system/resources/previews/001/254/680/non_2x/cinema-background-concept-vector.jpg' alt='Celebridad' />
                    <br></br>
                    <h3> <strong>Accede desde el siguiente botón</strong></h3>
                    <br></br>
                    <button type="button" class="btn btn-outline-info" id="boton_login" onClick={handleLogin}>Iniciar Sesión</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            {/* <section>
                <h1 id="titulo_login">Bienvenido</h1>
            </section> */}
        </main>
    );
}

// export default Login
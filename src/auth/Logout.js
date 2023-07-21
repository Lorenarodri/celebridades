import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const Logout = () => {
    const { logout } = useAuth0();
    return (
        <div>
            <button type="button" class="btn btn-outline-info" onClick={() => logout({ returnTo: window.location.origin })}>
                Cerrar Sesión
            </button>
        </div>
    );
}

//export default Logout;
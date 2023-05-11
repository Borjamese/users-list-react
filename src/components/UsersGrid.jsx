import React, { useState, useEffect } from "react";
import "./users.css"
import { SingleRender } from "./SingleRender";

function FetchUsers() {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingError, setError] = useState(null);


    useEffect(() => {
        setLoading(true);

        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(setLoading(false))
            .then(datos => setInfo(datos.data))
            .catch(error => setError(error));
    }, []);

    if (loading) return <h1> CARGANDO </h1>
    if (loadingError) return console.log({ loadingError });

    return (
        <div className="container-fluid">
            <h1 className="listadousuarios">Listado de usuarios</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="flex">
                        {info.map((user) => {
                            return (
                                <SingleRender
                                    key={user.id}
                                    {...user}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

//esto se lo poniamos en el mapeo del user pero es más limpio si usamos el singlerender.
/*<div className="users card" key={user.id}>
    <p>{user.first_name}</p>
    <img src={user.avatar} title={user.first_name} />
    <p className="mail">{user.email}</p>
</div>*/

export default React.memo(FetchUsers)

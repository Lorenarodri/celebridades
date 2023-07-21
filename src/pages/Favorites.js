import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const Favorites = () => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel);

    return (
        <Fragment>
            {/* <div> Favorites </div> */}
            <table class="table table-bordered border-primary"
            id='seccion_tabla'>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>NOMBRE</th>
                        <th scope='col'>NACIONALIDAD</th>
                        <th scope='col'>EDAD</th>
                    </tr>
                </thead>
                <tbody>
                    {celebrities_List.map(c => {
                        return (
                            <tr>
                                <td scope='row'>{c.birthday}</td>
                                <td scope='row'>{c.name}</td>
                                <td scope='row'>{c.nationality}</td>
                                <td scope='row'>{c.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>

    )
}
/**
 * @author Jose Salvador lopez
 * @name Bar tipo function
 * @date 04 Enero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose Salvador lopez
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params {links y distribucion}
 */

import { Link } from "react-router-dom";

export default function Item(props) {
    return (
        <li className='nav-item'>
            <Link href={
                    props.route
                }
                className={
                    props.styleClass
            }>
                {
                props.children
            }</Link>
        </li>
    );
}
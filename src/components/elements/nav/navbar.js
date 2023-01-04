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

import React,{useState} from 'react';
import Item from './item';
import Bar from './bar';
import './_style.scss';
// import image from '../../../assets/images/';

export default function Navbar(props) {
    const [header, setHeader] = useState('links');
    return(
       
        <Bar>
            <div className="navbar-logo">
                
                <Item route={"/"} styleClass={'logo-bar'}>
                    <span className='logo'>
                        <img width={42} height={46} 
                            alt="logo"
                            className="logo-bar"/>
                    </span>
                </Item>
            </div>
            <div className="hb-bar"
                onClick={
                    () => (header !== 'links') ? setHeader('links') : setHeader('links-show')
            }>
                <svg viewBox="0 0 100 80" width="40" height="40" className="hamburger-bar">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
            <div className={header}>

                <Item route={"/"}
                    styleClass={'links-text'}>Item1</Item>
                <Item route={"/"}
                    styleClass={'links-text'}>Item2</Item>
                <Item route={"/"}
                    styleClass={'links-text'}>Item3</Item>
            </div>
        </Bar>

    );
}
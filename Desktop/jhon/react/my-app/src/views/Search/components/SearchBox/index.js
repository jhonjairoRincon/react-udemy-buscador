import React from 'react';
import {useState} from 'react';

import './style.css';

// recibe como parametro las propiedades desde el componente padre
export default function SearchBox({onSearch , onClose}) {

    const [searchText, setsearchText] = useState('')
    const [CloseHidden, setCloseHidden] = useState(true)
    const handleSearchClick = () =>{
        setsearchText('');
        onClose();
        setCloseHidden(true)
    }
    const handleCloseClick = () => {
        //enviamos como argumento el searchText
        onSearch(searchText)
        setCloseHidden(false)
    }
    return (
        
            <div className='search-box'>
                <h2 className='search-box-title'>buscador personal</h2>
                <div className='search-box-buttons'>
                    <label>
                            {/* // el valro del input lo igualamaos al searchText */}
                        <input value={searchText} 
                          // asiganmos por medio de useState el valor a searchText a lo que el usuario escribe
                           onChange= {({target:{value}})=>setsearchText (value)}
                           className= 'search-box-input'
                        />
                    </label>
                    {/* al dar click se llama al evento que se recibe por parametro */}
                    <button onClick={handleCloseClick} 
                    disabled={!searchText.length}>Buscar</button>
                    {/* creamos una funcion que limpie el input y ademas llame al onClose */}
                    <button className={` ${CloseHidden ? 'botton-hidden' : 'close'}`} 
                            onClick={handleSearchClick}>Cerrar</button>
                </div>
                
            </div>
        
    )
}

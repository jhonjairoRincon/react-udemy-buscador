import React from 'react'
import SearchBox  from './components/SearchBox/index';
import SearchResult from './components/SearchResult';

import {useState} from 'react'

import data from '../../data/users.json'

import './style.css'


export default function Search() {
    const [isAtTop, setisAtTop] = useState(false)
    //creamos una costante de estado y le asignamos la informacion de data. 
    const [Data, setData] = useState(data)
    const [results, setresults] = useState([])
   
    //recibimos como propiedad al searchtext y lo filtramos en los valores que obtenermos de data
    const handleSearchClick = (searchText) => {
        // condicional para saber que el areglo contiene infomacion 
        if (Data ?.length){
        // se pasa a minusculas para comparacion de de valores
          const  searchTextMinus = searchText.toLowerCase();

          const filterData =  Data.filter((value)=>{
                return (value.name.toLowerCase().includes(searchTextMinus) ||
                       value.phone.toLowerCase().includes(searchTextMinus) ||
                       value.email.toLowerCase().includes(searchTextMinus) ||
                       value.username.toLowerCase().includes(searchTextMinus)
                      )
            });
            setresults(filterData)
        }
        setisAtTop(true);
    };
    console.log(results)
    const handleCloseClick = () => {
        setisAtTop(!isAtTop);
        setresults([])
    };

    return (
        <div className={`search ${isAtTop ? 'search--top' : 'search--center'}`}>
            {/* onSearch y onClose son porpiedades que van desde el componente padre al hijo  */}
           <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/> 
           <SearchResult result={results} isSearch={isAtTop}></SearchResult>
        </div>
    )
}





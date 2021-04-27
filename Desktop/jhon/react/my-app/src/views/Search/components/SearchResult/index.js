import React from 'react'

export default function SearchResult({result, isSearch}) {
    return (
        <div style={{backgroundColor:'#E8E7E7'}}>
            {!result?.length && isSearch && <p>No Existen Resultados</p>}
            {result?.map((value)=>{
                return(
                    <div key = {value.id} >
                        <p>{value.name}</p>
                        <p>{value.phone}</p>
                        <p>{value.email}</p>

                    </div>
                )
            })}
        </div>
    )
}

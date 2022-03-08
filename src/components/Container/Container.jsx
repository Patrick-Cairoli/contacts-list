import React from 'react'
import Card from '../Card/Card'

import './Container.css'

function Container({data}) {
    return(
        <div className="container" >
            <div className="row justify-content-around">
        {
        data.map((el) =>{
            return (
                <div className="col-3" key={el.id}>
                <Card 
                    name={el.name}
                    picture={el.picture}
                    gender={el.gender}
                    id={el.id}
                    phone={el.phone}
                    email={el.email}
                />
                </div>
                )
            })
        }
            </div>
       </div>
    )
}
export default Container



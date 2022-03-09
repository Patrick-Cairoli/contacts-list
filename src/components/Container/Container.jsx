import React from 'react'
import Card from '../Card/Card'

import './Container.css'

function Container({data}) {
    return(
        <div className="container-fluid mx-2">
            <div className="row justify-content-around my-4">
        {
        data.map((el) =>{
            return (
                <div className="col-12 col-md-6 col-lg-3" key={el.id}>
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



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
                    data={el}
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


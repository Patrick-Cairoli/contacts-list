import React from 'react'
import Card from '../Card/Card'

function Container({data, SetSelectedUser}) {
    return(
        <div className="container-fluid mx-2">
            <div className="row justify-content-around my-4">
        {
        data.map((el) =>{
            return (
                <div className="col-12 col-md-6 col-lg-4" key={el.id}>
                <Card 
                    index={el.i}
                    name={el.name}
                    picture={el.picture}
                    gender={el.gender}
                    id={el.id}
                    phone={el.phone}
                    email={el.email}
                    location={el.location}
                    SetSelectedUser={SetSelectedUser}/>
                </div>
                )
            })
        }
            </div>
       </div>
    )
}
export default Container



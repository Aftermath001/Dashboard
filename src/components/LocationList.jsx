import React from 'react'
import '../styles/locationList.css'


const locations = [
    {
        location:"ABC PLace",
        region:'Nairobi',
        type:'full',
        device:'JH-ABC',
        status:'active',
        
    }
]
const LocationList = () => {
  return (
    <div className= 'location--list'>
        <div className="list--header">
            <h2>Locations</h2>
            <select>
                <option value="Nairobi">All Regions/Towns</option>
                <option value="Nairobi">Nairobi</option>
                <option value='Kisumu'>Kisumu</option>
                <option value='Malindi'>Malindi</option>
                <option value='Mombasa'>Mombasa</option>
                <option value='Eldoret'>Eldoret</option>
            </select>

            <select>
                <option value='Full'>All Types</option>
                <option value='Full'>Full</option>
                <option value='Express'>Express</option>
               
            </select>
            <select>
                <option value='Online'>All Status</option>
                <option value='Online'>Online</option>
                <option value='Offline'>Offline</option>
               
            </select>
        </div>
        <div className="list--container">
    {locations.map((location) => (
        <div className="list" key={location.id}>
            <div className="teacher--detail">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Regions/Towns</th>
                            <th>Types</th>
                            <th>Device</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{location.location}</td>
                            <td>{location.address}</td>
                            <td>{location.type}</td>
                            <td>{location.device}</td>
                            <td>{location.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    ))}
</div>

    </div>
  )
}

export default LocationList



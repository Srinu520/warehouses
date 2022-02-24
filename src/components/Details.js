import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Edit from './Edit'

function Details(props) {
  const { warehouses } = props
  const { id } = useParams()
  const [edit, setEdit] = useState(false)
  const warehouse = warehouses.find(warehouse => warehouse.id === parseInt(id))
  const {name, code, space_available, city, cluster, is_registered, is_live, type } = warehouse
  const [data,] = useState({
    name,
    code,
    space_available,
    city,
    cluster,
    is_registered,
    is_live,
    type
  })
  useEffect(() => {
  }, [id, warehouses, data, edit])
  if(!warehouses) {
    return <div>jhhg</div>
  }
  const handleSubmit = (e, data) => {
    e.preventDefault()
    console.log(data)
    props.updateWarehouse(data)
    setEdit(false)
  }
  
  return (
    <div className='container pt-5'>
      <div className='card shadow-sm col-12 col-md-6 m-auto'>
        <div className='card-body text-dark p-5'>
          <h5 className='card-title'><span>Name:</span>{name}</h5>
          <p className='card-text'><span>Code:</span>{code}</p>
          <p className='card-text'><span>Space Available:</span>{space_available}</p>
          <p className='card-text'><span>City:</span>{city}</p>
          <p className='card-text'><span>Cluster:</span>{cluster}</p>
          <p className='card-text'><span>type:</span>{type}</p>
          <p className='card-text'><span>Registered:</span>{`${is_registered}`}</p>
          <p className='card-text'><span>live:</span>{`${is_live}`}</p>
          
        </div>
      <button className='btn btn-primary w-100 mb-2' onClick={e => setEdit(true)}>Edit</button>
      </div>
      {
        edit && <Edit warehouse={warehouse} handleSubmit={handleSubmit} />
      }
    </div>
  )
}
const mapStateToProps = state => ({
  warehouses: state.warehouses.warehouses,
})
const mapDispatchToProps = dispatch => ({
  updateWarehouse: (warehouse) => dispatch.warehouses.updateWarehouse(warehouse)
})
export default connect(mapStateToProps, mapDispatchToProps)(Details)
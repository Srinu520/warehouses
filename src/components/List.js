import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function List(props) {
  const { warehouses } = props
  const [warehousesList, setWarehousesList] = useState([...warehouses])
  useEffect(() => {

  }, [warehouses, warehousesList])
  const handleChange = (e) => {
    const { value } = e.target
    const filtered = warehouses.map(warehouse => warehouse.name.toLowerCase().includes(value.toLowerCase()) ? warehouse : null).filter(warehouse => warehouse !== null)
    setWarehousesList(filtered)
  }
  const handlFilter = (e) => {
    const { name, value } = e.target
    const filtered = warehousesList.filter(warehouse => warehouse[name].toString().toLowerCase().includes(value.toLowerCase()))
    setWarehousesList(filtered)
  }
  if (warehousesList.length === 0) {
    return (
      <div style={{ paddingTop: '40vh' }} className='w-50 m-auto'>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>No warehouses found!</strong> for the current filters you have selected. Please try again.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={e => document.location.reload()}></button>
      </div>
      </div>
    )
  }
  console.log(warehouses, warehousesList)
  return (
    <div className='container pt-5'>
      <input id='search' type='search' placeholder='Search By Name' onChange={handleChange} />
      <div className='form-group-filter pt-3 pb-2' id='filtersGroup'>
        <input type='text' name='city' placeholder='Filter By City' onChange={handlFilter} />
        <input type='text' name='cluster' placeholder='Filter By Cluster' onChange={handlFilter} />
        <input type='text' name='space_available' placeholder='Filter By Space' onChange={handlFilter} />
      </div>
      <div className='row'>
        {
          warehousesList.map(warehouse => {
            return (
              <div className='col-md-6 col-12 text-dark mt-3 text-start' key={warehouse.id}>
                <Link to={`/${warehouse.id}`}>
                <div className='card shadow-sm'>
                  <div className='card-body text-dark'>
                    <h5 className='card-title text-center text-success'><span>Name:</span>{warehouse.name}</h5>
                    <p className='card-text'><span>Code:</span>{warehouse.code}</p>
                    <p className='card-text'><span>Space Available:</span>{warehouse.space_available}</p>
                    <p className='card-text'><span>City:</span>{warehouse.city}</p>
                    <p className='card-text'><span>Cluster:</span>{warehouse.cluster}</p>
                  </div>
                </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    warehouses: state.warehouses.warehouses,
  }
}
export default connect(mapStateToProps)(List)
import React from 'react'

function Edit({ warehouse, handleSubmit }) {
  const { name, code, space_available, city, cluster } = warehouse
  const [data, setData] = React.useState({
    ...warehouse,
    name,
    code,
    space_available,
    city,
    cluster
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  }
  return (
    <form onSubmit={(e) => handleSubmit(e, data)} className='col-md-6 col-12 m-auto'>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type='text' className='form-control' id='name' value={data.name} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='code'>Code</label>
        <input type='text' className='form-control' id='code' value={data.code} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='space_available'>Space Available</label>
        <input type='text' className='form-control' id='space_available' value={data.space_available} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='city'>City</label>
        <input type='text' className='form-control' id='city' value={data.city} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='cluster'>Cluster</label>
        <input type='text' className='form-control' id='cluster' value={data.cluster} onChange={handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='is_live'>Live</label>
        {/* <input type='text' className='form-control' id='is_live' value={data.is_live} onChange={handleChange} /> */}
        <select className='form-control' id='is_live' value={data.is_live} onChange={handleChange}>
          <option value='true'>true</option>
          <option value='false'>false</option>
        </select>
      </div>
      <button className='btn btn-primary w-100 mt-3'>Submit</button>
    </form>
  )
}

export default Edit
import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'

const Summary = () => {
  return (
    <div>
        <Container>
        <Title title="Summary"/>
        <div className='p-2 d-flex align-items-center gap-1'>
            <div className='d-flex flex-column'>
                <label className='form-label' htmlFor='search'> Keyword</label>
                <input className='form-control-md p-2' id='keyword' type="text" placeholder='Search...'/>
            </div>
            <div className='d-flex flex-column'>
                <label className='form-label' htmlFor='date'> Date From</label>
                <input className='form-control-md p-2' id='date-from' type="date" />
            </div>
            <div className='d-flex flex-column'>
                <label className='form-label' htmlFor='date'> Date To</label>
                <input className='form-control-md p-2' id='date-to' type="date" />
            </div>
            <button className='btn btn-sm btn-success p-2' id='search'>Find</button>
        </div>
        <table className='table table-responsive table-hover'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Desc</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>test</td>
                    <td className='d-flex gap-2'>
                        <button className='btn btn-sm btn-primary'>Edit</button>
                        <button className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </Container>
        
    </div>
  )
}

export default Summary
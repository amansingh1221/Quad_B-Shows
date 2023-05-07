import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Show from './pages/Show/show'
import ShowList from './pages/ShowList/ShowList'
import Form from './pages/Form/Form'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ShowList />} />
      <Route path='/show/:id' element={<Show />} />
      <Route path='/form/:id' element={<Form />} />
    </Routes>
  )
}

export default AllRoutes
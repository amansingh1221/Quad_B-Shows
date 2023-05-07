import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Show from './pages/Show/show'
import ShowList from './pages/ShowList/ShowList'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ShowList />} />
      <Route path='/show/:id' element={<Show />} />
    </Routes>
  )
}

export default AllRoutes
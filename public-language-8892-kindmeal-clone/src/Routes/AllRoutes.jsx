import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FoodLover from '../Pages/FoodLover'
import HomePage from '../Pages/HomePage'
import KindMoments from '../Pages/KindMoments'
import MealDeal from '../Pages/MealDeal'
import ShopOwner from '../Pages/ShopOwner'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealDeal />} />
        <Route path="/moments" element={<KindMoments />} />
        <Route path="/join" element={<FoodLover />} />
        <Route path="/joinshop" element={<ShopOwner />} />
      </Routes>
    </>
  )
}

export default AllRoutes

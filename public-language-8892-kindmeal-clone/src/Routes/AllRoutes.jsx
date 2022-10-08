import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Articles from '../Pages/Articles'
import Directory from '../Pages/Directory'
import FoodLover from '../Pages/FoodLover'
import Help from '../Pages/Help'
import HomePage from '../Pages/HomePage'
import HotPicks from '../Pages/HotPicks'
import KindMoments from '../Pages/KindMoments'
import MealDeal from '../Pages/MealDeal'
import Recipes from '../Pages/Recipes'
import ShopOwner from '../Pages/ShopOwner'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealDeal />} />
        <Route path="/moments" element={<KindMoments />} />
        <Route path="/picks" element={<HotPicks />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/help" element={<Help />} />
        <Route path="/join" element={<FoodLover />} />
        <Route path="/joinshop" element={<ShopOwner />} />
      </Routes>
    </>
  )
}

export default AllRoutes

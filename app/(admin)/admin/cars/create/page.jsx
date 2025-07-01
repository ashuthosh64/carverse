import React from 'react'
import { AddCarForm } from '../_components/add-car-form';




export const metadata = {
    title: "Add new Car | Carverse Admin",
    description: "Add a new Car to the Marketplace",
      };



const AddCarPage = () => {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Car</h1>
      <AddCarForm/>
    </div>
    
  )
}

export default AddCarPage
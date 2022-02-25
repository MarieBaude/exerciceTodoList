import Axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Cathegory {
  id: number
  name: string
} 

export default function App() {
  const [isloading, setisloading] = useState(true);
  const [categories, setcategories] = useState([]);


  useEffect(() => {
    Axios.get("http://127.0.0.1:8080/categories")
          .then(res => {
            setcategories(res.data)
            setisloading(false)
          }) 
  }, [categories.length]);


  if (isloading) {
    return <h1>Chargement...</h1>
  }




  return (
    <>
      <h1>Todo list</h1>
      
      <form action="">
        <select>
          <option>Select a category</option>
          {categories.map((item:Cathegory) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        <button>Add</button>
        <button>Delete</button>

        <br />
        
        <input type="text" />

        <button>Add</button>
      </form>
    </>
  );
}


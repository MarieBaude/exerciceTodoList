import Axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function App() {
  const [isloading, setisloading] = useState(true);
  const [categories, setcategories] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:8080/categories")
          .then(res => console.log(res.data)) 
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
          <option>Test</option>
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


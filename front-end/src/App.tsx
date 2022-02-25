import Axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface Cathegory {
  id: number
  name: string
} 

interface List {
  id: number
  name: string
  cathegoryId: number
}

export default function App() {
  const [isloading, setisloading] = useState(true);
  const [categories, setcategories] = useState([]);
  const [list, setlist] = useState([]);

  function getListByCategories(e:ChangeEvent<HTMLSelectElement>) {
    e.preventDefault()
    console.log(e.currentTarget.value)
    Axios.get("http://127.0.0.1:8080/" + e.currentTarget.value)
          .then(res => {
            console.log(res.data)
            setisloading(true)
            setlist(res.data)
            setisloading(false)
          })
  }

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
        <select onChange={getListByCategories}>
          <option>Select a category</option>
          {categories.map((item:Cathegory) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button>Add</button>
        <button>Delete</button>

        <br />
        
        <input type="text" />

        <button>Add</button>
      </form>

      <div>
        {list.map((item:List) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </div>
    </>
  );
}


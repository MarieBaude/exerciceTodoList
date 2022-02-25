import Axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

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
  const [selectValue, setSelectValue] = useState('');

  function getListByCategories(e:ChangeEvent<HTMLSelectElement>) {
    e.stopPropagation()
    setSelectValue(e.currentTarget.value)
    // setisloading(true)
    Axios.get("http://127.0.0.1:8080/" + e.currentTarget.value)
          .then(res => {
            setlist(res.data)
          })
    //setisloading(false)
  }

  function createListElement(e:FormEvent<Element>) {
    e.preventDefault()
    e.stopPropagation()
    let form = e.target as Element
    let input = form.childNodes[4] as HTMLInputElement
    console.log(input.value)

    const newListElement = {
      name: input.value,
      cathegoryId: Number(selectValue)
    }
    
    
    Axios.post("http://127.0.0.1:8080/", newListElement)
    .then(res => {
      if (res.data) {    
              getAllCategories()
              console.log(res.data)
            }
          })
  }

  function getAllCategories () {
    setisloading(true)
    Axios.get("http://127.0.0.1:8080/categories")
          .then(res => {
            setcategories(res.data)
            setisloading(false)
          }) 
  }

  useEffect(() => {
    getAllCategories()
  }, [list.length]);


  if (isloading) {
    return <h1>Chargement...</h1>
  }




  return (
    <>
      <h1>Todo list</h1>
      
      <form onSubmit={createListElement}>
        <select onChange={getListByCategories} value={selectValue&&selectValue}>
          {selectValue === '' && (<option>Select a category</option>)}
          {categories.map((item:Cathegory) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <button>Add Category</button>
        <button>Delete</button>

        <br />
        
        <input type="text" />

        <button type='submit'>Add List</button>
      </form>

      <div>
        {list.map((item:List) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </div>
    </>
  );
}


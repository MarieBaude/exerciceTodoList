import Axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

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
  const [categoryId,setCategoryId] = useState("")

  function getListByCategories(e:ChangeEvent<HTMLSelectElement>) {
    e.stopPropagation()
    setSelectValue(e.currentTarget.value)
    setisloading(true)
    setCategoryId(e.currentTarget.value)
    axiosGetlist(e.currentTarget.value) 
  }

  function axiosGetlist(id:string){
    Axios.get("http://127.0.0.1:8080/" + id)
          .then(res => {
            setlist(res.data)
            setisloading(false)
          })
  }

   function getAllCategories () {
    Axios.get("http://127.0.0.1:8080/categories")
          .then((res) => {
            setcategories(res.data)
            setisloading(false)
          }) 
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
              setisloading(true)
              axiosGetlist(categoryId)
            }
          })
  }

  

  useEffect(() => {
    getAllCategories()
  }, [list.length,categories.length]);


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
        {!isloading && list.map((item:List) => (
          <h2 key={item.id}>
            {item.name}
            <AiFillDelete />
          </h2>
        ))}
      </div>
    </>
  );
}


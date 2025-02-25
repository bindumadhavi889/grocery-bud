import { useState } from "react"
import {nanoid} from 'nanoid'
import {toast,ToastContainer} from 'react-toastify'
import Form from "./Form"
import Items from "./Items"
const setLocalStorage = (items) => {
  localStorage.setItem('list',JSON.stringify(items))
}
const defaultList = JSON.parse(localStorage.getItem('list')||'[]')
const App = () => {
  const [items,setItems] = useState(defaultList)
  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed:false,
      id:nanoid()
    }
    const newItems = [...items,newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added')
  }
  const removeItem = (itemId) => {
    const newItems=items.filter((item)=>item.id!==itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item removed')
  }
  const editItem = (itemId) => {
    const newItems = items.map((item)=>{
      if(item.id===itemId){
        const newItem = {...item,completed:!item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  return (
    <section className='section-center'>
      <ToastContainer position='top-center'/>
      <Form addItem={addItem}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>  
  )
}
export default App
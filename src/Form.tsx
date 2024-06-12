import { useState } from "react"
import { toast } from "react-toastify"
const Form = ({addItem}) => {
  const [name,setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      toast.error('please provide a value')
      return
    }
    addItem(name)
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)} className='form-input'/>
        <button className='btn' type='submit'>add item</button>
      </div>
    </form>
  )
}
export default Form
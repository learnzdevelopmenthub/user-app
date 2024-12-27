import './App.css'
import { useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({id: 0, name: "", email: ""})

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    let obj = {...user, id: Date.now()}
    let action = { type: "ADD_USER", payload: obj}
    dispatch(action)
    setUser({...user, name: "", email: ""})
  }

  const handleUpdate = () => {
    let action = { type: "UPDATE_USER", payload: user}
    dispatch(action)
    setUser({id: 0, name: "", email: ""})
  }

  const handleDelete = (id) => {
    let action = { type: "DELETE_USER", payload: id}
    dispatch(action)
  }

  const handleEdit = (id) => {
    let editObj = users.find(item => item.id === id)
    setUser(editObj)
  }

  return (
    <>
      <div>
        <input value={user.name} type="text" onChange={e=> setUser({...user, name: e.target.value})} placeholder='fullname'/>
        <input value={user.email} type="email" onChange={e => setUser({...user, email: e.target.value})} placeholder='email'/>
        { user.id === 0 && <button onClick={handleSubmit}>Create</button> }
        { user.id !== 0 && <button onClick={handleUpdate}>Update</button> }
      </div>

      { users.map( item => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h3>{item.email}</h3>
          <button onClick={()=> handleDelete(item.id)}>Delete</button>
          <button onClick={()=>handleEdit(item.id)}>Edit</button>
        </div>
      ))}
    </>
  )
}

export default App

// admin can create user - name, email
// admin can view all users
// admin can edit a user
// admin can delete a user
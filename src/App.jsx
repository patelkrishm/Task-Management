import { useState,useContext } from 'react'
import './App.css'
import { AppContext } from './Context/Context'


function App() {
  const [count, setCount] = useState(0)
  // const{user,setUser}=useContext(AppContext)
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const [data,setdata]=useState([])

  const handleSubmit=()=>{
    if( !title || !description ){
      alert("please fill all the data")
    }
    else{
      const newData={title,description}
      setdata([...data,newData])
      setTitle("")
      setDescription("")
      console.log(data)
    }
  }

  const deleteData=(index)=>{
    const newData=data.filter((item,i)=>i!==index)
    setdata(newData)
  }
  return (
    <>
      {/* <div>Hello{user}</div>
      <button onClick={()=>setUser("patel")}>click</button> */}
      <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea name="" id="" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button onClick={handleSubmit}>Create</button>

        {data.map((itrem,index)=>(
          <div key={index}>
            <h3>{itrem.title}</h3>
            <p>{itrem.description}</p>   
            <button onClick={()=>deleteData(index)}>Delete</button>      
            </div>
        ))}
      </div>
    </>
  )
}

export default App

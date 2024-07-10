import { useState,useEffect } from "react"

function ADDFUNCTION(){
    const [task,setTask]=useState([])
    const [name,setName]=useState("")
    const [date,setDate]=useState("")
     const[aadhar,setAadhar]=useState("")
     const[phone,setPhone]=useState("")
     const[age,setAge]=useState("")
    

    useEffect(()=>{
      const storeLocalstorage= JSON.parse(localStorage.getItem("task"))
      if(storeLocalstorage){
        setTask(storeLocalstorage)
      }
    },[])

    useEffect(()=>{
       // Store tasks in local storage whenever they change
      localStorage.setItem("task",JSON.stringify(task));
    },[task])


    function DELETEFUN(index){
        const newtask= task.filter((e,id)=> index!=id)
            
        setTask(newtask)
    }
    
     function addtask(){
        // Create a new task object with all the fields
        const newObj={name,date,aadhar,phone,age}
        
        setTask([...task,newObj])
        setName("")
        setAadhar("")
        setDate("")
        setPhone("")
        setAge("")
    }
    
    return(
        <>
        <div style={{border:"2px solid black",padding:"40px",margin:"40px"}}>
        <h1>Add New Person</h1>
        {/* <div style={{display:"flex",gap:"30px"}}>
          <button style={{padding:"10px"}}>Add new person</button>
          <button style={{padding:"10px"}}>Retrieve ino</button>
        </div> */}
        <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
             
            {/* <label name="inputname">name</label> */}
            <input type="text" placeholder='name' name="inputname" value={name} onChange={(e)=>setName(e.target.value)}/>
            
         
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
          <input type="number" placeholder='aadhar number' value={aadhar} min="100000000" max="999999999"  onChange={(e)=>setAadhar(e.target.value)}/>
          
          <input type="number" placeholder='mobail number' value={phone} min="100000000" max="999999999" onChange={(e)=>setPhone(e.target.value)}/>
          <input type="number" placeholder='age'  value={age} onChange={(e)=>setAge(e.target.value)}/>
          <button onClick={addtask} style={{padding:"10px 20px",background:"blue",color:"white"}}>Add</button>
        </div>
       
           {
           task.map((e,index)=>(
            <div style={{border:"2px solid black",display:"flex",gap:"90px",marginTop:"20px",padding:"10px"}} key={index} >
            {/* <li style={{margin:"10px",listStyle:"none"}} key={index}>{e.name},{e.date},{e.aadhar},{e.phone},{e.age}</li> */}
            
            <span>{e.name}</span>
            <span>{e.date}</span>
            <span>{e.aadhar}</span>
            <span>{e.phone}</span>
            <span>{e.age}</span>
            <button onClick={() => DELETEFUN(index)} style={{padding:"10px 20px",background:"blue",color:"white"}}>delete</button>
            </div>
           ))
           }

      </div>
        </>
    )
}

export default ADDFUNCTION
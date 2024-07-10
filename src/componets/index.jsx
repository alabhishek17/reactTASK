
import { useNavigate } from "react-router-dom"

function INDEX() {
    const navigate = useNavigate()
    function handleADDfun() {
        navigate("/addfunction")
    }
  
    function handleretrive(){
        navigate("/retrieve")
    }
    return (
        <>
            <div>
                <div>
                    <center>
                    <h1 style={{background:"blue"}}> Directory App</h1>
                    </center>
                    
                </div>
                <div style={{display:"flex",gap:"30px"}}>
                    <button style={{padding:"10px",background:"blue",color:"white"}} onClick={handleADDfun}>Add new person</button>
                    <button style={{padding:"10px",background:"blue",color:"white"}} onClick={handleretrive}>Retrieve ino</button>
                </div>
            </div>
        </>
    )
}

export default INDEX
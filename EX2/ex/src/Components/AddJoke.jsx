import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

function AddJoke(){
    const [value,setValue]=useState("");
    function addJoke(e){
        e.preventDefault();
        fetch("http://localhost:8080/jokes?joke="+value,{method:"POST"}).then(response=>{
            if(response.ok)
            {
                return response.json();
            }
            }).then(data=>{
                console.log(data);
            })
}
function change(e)
{
    console.log(e.target.value);
    setValue(e.target.value);
}
    return (
        <div className="container">
        <div className="mb-3">
            <h1 className="text-center" for="exampleFormControlTextarea1"  style={{color:"white"}}>Joke</h1> 
            <textarea name="joke" className="form-control" onChange={change} id="exampleFormControlTextarea1"  rows="3"></textarea>
            <a className="btn btn-primary" onClick={addJoke} style={{marginTop:"20px"}} >Add</a>
        </div>
        </div>
    )
    }
    export default AddJoke;
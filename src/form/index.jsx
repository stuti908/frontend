import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [city, setCity] = useState("");

    function PostData() {
        const headers = {
            'Content-Type': 'application/json',
        }
    
        const method = "POST"
    
        const raw = JSON.stringify({
            name: name,
            email: email,
            dob: dob,
            city: city
        })
    
        fetch("http://localhost:1000/post_data", {
            method: method,
            headers: headers,
            body: raw
        })
            .then((data)=>data.json())
            .then((data_res)=>{
                console.log(data_res)
                alert(data_res.acknowledged ? "Successfully Updated" : "Failed To Updated")
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div className="form">
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <input type="text" placeholder="abc@gmail.com" onChange={(e)=>setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>DOB</legend>
                    <input type="date" onChange={(e)=>setDob(e.target.value)} />
                </fieldset>
                <fieldset>
                    <legend>City</legend>
                    <input type="text" placeholder="Srinagar" onChange={(e)=>setCity(e.target.value)} />
                </fieldset>
                <button onClick={()=>PostData()}>Update</button>
                <br />
                <Link className="link" to='/get'>Show Data</Link>
        </div>
    )
}
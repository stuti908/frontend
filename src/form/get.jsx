import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Get() {
    const [data, setData] = useState([]);
    function getData() {
        fetch('http://localhost:1000/get_data')
            .then(d=> d.json())
            .then((dta)=>{
                setData(dta);
                console.log(dta)
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    useEffect(()=>{
        getData()
        console.log(data)
    }, [])
    return (
        <>
            <Link to='/'>Back</Link>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>City</th>
                </tr>
                {
                    
                    data!==null ? data.map((res, i)=>{
                        return (
                            
                                <tr>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.dob}</td>
                                    <td>{res.city}</td>
                                </tr>
                        )
                    })
                    : null
                }
            </table>
        </>
    )
}
import { useEffect, useState } from "react";
import Status from "./Status";
// import { FetchedUser } from "../model/FetchedUser";


// Can use either type or Class FetchedUser as type 
type FetchedUser = {
    id:number,
    first_name:string,
    last_name:string,
    email:string,
    avatar:string
}
function FetchAndBind(){
    let [users, setUsers] = useState<FetchedUser[]>([]);
    useEffect(()=>{
        fetch("https://reqres.in/api/users").then(res=>res.json()).then(resdata=>setUsers(resdata.data))
        
    },[])
    
    return (
        <>
        {users.length==0?<Status value="Loading" />:<Status value="Successful" />}
        <table border={1}>
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avtar</th>
            </tr>
        </thead>
            <tbody>
                {
                    users.map(user=>{
                        return (
                            <>
                                
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td><img src={user.avatar} /></td>
                                        </tr>
                                    
                            </>
                        )
                    })
                }
            </tbody>
        </table>
            <h1>This is FetchAndBind</h1>
        </>
    )
}
export default FetchAndBind;
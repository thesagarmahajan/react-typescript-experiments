import { useEffect, useState } from "react"
import { User } from "../../../model/User";

export default function UsingClassType(){

    let[users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        fetch("https://reqres.in/api/users").then((res:any)=>res.json()).then((resdata:any)=>{
           
            // One way
            // setUsers(resdata.data)

            // Another Way
            let fetchedUsers = resdata.data.map((user:any)=>new User(user))
            setUsers(fetchedUsers)

        })
    }, []);
    return (<>
        <h1>Using Class as Type</h1>
        <ul>
        {
            users.map((user:User)=>{
                return (<>
                    
                        <li>{user.id} | {user.fullName} </li>
                    
                </>)
            })
        }
        </ul>
    </>)
}
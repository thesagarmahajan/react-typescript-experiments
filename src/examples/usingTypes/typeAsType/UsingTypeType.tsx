import { useEffect, useState } from "react"
type User= {
    id:number,
    fname:string,
    lname:string,
    email:string,
    avatar:string
}

const getFullName = (user:User) => `${user.fname} ${user.lname}`

export default function UsingTypeType(){
    let[users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        fetch("https://reqres.in/api/users").then((res:any)=>res.json()).then((resdata:any)=>{
            // One Way (Key names in the fetched object must match with the key names in type)
            // setUsers(resdata.data)
            
            // Another Way
            let fetchedUsers = resdata.data.map((user:any)=>({id:user.id, fname:user.first_name, lname:user.last_name, email:user.email, avatar:user.avatar}))
            setUsers(fetchedUsers)
        })
    }, []);
    return (<>
        <h1>Using Type as Type</h1>
        <ul>
        {
            users.map((user:User)=>{
                return (<>
                    
                        <li>{user.id} | {getFullName(user)} </li>
                    
                </>)
            })
        }
        </ul>
    </>)
}
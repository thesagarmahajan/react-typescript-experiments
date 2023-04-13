type simpleUserType = {
    id:number,
    name:String,
    isActive:boolean
}

type complexUserType = {
    id:number,
    name:{
        first:string,
        last:string
    },
    phone:string[],
    address:{
        home:string,
        work:string[]
    }
}

function ComplexUserTypeComponent(props:complexUserType){
   return (
    <>
        {/* For complexUserType */}
        {`${props.id} | ${props.name.first} ${props.name.last} `}
        <h3>Phone Numbers: </h3>
        {
            props.phone.map(value=>{
                return (
                    <>
                        <ul>
                            <li>{value}</li>
                        </ul>
                    </>
                )
            })
        }
        <h3>Home Address: {
            props.address.home
        } </h3>

        <h3>Office Address: </h3>
        {
            props.address.work.map(value=>{
                return (<>
                    <ul>
                        <li>{value}</li>
                    </ul>
                </>)
            })
        }
    </>
   ) 
}


// Try with props:any & props:simpleUserType & props:simpleUserType
function SimpleUserTypeComponent(props:simpleUserType){
    return (<>
        
            {/* For simpleUserType */}
            {`${props.id} | ${props.name} | ${props.isActive}`}
        
    </>)
}

export default function PropsDemo(){
    return (<>
        <h1>Simple User Type Component</h1>
        {/* For simpleUserType */}
        <SimpleUserTypeComponent id={1} name="Sample User" isActive={true}/>
        

        <h1>Complex User Type Component</h1>
        {/* For complexUserType */}
        <ComplexUserTypeComponent id={1} name={{
            first: "User",
            last: "One"
        }} phone={["1231231232", "1010101010"]} address={{
            home: "Navi Mumbai",
            work: ["Bengaluru", "Hyderabad"]
        }}  />
    </>)
}
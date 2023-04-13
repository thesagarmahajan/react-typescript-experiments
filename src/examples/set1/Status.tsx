type statusType = {
    value: "Loading" | "Successful"
}
export default function Status(props:statusType){
    return (<>
        <h1>Status {props.value}</h1>
    </>)
}
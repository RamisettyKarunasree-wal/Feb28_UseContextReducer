import { useContext } from "react"
import CreateContext from "./CreateContext"

const ShowCount=()=>{
    const countValue=useContext(CreateContext);
    return(
        <div><b>Count=</b>{countValue.state.count}</div>
    )
}
export default ShowCount;
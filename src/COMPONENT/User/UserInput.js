import React, {useState,useRef} from "react"

const UserInput = (props)=>{
    const nameInputRef = useRef();
    const [username,setusername] = useState('')
    let Inputname;
    
    // const nameInputHandler = ()=>{
    //     Inputname = nameInputRef.current.value
    //     // setusername(Inputname)
    //     // console.log (Inputname)

    // }
   const  submitHandler = (event)=>{
    event.preventDefault();
    Inputname = nameInputRef.current.value
    setusername(Inputname)
    console.log (username)
   }
    
    
    
    return(
        <form onSubmit={submitHandler}>
            
            <div>
                <label>Name</label>
                <input  ref ={nameInputRef}/>
            </div>

            <div>
                <label>Age</label>
                <input/>
            </div>

            <p>My name is {username}</p>

            <button type="submit">Sumbit</button>
    
        </form>
    )
}
export default UserInput
import axios from 'axios';//used to make api calls

import { useEffect,useState } from 'react';

const FullStack=()=>{
    const [msg,setMsg]=useState("");
    const get_sb_data= async()=>{
        const {data} =await axios.get("http://localhost:9000/mru");
        setMsg(data);

    }
    useEffect(()=>{
        get_sb_data();
    },[]);
    return(
        <>
            <h1 style={{color:"green"}}>{msg}</h1>
        </>
    )


}
export default FullStack;
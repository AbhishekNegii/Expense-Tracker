import React, { useRef } from "react";





const VerifyEmail = () => {

    let mail=useRef();

    const verifyMailHandler=()=>{
        let email=mail.current.value;
        console.log(email)
    }

    
  // 
  return (
    <div>
      <label>Email</label>
      <input type="text" ref={mail}/>
      <button onClick={verifyMailHandler}>veriy Email</button>
    </div>
  );
};

export default VerifyEmail;

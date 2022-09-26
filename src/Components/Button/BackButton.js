import React from 'react'
import { useHistory } from 'react-router-dom'

const BackButton = () => {
   const history= useHistory()
  return (
    <div class="navigation">
         <button onClick={()=>{history.replace('/expense') }}>Back</button>
        
    </div>
  )
}

export default BackButton
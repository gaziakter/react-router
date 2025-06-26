import React, { useState } from 'react'

const ConditionalStyle = () => {

    const [isSpecial, setIsSpecial] useState(false);

    const toggleButton = () => {
        setIsSpecial(!isSpecial);
    }


  return (
    <div>
        <button onClick={toggleButton}>Change Name</button>
        <p>{isSpecial ? 'Gazi Akter' : 'Adil Faiyaz'}</p>
    </div>
  )
}

export default ConditionalStyle
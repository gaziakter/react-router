import React from 'react'

const About = () => {

     const [isSpecial, setIsSpecial]= React.useState(false);

    const toggleButton = () => {
        setIsSpecial(!isSpecial);
    }
  return (
    <div>
    <div>
        <button onClick={toggleButton}>Change Name</button>
        <p>{isSpecial ? 'Gazi Akter' : 'Adil Faiyaz'}</p>
    </div>
    </div>
  )
}

export default About
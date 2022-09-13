import React, {usestate} from 'react'

function ADDitems() {
    const [thingArray, setthingArray] = usestate(["thing 1", "things 2"])
     function adD() {
        setthingArray(prevThingsArray => {
            return [...prevThingsArray,  `thing ${thingArray.length +1 }`]
        })
     }
  return (
    <div>
                <button onClick={adD}></button>
    </div>
  )
}

export default ADDitems
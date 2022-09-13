import './App.css';
import ADDitems from './ADDitems';

// import Tarvel from './components/Tarvel';
// import TravelData from './components/TravelData';
// import Journal from './components/Journal';
// import Contact from './Contact';
// import Learning from './components/Learning';

 
function App() {
  //  let display = TravelData.map(data => {
  //   return <Tarvel 
  //   coverImg    = {data.coverImg}
  //     location =  {data.location}
  //     title =     {data.title}
  //     startDate = {data.startDate}
  //     endDate =   {data.endDate}
  //   description =  {data.description}

  //         />
  //  })

  //  const [thingArray, setthingArray] = usestate ("Thing1", "Thing 2")
  // //  function addItems () {
  // //   const itemsUpdate = `thing ${thingArray.length +1 }`
  // //   thingArray.push(itemsUpdate)
  // //   console.log(itemsUpdate)
  // //  }
  // function ADDitems () {
  //   setthingArray(() => {
  //     const itemsUpdate = `thing ${thingArray.length +1 }`
  //   thingArray.push(itemsUpdate)
  
  //   })
  // }
   

  return (
    <div className="App">
        <div> 
         <ADDitems />
          
        {/* <button onClick={ADDitems}></button> */}
          {/* <Contact />
          <Journal />
         {display} */}
            {/* <Learning /> */}
        </div>
    </div>
  );
}

export default App;

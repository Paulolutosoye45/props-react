import './App.css';
import Tarvel from './components/Tarvel';
import TravelData from './components/TravelData';
import Journal from './components/Journal';

function App() {
   let display = TravelData.map(data => {
    return <Tarvel 
    coverImg    = {data.coverImg}
      location =  {data.location}
      title =     {data.title}
      startDate = {data.startDate}
      endDate =   {data.endDate}
    description =  {data.description}

          />
   })

  return (
    <div className="App">
        <div>
          <Journal />
         {display}
        </div>
    </div>
  );
}

export default App;

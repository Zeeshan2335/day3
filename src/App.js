import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Provider } from "react-redux";
import { configStore } from './App-State/store/configStore';
import { CounterInClacc } from './ClassComponent/CounterWithChild/CounterInClass';
import { Appi } from './Component/Data  from API/Api';
import { ApiPractice } from './Component/Data  from API/ApiPractice';
import { DataLIst } from './Component/Data  from API/DataList';
import { BikePerent } from './Component/bikeMapping/BikePerent';
import ConditionalRendring from './Component/conditionalRender/ConditionalRendring';
import { Counter } from './Component/conter/Counter';
import { Countrt } from './Component/counter2/CounterPractice';
import { Filter } from './Component/Filter/Filter';
import { Cars } from './Component/SearchWithFilter/Cars';
import { NavBar } from './Navigation/NavBar';
import StateWithMap from './Component/useState/StateWithMap';
import { UseState } from './Component/useState/UseState';
import MapingParent from './Component/MapingParent';
import CheckRedux from './Component/CheckRedux';
import ReduxPractice from './Component/redux/ReduxPractice';

function App() {
  const localStore= configStore()
  return (

    <div className="App">
      <Provider store={localStore}>
   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route path="/" element={<Cars/>}/>
     <Route path="/data" element={<UseState/>}/>
     <Route path="/prac" element={<ReduxPractice/>}/>
     <Route path="/redux" element={<CheckRedux/>}/>
     <Route path="/filter" element={<Filter/>}/>
     <Route path="/counter" element={<Counter/>}/>
     <Route path="/counter2" element={<Countrt/>}/>
     <Route path="/bike" element={<BikePerent/>}/>
     <Route path="/api" element={<ApiPractice/>}/>
     <Route path="/api2" element={<Appi/>}/>
     <Route path="/mapping"element={<MapingParent/>}/>
     <Route path="/StateWithMap" element={<StateWithMap/>} />
     <Route path="/ConditionalRendring" element={<ConditionalRendring/>}  />
     <Route path="/DataLIst" element={<DataLIst/>}  />
   </Routes>
   </BrowserRouter>
   </Provider>
    </div>
  );
}

export default App;

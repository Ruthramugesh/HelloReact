import React from 'react';
import './App.css';
import {MyForm} from './form';
import Component1 from './component1';
import Component2 from './component2';
import FormTable from './formtable';
import FormRef from './formref';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Page from './page';
//import StoreData, { studentdetail } from './types';



/*const car: carbrands[] = [
  {
    carName: {
      brand: "Ford",
      design: {
        backgroundColor: "blue"
      },
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Ford/Figo/7594/1627023729889/front-left-side-47.jpg",
      version: "Ford Figo Titanium Blu 1.2 Ti-VCT",
      price: "7.27 Lakh",
      mileage: "18.5 kmpl",
      model: "Car Models"
    //  Gear: "Automatic"
    },
    header: "Car 1"
  },
  {
    carName: {
      brand: "Toyota",
      design: {
        backgroundColor: "red",
        color: "yellow"
      },
      image: "https://imgcdn.oto.com.sg/large/gallery/exterior/1/17/toyota-c-hr-front-angle-low-view-122533.jpg",
      version: "Toyota C-HR",
      price: "12.25 Lakh",
      mileage: "20.7 kmpl"
   //   Gear: "Manual"
    },
    header: "Car 2"
  }

]

// const Leader1 = {
//   name: 'A.P.J abdulkalam',
//   theme: {
//     backgroundColor: 'red',
//     color: 'green'
//   },
//   image:"https://mir-s3-cdn-cf.behance.net/projects/404/d5fee3136329001.Y3JvcCwxMTIwLDg3NiwwLDMyMQ.jpg"
// };

// const Leader2 ={
//   name: 'Dr. Ambedkar',
//   theme:{
//     backgroundColor:'yellow',
//     color:'cyan'
//   },
//   image:"https://www.purecss.in/wp-content/uploads/2022/04/Bhim-Jaynti-223x300.jpg"
// }

/*const Leader3 = {
  name: 'Chola',
  design: {
    backgroundColor: 'black',
  },
  images:"https://miro.medium.com/v2/resize:fit:474/1*IIA8o_HIBwYXV10LArGQ6g.jpeg"
}*/

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<FormRef/>}/>
      <Route path='/about' element={<MyForm/>}/>
      <Route path='/form' element={<MyForm/>}/>
      <Route path='/feature' element={<Component2/>}/>
      <Route path='/features' element={<Page/>}/>
      </Routes>
     </BrowserRouter>
    
        
        { /* <MyForm></MyForm>
   <FormTable text = "Student Data"></FormTable>
   <Component1 value="Test Component 1"></Component1>
    <Component2 header="Header Component"></Component2>*/}
   
      
    </div>
  )
}

/* car.map((vehicle: carbrands) => {
   return (
     <TodoList carName={vehicle.carName} header={vehicle.header} />
   )
 })*/


/* <TodoList leader={Leader2} header="Leader 2"  /> 
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
</div>
);
*/

export default App;

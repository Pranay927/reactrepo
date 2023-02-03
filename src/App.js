
import{ Routes, Route } from 'react-router-dom'
import Index from './components/Index'
import Grants from './components/Grants'
import Upload from './components/Upload';
import D from './components/D'

//  import Greetings from './components/Greetings';
//  import AboutUs from './components/AboutUs';
function App() {
  return (
    // <div className="App">
    //   {/* <Greetings/> */}
    //   <AboutUs/>
    // </div>
    <Routes>
      <Route path='/' element={<Index/>}></Route>
      <Route path='/grants' element={<Grants/>}></Route>
      <Route path='/upload' element={<Upload/>}></Route>
      <Route path='/download' element={<D/>}></Route>
    </Routes>

     

  );
}
// const Greetings = () => <h1>Hello Students!</h1>    concize ;

export default App;

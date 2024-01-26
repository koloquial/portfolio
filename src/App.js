import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from './views/Splash';
import Projects from './views/Projects';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Splash />} />
        <Route exact path='/projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
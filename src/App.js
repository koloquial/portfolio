import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from './views/Splash';
import Projects from './views/Projects';
import CV from './views/CV'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Splash />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/cv' element={<CV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
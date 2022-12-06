import { useEffect } from 'react';
import './App.css'
import StandartApi from './components/StandartApi';
import ReactVK from './components/ReactVK';

function App() {
  return (
    <div className="App">
      <ReactVK />
      <StandartApi />
    </div>
  )
}

export default App

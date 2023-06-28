import './App.css'
import Card from './components/Card'
import { data } from './data';

function App() {

  return (
    <div className="cards">
      <Card card={data[0]}/>
      <Card card={data[1]}/>
    </div>
  )
}

export default App

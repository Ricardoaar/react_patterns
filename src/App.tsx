import {useState} from 'react'
import reactLogo from './assets/react.svg'
import Router from "./routes/Routes";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Router/>
        </div>
    )
}

export default App

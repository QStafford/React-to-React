import React, { useState } from "react"
import ReactDOM from 'react-dom'
import Greeter from "./components/Greeter"


const App = () => {

    const [username, setUsername] = useState("")
    const [loaded, setLoaded] = useState(false)
    const userNameContainer = e => {
        setUsername(e.target.value)
    }
    useEffect(() => {
            setTimeout(() => {
            setLoaded(true)
            }, 3000);
            }, [loaded]);
    
    if (loaded) {
        return (
            <div>
                <h1>Pickles</h1>
                <Greeter phrase='Hello there' name='Quincy' />
                <Greeter phrase='Get Gud' name='Paul' />
                <Greeter phrase="There's a Spooky" name='John RUUUUNNNNN' />
                <input type="text" value={username} onChange={userNameContainer} />
                <p>You are logging in as: {username}  </p>
            </div>
        )
    } else {
        return <>
            <h1>Website loading......</h1>;
            <button onClick={setLoaded}>Click MEE!!!</button>
        </>
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App;

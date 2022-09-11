import logo from './logo.svg';
import './App.css';
import {all} from "./db";
import {Temp} from "./Temp";


function App() {


    const getNames = all.map((i, ind) =>
        <li key={ind}>
            {i.name}
        </li>
    )


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <b>
                </b>
                <a
                    className="App-link"
                    href="https://hightechinfo.co.il/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    רשימת חברות כל ההייטק בישראל
                </a>
                <a  href="https://liavnave.com/api/system/getCompanies"
                    target="_blank"
                    rel="noopener noreferrer">
                    api
                </a>

                <button onClick={()=><Temp/>}>go to html</button>

            </header>

            <>
                <ul>
                    {getNames}
                </ul>
            </>

        </div>
    );
}

export default App;

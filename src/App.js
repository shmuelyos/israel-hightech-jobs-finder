import logo from './logo.svg';
import './App.css';
import {all} from "./db";
import React from "react";
// import {filterByEnglishLetters} from "./Functions/extra";

// import {getCompanyUrl, scrapeCompanyUrls} from "./Functions/getURLS";

let englishRegex = /^[A-Za-z\s]+$/;

function App() {
    // const companies = filterByEnglishLetters(all.map(company => company.name_en))
    // console.log("\n\n ~~~~~~~~~~~~~~~~~~~~~ companies ~~~~~~~~~~~~~~~~~~~~~ :", JSON.stringify(companies, null, 4))

    async function handleClick(e) {
        e.preventDefault()
        await fetch('http://localhost:3009', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: `https://www.${e.target.value}.com/`})
        })
        // await fetch('http://localhost:3009/')
        // getCompanyUrl(e.target.value).then(setUrl)
    }

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
                <a href="https://liavnave.com/api/system/getCompanies"
                   target="_blank"
                   rel="noopener noreferrer">
                    api
                </a>


                {/*<button onClick={()=><Temp/>}>go to html</button>*/}


            </header>

            <ol>
                {

                    all.map(({id, name_en}) =>
                        (englishRegex.test(name_en)) &&
                        <li key={id}>
                            {name_en}
                            <button onClick={handleClick} value={name_en}>
                                click
                            </button>
                        </li>)
                }
            </ol>

            {/*<>*/}
            {/*    <ol>*/}
            {/*        {*/}
            {/*            companies.map((i, index) =>*/}
            {/*                <li key={index}>*/}
            {/*                    {i}*/}
            {/*                    <button onClick={handleClick} value={i}>*/}
            {/*                        click*/}
            {/*                    </button>*/}
            {/*                </li>)*/}
            {/*        }*/}
            {/*    </ol>*/}
            {/*</>*/}

        </div>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {all} from "./db";
import React, {useEffect, useState} from "react";
import {filterByEnglishLetters} from "./Functions/extra";
// import {getCompanyUrl, scrapeCompanyUrls} from "./Functions/getURLS";



function App() {
    const companies = filterByEnglishLetters(all.map(company =>company.name_en))
    console.log(JSON.stringify(companies,null,0))

    const [url, setUrl] = useState()
    // const [renderingCompanies, setRenderingCompanies] = useState()
    //
    //
    // useEffect(() => {
    //     setRenderingCompanies(() =>
    //         <ol>
    //             {
    //                 all.map(i =>
    //                     <li key={i.id}>
    //                         {i.name_en}
    //                     </li>)
    //             }
    //         </ol>)
    //
    // }, [])


    function handleClick(e) {
        e.preventDefault()
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

            <>
                <ol>
                    {
                        companies.map((i,index) =>
                            <li key={i.index}>
                                {i}

                                {/*<button onClick={handleClick} value={i.name_en}>*/}
                                {/*    {i.name_en}*/}
                                {/*    {url}*/}
                                {/*</button>*/}
                            </li>)
                    }
                </ol>
            </>

        </div>
    );
}

export default App;

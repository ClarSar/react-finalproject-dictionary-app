import React, {useState} from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary (props) {
let [keyword, setKeyword]=useState(props.defaultKeyword);
let [results, setResults]=useState (null);
let [loaded, setLoaded]=useState(false);
let [photos, setPhotos]=useState(null);

function handleDictionaryResponse(response){
setResults(response.data[0]);
 }

function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

function search() {
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse)

let pexelsApiKey="563492ad6f91700001000001d5cfc052153947a7ae666450d5720887";
let pexelsApiURL=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers={Authorization: `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiURL, {headers:headers}).then(handlePexelsResponse);
}

    function handleSubmit(event){
        event.preventDefault();
        search();     
    }

    function handleKeywordChange(event){
    setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

if(loaded){
    return (
    <div className="Dictionary"> 
    <section>
    <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
    </form>
    <div className="hint">
        Knowledge is power, what do you want to know? 
    </div>
    </section>
    <Results results={results}/>
    <Photos photos={photos}/>
    </div>
    );
} else {
    load();
    return "Loading";
}
}
    
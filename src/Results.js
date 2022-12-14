import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results (props){
    if(props.results) {
        return (
        <section className="Results">
            <h2>{props.results.word}</h2>

           {props.results.phonetics.filter((phonetic) => phonetic.audio !== "").map(function (phonetic, index) {
            
            return(
                <div key={index}>
                    <Phonetic phonetic={phonetic}/>
                    </div>
            );
           })}
            {props.results.meanings.map(function
            (meaning, index) {
                 return  (
                    <div key={index}>
                    <Meaning meaning={meaning}/>
                    </div>
                 );
            })}
                 </section>
                );
        }
            else {
return null;
            }
        }

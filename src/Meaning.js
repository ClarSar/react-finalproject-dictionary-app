import React from "react";

export default function Meaning (props){
console.log(props.meanings);

return  (
<div className="Meaning">
<h3>{props.meanings.partOfSpeech}</h3>
<p> {props.meanings.defintions[0].definition}</p>
<p> {props.meanings.defintions[0].example}</p>
</div>
);
}
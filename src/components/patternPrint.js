import React, { useState } from "react";
import SpacePyramid from "./spacePyramid";
import './patternPrint.css';
function PatternPrint(){
    const [rows, setRows]=useState();
    const changePattern=(evt)=>{
        const inputValue= evt.target.value;
        setRows(isNaN(inputValue) ? 0 : inputValue);
    }
    return(
        <div>
            <div>
                <label>Number of Rows</label>
                <input type="text" value={rows} onChange={changePattern}/>
            </div>
            <div className="pattern">
                <SpacePyramid  rows={rows}/>
            </div> 
        </div>
    );
}
export default PatternPrint;
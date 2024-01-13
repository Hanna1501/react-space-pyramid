import React from "react";
import './spacePyramid.css';
function SpacePyramid(props){
    const{
        rows
    }=props;
    const renderPattern=()=>{
        const pyramid=[];
        for(let i=rows; i>0; i--){
            const row=[];
            for(let j=1; j<2*rows;j++){
                let c=(j>rows)?2*rows-j:j;
                if(c<=i){
                    row.push(<span key={`space-${c}`}>*</span>);
                }
                else{
                    row.push(<span key={`space-${c}`} className="space"></span>);
                }
            }
            // for(let j=1;j<=i;j++){
            //     row.push('*');
            // }
            // for(let k=1; k<2*(rows-i)-1; k++){
            //     row.push(<span>&nbsp;</span>);
            // }
            // if(i!==rows){
            //     for(let l=1;l<=i;l++){
            //         row.push('*');
            //     }
            // }
            // else{
            //     for(let l=1;l<rows;l++){
            //         row.push('*');
            //     }
            // }
            
            pyramid.push(row);
        }
        return(
            pyramid.map((row,rowIndex)=>(
                <div key={rowIndex}>{row}
                </div>   
            ))
        );
    };
    return(
        <div>{renderPattern()}</div>
    );
}

export default SpacePyramid;
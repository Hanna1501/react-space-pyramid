import React from "react";
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
                    row.push('*');
                }
                else{
                    row.push(<span>&nbsp;</span>);
                }
            }
            // for(let j=i;j<=rows;j++){
            //     row.push('*');
            // }
            // for(let k=1; k<(2*i-1); k++){
            //     row.push(<span>&nbsp;</span>);
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
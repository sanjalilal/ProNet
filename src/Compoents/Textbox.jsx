import React, { useState }  from 'react'

export default function Textbox() {
    const [inputValue, setInputValue] = useState("");
    const onChangeHandler = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        var inputNodes = cleanInputData(inputValue);
        console.log(inputNodes);
        for(let i=0;i<inputNodes.length;i++){
            let [src,dest] = inputNodes[i].split(' ');
            console.log(`src : ${src}`);
            console.log( `dest : ${dest}`);
        }
    }

    function cleanInputData(input){
        input = input.trim();
        var inputNodes = input.split("\n");
        var allNodes = [];
        for(let i=0;i<inputNodes.length;i++){
            var data = inputNodes[i].replace(/  +/g, ' ');
            allNodes.push(data);
        } 
        return allNodes;
    }

    return (
        <>
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Input Data</span>
                </label>
                <textarea className="textarea textarea-accent" placeholder="Enter a list of identifiers" onChange={onChangeHandler} value={inputValue}></textarea>
            </div>
        </div>

        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text"><strong>OR</strong> Upload your own file</span>
            </label>
            <input type="file"/>
            <button className="btn btn-sm" onClick={handleSubmit}>Submit</button>    
        </div>
        </div>
        </>
    )
}


// var data = {
//     nodes: [
//       { id: "A", user: "Shashank", color: "red" },
//       { id: "B", user: "Sanjali", color: "skyblue" },
//       { id: "C", user: "Tanisha", color: "yellow" }
//     ],
//     links: [
//       { source: "B", target: "C", value: 8 },
//       { source: "B", target: "A", value: 6 },
//       { source: "C", target: "A", value: 10 },
//       { source: "C", target: "B", value: 8, curvature: -0.3 },
//       { source: "A", target: "B", value: 6, curvature: 0.3 },
//       { source: "A", target: "A", value: 10, curvature: 0}
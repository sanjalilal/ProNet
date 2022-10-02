import React, { useState } from 'react'

export default function InputBox() {
    // Checkbox
    const centralityAlgo = ['DC','BC','CC','EC','IC'] 

    const handleChange = (e) => {
        const checkedID = e.target.id;
        console.log(checkedID);
    }

    // Textbox
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

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          console.log(text)
          alert(text)
        };
        reader.readAsText(e.target.files[0])
      }

    return (
        <>
        {/* input box */}
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">JobID</span>
                </label>
                <input type="text" placeholder="please input your jobID" className="input input-accent w-full max-w-xs"/>
            </div>
        </div>

         {/* checkbox */}
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">        
            <div className="form-control flex flex-row">
                {centralityAlgo.map((item)=>(
                    <div className="flex flex-row"> 
                    <label className="label cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-xs" id={item} onChange={handleChange}/>
                    <span className="label-text">{item}</span> 
                    </label>
                    </div>
                ))}   
            </div>
        </div>

        {/* textbox */}
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
            <input type="file" onChange={(e) => showFile(e)} />
            <button className="btn btn-sm" onClick={handleSubmit}>Submit</button>    
        </div>
        </div>

        {/* Notice */}
        <div className="px-20">
        <div className="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700" role="alert">
            <span>
                NOTICE: Enter or upload a list of identifiers which is a tab-delimited string for each row, for example:
                <div className="pl-10">
                    P35202 &nbsp; P14164
                    <br/>
                    P35202 &nbsp; Q04174
                </div>
                Or you can choose a PPI network based on the organism name which you must select firstly in the right column!
            </span>
            </div>
        </div>
        </>
      )
}

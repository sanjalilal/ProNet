import React from 'react'

export default function Checkbox() {
    const centralityAlgo = ['DC','BC','CC','EC','IC']
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        
        <div class="form-control">
            {centralityAlgo.map((item)=>(
                 <label class="label cursor-pointer">
                 <input type="checkbox" class="checkbox checkbox-xs"/>
                <span class="label-text">{item}</span> 
                </label>
            ))}   
        </div>
        </div>
    )
}

//createContext
//useContext
//parentCallBack
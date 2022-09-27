import React from 'react'

export default function Notice() {
    return (
        <div className="px-20">
        <div class="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700" role="alert">
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
    )
}


import React, { useState } from 'react'

export default function AnotherAbout() {
    const [CssDef, setCssDef] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnText, setbtnText] = useState("Enable Dark mode");

    const myStyle = () => {
        // console.log("Just click")
        if (CssDef.color === 'black') {
            setCssDef({
                color: 'white',
                backgroundColor: 'black',
                border: '10px solid white'
            })
            setbtnText("Enable light mode")
        } else {
            setCssDef({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText("Enable Dark mode")
        }
    }
    return (
        <div className='container my-5' style={CssDef}>
            <h1 >Lorem all word</h1>
            < p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <hr></hr>
            <button type="button" onClick={myStyle} className="btn btn-primary">{btnText}</button>
        </div>
    )
}

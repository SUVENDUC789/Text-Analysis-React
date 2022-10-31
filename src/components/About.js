import React from 'react'

export default function About(props) {



    return (
        <div className="container my-5" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} >
            <h1 className="my-3" >About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            about web dev #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <div className="accordion-body">
                        Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About react #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <div className="accordion-body">
                        The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            about codder #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <div className="accordion-body">
                        Computer programmers write and test code that allows computer applications and programs to function. They may translate designs from software developers and engineers into workable code. They may also update or expand the code of existing programs or test programs for errors, finding and resolving faulty lines of code.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button> */}
        </div>
    )
}

import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const convertUppercase = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const convertLowerCase = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const clearText = () => {
    setText('')
  }
  const WordCount = () => {

    let a = text;
    a = a.replace(/\s{2,}/g, ' ').trim();
    if (a === "") {
      return 0;
    } else {
      return a.split(' ').length;
    }
  }

  const CapitalizeText = () => {
    let a = text;
    let arr = a.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText)
  }

  const RemoveExtraSpace = () => {
    let a = text;
    let newtext = a.replace(/\s{2,}/g, ' ').trim();
    setText(newtext)
  }

  const PreviewText = () => {
    let a = text;
    if (a === "") {
      return "Enter something in the textbox to preview it here.";
    }
    else {
      return a;
    }

  }

  return (
    <>
      <div className="container my-3" >
        <label htmlFor="form-label"><h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}} >{props.heading}</h1></label>
        <div className="form-floating my-2">
          <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="form-label" style={{ height: "273px", backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>

      </div>
      <div className="container my-3" >
        <h1 className="text-center alert alert-danger">Text summary</h1>
        <table className="table" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <thead>
            <tr>
              <th scope="col">Word</th>
              <th scope="col">Character</th>
              <th scope="col">About to be reads in  minutes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{WordCount()}</td>
              <td>{text.length}</td>
              <td>{0.008 * WordCount()}</td>
            </tr>
          </tbody>
        </table>

        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

          <div className="text-center alert alert-info"><h1>Text Preview</h1></div>
          <div className="jumbotron">
            <pre className="lead">{PreviewText()}</pre>
            <hr className="my-4" />
          </div>

        </div>
        <table className="table" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30, 50, 50)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <thead>
            {/* <tr>
              <th scope="col">Word</th>
              <th scope="col">Character</th>
              <th scope="col">About to be reads in  minutes</th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td><button type="button" onClick={convertUppercase} className="btn btn-info mx-2">Convert to uppercase</button></td>
              <td><button type="button" onClick={convertLowerCase} className="btn btn-danger mx-2">Convert to lowercase</button></td>
              <td><button type="button" onClick={clearText} className="btn btn-secondary mx-2"> Clear text</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={CapitalizeText} className="btn btn-success mx-2"> Capitalize text </button></td>
              <td><button type="button" onClick={RemoveExtraSpace} className="btn btn-outline-primary mx-2"> Remove extra spaces </button></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
    </>
  )
}


// Set proptypes 
TextForm.propTypes = {
  heading: PropTypes.string,
}

// set default proptypes 
TextForm.defaultProps = {
  heading: 'Set heading here',
}
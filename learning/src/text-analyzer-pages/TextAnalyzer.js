import React, { useState } from "react";
import Alert from "../text-analyzer-components/Alert";

function TextAnalyzer({ modeText }) {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });
    //the type will select the color
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
//This handleChange method is catching all the values sent to the textarea by updating the value to event.target.value now this event is fired when user types

  const toUppercase = () => {
    let newText = text.toUpperCase(text);
    setText(newText);
    showAlert("success", "Converted to Upper case");
  };

  const toLowercase = () => {
    let newText = text.toLowerCase(text);
    setText(newText);
    showAlert("success", "Converted to Lower case");
  };

  const copyText = (copy) => {
    navigator.clipboard.writeText(copy);
    // showAlert("success" , "Copied to clipboard")
  };

  const clearText = () => {
    setText("");
    showAlert("success", "Text Cleared");
  };

  const countWords = () => {
    return text.trim().length ? text.trim().split(" ").length : 0;
    //other method is text.split(" ").filter((element)=>{return element.length!=0}).length
    //This basically takes the text splits it by " " and makes an array from which the filter checks every element
    //if the length is non zero it passes true and the elements length is added to the number
  };   

  return (
    <>
      <Alert alert={alert} />
      

      <h2 className={`mt-2 text-center text-${modeText}`}>
        Enter the text to analyze below
      </h2>
      <div className="mt-4 col-8 m-auto">
        <textarea
          className="form-control"
          onChange={handleChange}
          value={text}
          id="floatingTextarea"
          style={{ height: "200px" }}
        />
      </div>

      <div className="text-center m-3">
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-secondary   m-2`}
          onClick={toUppercase}
        >
          To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-secondary m-2`}
          onClick={toLowercase}
        >
          To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-secondary m-2`}
          onClick={copyText(text)}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className={`btn btn-secondary m-2`}
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>

      <div className={`text-center m-3 text-${modeText}`}>
        <h3>Your Text Summary</h3>
        <p>
          {countWords()} words {text.length} characters
        </p>
      </div>
    </>
  );
}

export default TextAnalyzer;

import { Link } from "react-router-dom";
import React, {useState} from "react";
import "./index.css"
function NewSecret() {
  const [text, setText] = useState("");
  const [days, setDays] = useState("1");
  const [secret, setSecret] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  const handleSecretChange = (event) => {
    setSecret(event.target.value);
  };

  const handleLockMessage = () => {
    localStorage.setItem("text", text);
    localStorage.setItem("days", days);
    localStorage.setItem("secret", secret);
  };
    return (
        <div className="newPage">
          <div className="newBlock">
             <p className="newTitle">Lock it up</p>
              <hr />
               <p className="newOneText">how it works?  F.A.Q</p>
               <p className="newTwoText">Create a new Secret</p>
               <textarea className="newWriteText" placeholder="Start type your secret..." onChange={handleTextChange}></textarea> 

              <div className="newSelectBlock">
                <p className="newThreeText">How long needs to keep your secret?</p>
                <select className="newSeclect" onChange={handleDaysChange}>
                  <option value="1">1 day</option>
                  <option value="2">2 day</option>
                </select>
              </div>

            <div className="newUnlockBlock">
              <p className="newFourTitle">Phrase to unlock your secret</p>
              <input className="newInput" type="text" placeholder="Enter the Pharse" onChange={handleSecretChange} />
            </div>
               <Link to={'/lock'}> <button className="newBtn" onClick={handleLockMessage}> <span>Lock message</span></button> </Link>   
            </div>       
         </div>  
    )
}

export default NewSecret;
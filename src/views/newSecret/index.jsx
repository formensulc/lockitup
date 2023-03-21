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
        <div className="homepage">
          <div className="word">
             <p className="oneTitle">Lock it up</p>
          </div>
              <hr />
              <p className="question">how it works?  F.A.Q</p>
              <p className="createSecret">Create a new Secret</p>
              <textarea className="writeText" cols="30" rows="10" onChange={handleTextChange}></textarea>  
           <div className="numberDay">
              <p className="longSecret">How long needs to keep your secret?</p>
                <select className="select" onChange={handleDaysChange}>
                  <option value="1">1 day</option>
                  <option value="2">2 day</option>
                </select>
            </div>
            <div className="unlockSecret">
              <p>Phrase to unlock your secret</p>
              <input className="input" type="text" placeholder="Enter the Pharse" onChange={handleSecretChange} />
            </div>
              <Link to={'/lock'}> <button className="oneBtn" onClick={handleLockMessage}> <span>Lock message</span></button> </Link>         
         </div>  
    )
}

export default NewSecret;
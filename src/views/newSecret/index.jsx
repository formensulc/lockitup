import { Link } from "react-router-dom";
import "./index.css"
function NewSecret() {
    return (
        <div className="homepage">
          <div className="word">
             <p className="oneTitle">Lock it up</p>
          </div>
              <hr />
              <p className="question">how it works?  F.A.Q</p>
              <p className="createSecret">Create a new Secret</p>
              <textarea className="writeText" cols="30" rows="10"></textarea>  
           <div className="numberDay">
              <p className="longSecret">How long needs to keep your secret?</p>
                <select className="select">
                  <option value="1">1 day</option>
                  <option value="2">2 day</option>
                </select>
            </div>
            <div className="unlockSecret">
              <p>Phrase to unlock your secret</p>
              <input className="input" type="text" placeholder="Enter the Pharse" />
            </div>
              <Link to={'/lock'}> <button className="oneBtn"><span>Lock message</span></button> </Link>         
         </div>  
    )
}

export default NewSecret;
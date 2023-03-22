import "./index.css"
import lock from "../../assets/images/lock.svg"
function OpenPhrase() {
    return (
        <div className="phrasepage">
            <div className="blockpage">
              <p className="phrase">
                Lock it up
              </p>
             <hr />
            <div className="faQ">
              <p>how it works? F.A.Q.</p>
            </div>
              <img src={lock} alt="" />
              <p className="textTwo">You’ve got a secret! But for open it you need passphrase. Do you have it? <br />
                Also, once you open it, it will be permanenlty deleted.</p>
              <input className="inputPhrase" type="text" placeholder="Enter the Phrase..." /> <br />
              <button className="btnphrase"> <span> Open Secret </span> </button>
            </div>
        </div>
    )
}

export default OpenPhrase
import "./index.css"
import lock from "../../assets/images/lock.svg"
function OpenSecret(){
    return (
        <div className="openpage">
           <div className="block">
               <h6>Lock it up</h6>
               <hr />
             <div className="Faq">
               <p>how it works? F.A.Q.</p>
             </div> <br />
               <img src={lock} alt="" />
               <p>You got a secret! Once you open it, it will be permanenlty deleted. Open it?</p>
               <button><span>Open Secret</span></button>
           </div>
        </div>
    )
}

export default OpenSecret
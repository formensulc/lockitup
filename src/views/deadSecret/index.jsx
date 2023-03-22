import Australian from "../../assets/images/Australian.svg"
import "./index.css"
function DeadSecret() {
    return (
        <div className="deadPage">
           <div className="deadBlock">
              <p className="deadTitle">
                Lock it up
              </p>
               <hr />
            <div className="deadFaq">
               <p>how it works? F.A.Q.</p>
            </div> <br />
              <p className="deadTextOne">Oops! Looks like there is nothing here!</p>
               <img src={Australian} alt="" />
              <p className="deadTextTwo">Maybe you wanna to create your own secret?</p>
              <button className="deadBtn"><span>Create new Secret</span></button>
           </div>       
        </div>
    )
}

export default DeadSecret
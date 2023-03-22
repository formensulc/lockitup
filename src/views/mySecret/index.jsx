import "./index.css"
import Unlocked from "../../assets/images/unlocked.svg"
function MySecret() {
    return (
        <div className="mypage">
          <div className="blockOne">
           <p className="titleOne">Lock it up</p>
           <hr />
          <div className="fAq">
               <p>how it works? F.A.Q.</p>
          </div> <br />
            <img src={Unlocked} alt="" />
            <p className="textOne">Here is secret for you</p>
            <textarea className="yourSecret"></textarea> <br />
            <button className="btnOne"> <span> Create my own Secret </span> </button>
          </div>
        </div>
    )
}

export default MySecret
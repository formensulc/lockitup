import "./index.css"
import Vector from '../../assets/images/Vector.svg'
function LockSecret() {
    return (
        <div className="lockpage">
            <div className="word">
               <h6>Lock it up</h6>
               <hr />
            <div className="faq">
               <p>how it works? F.A.Q.</p>
            </div>
               <h1>Go it!</h1>
               <p>your will be stored securely</p>
               <img src={Vector} alt="" />
               <h2>Share this link only with your complice!</h2>
               <input type="email" placeholder="Введите email"/> <br />
               <button><span>Create new Secret</span></button>
            </div>
        </div>
    )
}

export default LockSecret
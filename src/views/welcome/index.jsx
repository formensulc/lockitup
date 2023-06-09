import "./index.css"
import key from '../../assets/images/key.svg';
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container">
     <img src={key} alt="images" />
     <p className="title">Lock it up</p>
     <p className="text">That service can help you to create hidden messages and only your complice will able see it</p>
     <Link to={'/create'}><button className="btn"><span className="btnText">  Create new Secret </span></button> </Link> 
    </div>
  );
}

export default Welcome;
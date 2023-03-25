import "./index.css"
import Vector from '../../assets/images/Vector.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm, Controller, } from 'react-hook-form';
import { Link } from "react-router-dom";

function LockSecret() {
    // const [textInput, setTextInput] = useState("");
    // const navigate = useNavigate()

    // const handleSubmitTwo = (event) => {
    //     event.preventDefault();
    //     console.log('email', textInput);
    //     navigate('/secret')
    // }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
            console.log(data);
          };
        

    return (
        <form className="lockpage" onSubmit={handleSubmit(onSubmit)}>
            <div className="word">
               <h6>Lock it up</h6>
               <hr />
            <div className="faq">
               <p>how it works? F.A.Q.</p>
            </div>
               <h1>Go it!</h1>
               <p>your secret will be stored securely</p>
               <img src={Vector} alt="" />
               <h2>Share this link only with your complice!</h2>
               <input type="email" placeholder="Введите email" id="email" {...register("email", { required: true })}/> <br />
               <button type="submit"><span>Create new Secret</span></button>
            </div>
        </form>
    )
}

export default LockSecret



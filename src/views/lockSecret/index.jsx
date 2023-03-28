import "./index.css"
import Vector from '../../assets/images/Vector.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';


function LockSecret() {
    // const [textInput, setTextInput] = useState("");

    const navigate = useNavigate()

    // const handleSubmitTwo = (event) => {
    //     event.preventDefault();
    //     console.log('data', textInput);
    //     navigate('/phrase')
    // }

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue
    } = useForm();

    const onSubmit = (data) => {
        console.log(data, "data");
        navigate('/phrase')
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
                <Controller
                    control={control}
                    name="textInput"
                    render={({ field: { onChange } }) => (
                        <div>
                            <input
                                id="email"
                                placeholder="Введите email"
                                onChange={onChange}
                            />
                            {errors?.textInput && <span className="textCenter"> Обязательное поле</span>}
                        </div>
                    )}
                    {...register('textInput', { required: true })}
                    ref={null}
                />
                <button type="submit" onClick={handleSubmit(onSubmit)}><span>Create new Secret</span></button>
            </div>
        </form>
    )
}

export default LockSecret



import "./index.css"
import lock from "../../assets/images/lock.svg"
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
function OpenPhrase() {

  // const [inputPharse, setInputPharse] = useState("");

  const [isLocked, setIsLocked] = useState(true);
  const navigate = useNavigate()

  // const params = useParams()
  // console.log({ params });


  const onSubmit = (data) => {
    console.log(data, "data");
    navigate('/secret')

  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm()

  return (
    <div className="phrasepage">
      <form className="blockpage" onSubmit={handleSubmit(onSubmit)}>
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
        {isLocked && <Controller
          control={control}
          name="inputPharse"
          render={({ field: { onChange } }) => (
            <div>
              <input
                className="inputPhrase"
                id="inputPhrase"
                placeholder="Enter the pharse..."
                onChange={onChange}
              />
              {errors?.inputPhrase && <span className="text-center"> <br /> Обязательное поле</span>}
            </div>
          )}
          {...register('inputPhrase', { required: true })}
          ref={null}
        />}
        <button className="btnphrase" onClick={handleSubmit(onSubmit)}> <span> Open Secret </span> </button>
      </form>
    </div>
  )
}

export default OpenPhrase
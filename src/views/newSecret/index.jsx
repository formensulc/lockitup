import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form'
import "./index.css"
function NewSecret() {

  const [textAreaData, setTextAreaData] = useState("");
  const [days, setDays] = useState("1");
  const [secretInput, setSecretInput] = useState("")
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue
  } = useForm()

  const onSubmit = (data) => {
    console.log(data, "data");
    navigate('/lock')
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Data: ', textAreaData, days, secretInput);
    navigate('/lock')
  }
  return (
    <div className="newPage">
      <form className="newBlock" onSubmit={handleSubmit(onSubmit)}>
        <p className="newTitle">Lock it up</p>
        <hr />
        <p className="newOneText">how it works?  F.A.Q</p>
        <p className="newTwoText">Create a new Secret</p>
        <textarea value={textAreaData} className="newWriteText" placeholder="Start type your secret..." onChange={(e) => setTextAreaData(e.target.value)}></textarea>
        <div className="newSelectBlock">
          <p className="newThreeText">How long needs to keep your secret?</p>
          <select className="newSeclect" onChange={(e) => setDays(e.target.value)}>
            <option value="1">1 day</option>
            <option value="2">2 day</option>
          </select>
        </div>

        <div className="newUnlockBlock">
          <p className="newFourTitle">Phrase to unlock your secret</p>
          <Controller
            control={control}
            name="secretInput"
            render={({ field: { onChange } }) => (
              <div>
                <input
                  className="newInput"
                  id="secretInput"
                  placeholder="Enter the Pharse"
                  onChange={onChange}
                />
                {errors?.secretInput && <span className="text-center"> <br /> Обязательное поле</span>}
              </div>
            )}
            {...register('secretInput', { required: true })}
            ref={null}
          />
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="newBtn">
          Lock message</button>
      </form>

    </div>
  )
}

export default NewSecret;
import { useForm } from "react-hook-form";
import React from "react";
import { useState } from "react";
// import validator from "validator";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'

export default function App() {
  const {
    control,
    register,
    handleSubmit,
    formState: { touchedFields, isDirty, isValid, dirtyFields, isSubmitted, errors },
    watch
  } = useForm();
  // using the handlSubmit method
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const isWatchDeveloper = watch('isDeveloper')
  const onSubmit = (data) => {
    setData(data);
  };
  // function phoneNumber() {
  //   const [phone, setPhone] = useState("");
  //   return (
  //     <PhoneInput
  //       placeholder="Enter phone number"
  //       value={phone}
  //       onChange={setPhone}
  //     />
  //   );
  // }
  

  return (
    <div className="h-screen static bg-gray-500 ">
      <div className="w-full  mt-40 flex justify-center items-center bg-gray-900 p-8 border-r border-dashed">
        <div
          className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col"
          style={{ height: "375px" }}
        >
          <h2 className="text-center font-medium text-2xl mb-4">
            React Form snippet
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-1 flex-col justify-evenly"
          >
            <input
              className="border-2 outline-none p-2 rounded-md"
              placeholder="Name"
              {...register("name")}
            />
            <input
              className="border-2 outline-none mt-2 p-2 rounded-md"
              placeholder="Email"
              {...register("email", {
                required: "Email is required", // Error message if field is empty
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid email address", // Error message if pattern doesn't match
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}{" "}
            {/* Display error message if validation fails */}
           
            <PhoneInputWithCountry
              className="border-2 outline-none mt-2 p-2 rounded-md"
              name = "Phone number "
              control={control}
              rules={{required : true }}
              defaultCountry="IN"
            />
            <div className="flex flex-row">
              <p>Are you a developer ?</p>
              <input type="checkbox"
              {...register('isDeveloper')} />
            </div>
            {
             isWatchDeveloper ?
             <div className='flex w-full '>
                <input
                  className='flex-1 border-2 outline-none p-2 rounded-md mr-2'
                  placeholder='Experience (Years)'
                  {...register('exp_years')} />
                <input
                  className='flex-1 border-2 outline-none p-2 rounded-md'
                  placeholder='Experience (Months)'
                  {...register('exp_months')} />
              </div>
              : null
 
            }
            <button
              className=" flex justify-center mt-2 p-2 rounded-md w-1/2 self-center bg-gray-900  text-white hover:bg-gray-800"
              type="submit"
            >
              <span>Submit</span>
            </button>
          </form>
          {/* <div className="h-4">
            <p> Data: {JSON.stringify(data)}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

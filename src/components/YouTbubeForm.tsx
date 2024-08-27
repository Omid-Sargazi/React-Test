import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;
type FormValues = {
  username: string,
  email: string,
  channel: string,
};

export const YouTbubeForm = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;
  const { name, ref, onChange, onBlur } = register("username");
  renderCount++;

  const onSubmit = (data:FormValues) => {
    console.log("Form Submit",data);
  };
  return (
    <>
      <div>
        <h1>YouTube Form({renderCount / 2})</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
            
          />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email",{required:"Password is required."})} />

          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" {...register("channel",{
            required:{
              value:true,
              message:"Username is required."
            }
          })} />

          <button>Submit</button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

import React from "react";

function FormInput({ name, register, errors, type="text" }) {
  return (
    <div className="space-y-1">
      <input
        className="border w-full rounded-md border-gray-500"
        placeholder={name}
        type={type}
        {...register(name)}
      />
        {
        errors[name] &&(
          <p className="text-red-600 text-sm">{errors[name].message}</p>
        ) 
        }
    </div>
  );
}

export default FormInput;

import React from "react";

function FormInput({name, register}) {
  return (
    <input
      className="border w-full rounded-md border-gray-500"
      placeholder={name}
      {...register(name)}
    />
  );
}

export default FormInput;

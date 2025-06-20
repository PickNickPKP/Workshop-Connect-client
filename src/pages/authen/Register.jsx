import FormInput from "../../components/form/FormInput";
import createAlert from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import axios from "axios";

import Buttons from "../../components/form/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validator";
import { actionRegister } from "../../api/auth";

function Register() {
  //JS
  const { register, handleSubmit, formState ,reset} = useForm({
    resolver: yupResolver(registerSchema),
  });

  const { isSubmitting, errors } = formState;
  console.log(errors);

  const hdlSubmit = async (value) => {
     console.log("Start waiting...");
  await new Promise((resolve) => setTimeout(resolve, 6000));
  console.log("End waiting...", value);



    // await new Promise((resolve) => setTimeout(resolve, 6000));
    // console.log(value);

    try {
      const res = await actionRegister(value)
      console.log(res);
      createAlert("success", res.data.message);
      reset()
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.message);
    }
  };
  return (
    <div className="flex w-full h-full justify-end">
      {/*Card*/}
      <div className="border w-64 h-[400px] p-4 m-4 rounded-md">
        <h1 className="font-bold text-center">Register</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className=" flex flex-col gap-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="name" errors={errors} />
            <FormInput register={register} 
            name="password" 
            errors={errors} 
            type="password"
            />
            <FormInput
              register={register}
              name="confirmPassword"
              errors={errors}
              type="password"
            />
          </div>

          <div className="flex justify-center mt-4">
            <Buttons label="Register" isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

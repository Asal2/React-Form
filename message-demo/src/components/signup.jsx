import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      Password: "",
      confirmPassword: "",
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    console.log("form submitted", data);
    history("/login")
  };

  const history = useNavigate();

  return (
    <div className="signup-form">
      <h1>SignUp </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", { required: "Username is required" })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              validate: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("Password", { 
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?!.*\s).{8,}$/,
                message: "Invalid password format",
              },
             })}
          />
          <p className="error">{errors.Password?.message}</p>
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("confirmPassword", { required: "Password is required" })}
          />
          <p className="error">{errors.Password?.message}</p>
        </div>
        <button>Sign Up</button>
        {/* onClick={handleSignUp} */}
      </form>
    </div>
  );
}

export default SignUp;

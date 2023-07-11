import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const form = useForm({
    defaultValues: {
      username: "",
      Password: "",
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
  };

  return (
    <div>
      <div className="signup-form">
        <h1>Login </h1>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("Password", { required: "Password is required" })}
            />
            <p className="error">{errors.Password?.message}</p>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

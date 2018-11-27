import React from "react";
import FormErrors from "../FormErrors/FormErrors";

const SignUpForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password_confirmation")
    });
  };

  return (
    <form className="SignUpForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">First Name: </label> <br />
        <input name="first_name" id="first_name" />
        <FormErrors forField="first_name" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="last_name">Last Name: </label> <br />
        <input name="last_name" id="last_name" />
        <FormErrors forField="last_name" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="email">Email: </label> <br />
        <input type="text" name="email" id="email"/>
        <FormErrors forField="email" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="password">Password: </label> <br />
        <input type="password" name="password" id="password"/>
        <FormErrors forField="password" errors={props.errors} />
      </div>
      <div>
        <label htmlFor="password_confirmation">Password Confirmation: </label> <br />
        <input type="password" name="password_confirmation" id="password_confirmation"/>
        <FormErrors forField="password_confirmation" errors={props.errors} />
      </div>
      <div>
        <input type="submit" value="Sign Up" />
      </div>
    </form>
  );
};

export default SignUpForm;
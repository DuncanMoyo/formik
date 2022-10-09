import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  // console.log("Form Data", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid e-mail Format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const { handleSubmit, values, handleChange, errors } = formik;

  console.log("Form Errors", errors);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name ? <div className="error" >{errors.name}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email ? <div className="error">{errors.email}</div> : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={handleChange}
            value={values.channel}
          />
          {errors.channel ? <div className="error">{errors.channel}</div> : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;

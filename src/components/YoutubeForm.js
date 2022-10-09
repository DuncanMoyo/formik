import React from "react";
import { useFormik } from "formik";

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: values => {
        console.log("Form Data", values);
    }  
  });

  const {handleSubmit, values, handleChange} = formik;

//   console.log("Form Values", values);

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={handleChange}
          value={values.channel}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;

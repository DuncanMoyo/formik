import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please, it is required"),
  channel: Yup.string().required("Gimme your channel name"),
});

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
  } = formik;

  console.log("Form Fields Visited", touched);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" {...getFieldProps("name")} />
          {touched.name && errors.name ? (
            <div className="error">{errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...getFieldProps("email")}
          />
          {touched.email && errors.email ? (
            <div className="error">{errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...getFieldProps("channel")}
          />
          {touched.channel && errors.channel ? (
            <div className="error">{errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;

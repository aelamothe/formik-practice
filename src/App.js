import React from "react";

import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("form:", values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "Required";
      if (!values.email) errors.email = "Required";
      if (!values.password) errors.password = "Required";
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

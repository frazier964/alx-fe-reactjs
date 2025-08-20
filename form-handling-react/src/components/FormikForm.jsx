import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log("Formik Registered:", data);
      alert("User registered successfully with Formik!");
      resetForm();
    } catch (err) {
      console.error("Error:", err);
    }
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="p-4 border rounded w-80 mx-auto mt-10">
          <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>

          <div className="mb-2">
            <Field name="username" type="text" placeholder="Username" className="border p-2 w-full" />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>

          <div className="mb-2">
            <Field name="email" type="email" placeholder="Email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div className="mb-2">
            <Field name="password" type="password" placeholder="Password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>

          <button type="submit" disabled={isSubmitting} className="bg-green-500 text-white px-4 py-2 rounded">
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;

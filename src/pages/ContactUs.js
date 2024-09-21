import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactUs.css"; 

const ContactUs = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    address: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    bio: Yup.string().required("Required"),
  });

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          dob: "",
          bio: "",
          profileImage: null,
          bannerImage: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ setFieldValue }) => (
          <Form className="contact-form">
            <div>
              <label className="contact-label">Name:</label>
              <Field name="name" className="contact-input" />
              <ErrorMessage
                name="name"
                component="div"
                className="contact-error"
              />
            </div>

            <div>
              <label className="contact-label">Email:</label>
              <Field name="email" type="email" className="contact-input" />
              <ErrorMessage
                name="email"
                component="div"
                className="contact-error"
              />
            </div>

            <div>
              <label className="contact-label">Address:</label>
              <Field name="address" className="contact-input" />
              <ErrorMessage
                name="address"
                component="div"
                className="contact-error"
              />
            </div>

            <div>
              <label className="contact-label">Date of Birth:</label>
              <Field name="dob" type="date" className="contact-input" />
              <ErrorMessage
                name="dob"
                component="div"
                className="contact-error"
              />
            </div>

            <div>
              <label className="contact-label">Bio:</label>
              <Field
                name="bio"
                as="textarea"
                className="contact-input contact-textarea"
              />
              <ErrorMessage
                name="bio"
                component="div"
                className="contact-error"
              />
            </div>

            <div>
              <label className="contact-label">Profile Image:</label>
              <input
                name="profileImage"
                type="file"
                onChange={(event) =>
                  setFieldValue("profileImage", event.target.files[0])
                }
                className="contact-file-input"
              />
            </div>

            <div>
              <label className="contact-label">Banner Image:</label>
              <input
                name="bannerImage"
                type="file"
                onChange={(event) =>
                  setFieldValue("bannerImage", event.target.files[0])
                }
                className="contact-file-input"
              />
            </div>

            <button type="submit" className="contact-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;

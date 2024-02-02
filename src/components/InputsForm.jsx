import React from "react";
import { Formik } from "formik";
import {
  // getDetails,
  // getDetails,
  // getEntityDetails,
  updateDetailsAge,
  updateDetailsName,
} from "../services/functions";

const InputForm = ({ setDetails, setShowForm }) => {
  return (
    <section className="form">
      <Formik
        initialValues={{ age: "", name: "" }}
        onSubmit={async (values, { setSubmitting }) => {
            try {
                setSubmitting(true);
                await updateDetailsAge(values.age);
                await updateDetailsName(values.name);
                // const allDetails = await getDetails();
                // await setDetails(allDetails);
                setShowForm(false);
              } catch (error) {
                console.error("Error updating details:", error);
              } finally {
                setSubmitting(false);
              }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {isSubmitting ? (
              <div width="100%" style={{ alignSelf: "center" }}>
             <h1>Creating Details...</h1>
              </div>
            ) : (
              <>
                <h2>Update Your Details</h2>
                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    placeholder="Input your age"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Input your Name"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-block"
                  >
                    {isSubmitting ? "Creating Details" : "Create Details"}
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </Formik>
      {/* <button className="btn" onClick={()=>{getDetails()}}>getDetails</button> */}
    </section>
  );
};

export default InputForm;

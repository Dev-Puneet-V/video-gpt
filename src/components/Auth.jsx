import { Formik } from "formik";
import { useState } from "react";

const Auth = () => {
  const [authState, setAuthState] = useState("SIGN_IN");
  const handleAuthStateChange = () => {
    setAuthState(authState === "SIGN_IN" ? "SIGN_UP" : "SIGN_IN");
  };
  return (
    <div className="w-[400px]">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-black pl-10 pr-10 pb-10 pt-10 bg-black/80"
          >
            <p className="font-bold text-3xl text-slate-200 mb-5">
              {authState === "SIGN_IN" ? "Sign in" : "Sign up"}
            </p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
              className="h-[50px] w-[300px] focus:outline p-2"
            />
            <p className="text-red-700 font-bold">
              {errors.email && touched.email && errors.email}
            </p>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="h-[50px] w-[300px] focus:outline p-2 mt-5"
              placeholder="Password"
            />
            <p className="text-red-700 font-bold">
              {errors.password && touched.password && errors.password}
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-red-600 text-white h-[50px] font-bold w-[94%] mt-5"
            >
              {authState === "SIGN_IN" ? "Sign in" : "Sign up"}
            </button>
            <div className="flex gap-2 font-bold mt-3">
              <p className="text-slate-600">
                {authState === "SIGN_IN" ? "New to Netflix?" : "Existing user?"}
              </p>
              <p
                className="text-gray-50 hover:underline cursor-pointer flex items-center"
                onClick={handleAuthStateChange}
              >
                {authState === "SIGN_IN" ? "Sign up now" : "Sign in now"}
              </p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
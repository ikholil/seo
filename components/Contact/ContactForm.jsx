import { Formik } from "formik";
const ContactForm = () => {
  return (
    <div className="relative">
      <div className="bg-white ">
        <div className="bg-[url('/images/contact/form-bg.png')] bg-no-repeat opacity-30 h-full w-full absolute top-0 flex items-center justify-center bg-cover"></div>

        <div className="  max-w-[1296px] flex justify-center items-center flex-col text-center mx-3 md:mx-auto h-full z-10 relative">
          <div className="max-w-4xl flex flex-col justify-center">
            <h5 className="text-[#FF5349] text-2xl font-semibold mt-[65px] md:mt-[115px]">
              Contact us
            </h5>
            <h2 className="text-center text-[#222] leading-tight text-4xl pt-2 md:text-[57px] font-bold mb-6">
              Start Growing Your Business Today
            </h2>
            <p className="text-[#444] text-lg md:px-40  text-center mb-8 md:mb-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
          <div className="w-full md:w-[635px] text-left mx-auto">
            <Formik
              initialValues={{
                name: "",
                email: "",
                website: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email is Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.name) {
                  errors.name = "Name is Required";
                }
                if (!values.website) {
                  errors.website = "Website is Required";
                }
                if (!values.message) {
                  errors.message = "Message is Required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(JSON.stringify(values, null, 2));
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
                <form onSubmit={handleSubmit}>
                  <input
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    type="text"
                    placeholder="Full Name"
                    className="p-3 md:p-5  w-full bg-white text-[#5a5a5a] rounded-md  mb-1 focus:outline-none"
                  />
                  <span className="text-red-500">
                    {" "}
                    {errors.name && touched.name && errors.name}
                  </span>
                  <input
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="text"
                    placeholder="Email"
                    className="p-3 md:p-5  w-full bg-white text-[#5a5a5a] rounded-md mt-3 mb-1 focus:outline-none"
                  />
                  <span className="text-red-500">
                    {" "}
                    {errors.email && touched.email && errors.email}
                  </span>
                  <input
                    name="website"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                    type="text"
                    placeholder="Website"
                    className="p-3 md:p-5  w-full bg-white text-[#5a5a5a] rounded-md mt-3 mb-1 focus:outline-none"
                  />
                  <span className="text-red-500">
                    {" "}
                    {errors.website && touched.website && errors.website}
                  </span>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    rows="8"
                    placeholder="Type a Message"
                    className="mb-1 mt-3 p-3 md:p-5  w-full bg-white text-[#5a5a5a] rounded-md focus:outline-none"
                  />
                  <span className="text-red-500">
                    {" "}
                    {errors.message && touched.message && errors.message}
                  </span>
                  <div className="flex justify-center mt-8 md:mt-[50px]  mb-[70px] md:mb-[120px]">
                    <button type="submit" className="text-white text-lg px-6 py-3 md:px-8 shadow-lg shadow-[#ff524987] md:py-4 rounded-md bg-gradient-to-r from-[#FF9300] to-[#FF5349]">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

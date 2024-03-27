import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});
const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, { resetForm }) => {
        addContact(values);
        resetForm();
      }}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.contactFormItem}>
          <label className={css.contactFormContent}>
            Name <br />
            <Field type="text" name="name" className={css.contactInput} />
            <br />
            <ErrorMessage name="name" as="p" />
          </label>
        </div>

        <div className={css.contactFormItem}>
          <label className={css.contactFormContent}>
            Number
            <br />
            <Field type="text" name="number" className={css.contactInput} />
            <br />
            <ErrorMessage name="number" as="p" />
          </label>
        </div>
        <button className={css.contactAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

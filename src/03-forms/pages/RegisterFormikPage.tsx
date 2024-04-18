import "../styles/styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

export const RegisterFormikPage = () => {


  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe de tener al menos 2 caracteres')
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Correo inválido')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Debe de tener al menos 6 caracteres')
            .required('Requerido'),
          password2: Yup.string()
            .min(6, 'Debe de tener al menos 6 caracteres')
            .required('Requerido')
            .oneOf([Yup.ref('password1')],'Claves deben ser iguales')
        })}
      >
        {(formik) => (
          
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="password1">Password</label>
            <Field name="password1" type="password" />
            <ErrorMessage name="password1" component="span" />

            <label htmlFor="password2">Repeat Password</label>
            <Field name="password2" type="password" />
            <ErrorMessage name="password2" component="span" />

            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

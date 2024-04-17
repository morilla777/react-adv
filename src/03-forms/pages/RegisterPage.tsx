import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {

  const { name, email, password1, password2, onChange, onSubmit, resetForm, isValidEmail } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={ `${name.trim().length <= 0 && 'has-error'}` }
        />
        { name.trim().length <= 0 && <span>Este campo es necesario</span> }

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={ `${ !isValidEmail( email ) && 'has-error'}` }
        />
        { !isValidEmail( email ) && <span>Email no es válido</span> }

        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span> }

        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
        { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas tienen que ser iguales</span> }

        <button type="submit">Create</button>
        <button type="reset" onClick={ resetForm }>Reset Form</button>
      </form>
    </div>
  );
};

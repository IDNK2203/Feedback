import { login } from "../features/auth/authSlice";
import useReset from "../hooks/useReset";
import useAuthForm from "../hooks/useAuthForm";
import useAuthRedir from "../hooks/useAuthRedir";

const Login = () => {
  useReset();
  const { handleSumbit, changeFormData, formData } = useAuthForm(
    {
      email: "",
      password: "",
    },
    login
  );

  const { status, errorMsg } = useAuthRedir();

  return (
    <div className="container">
      {status === "pending" && <div>spinner</div>}
      <div className="form-heading">
        <h2>Login Form</h2>
      </div>

      <form onSubmit={handleSumbit}>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeFormData}
            value={formData.email}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeFormData}
            value={formData.password}
          />
        </p>{" "}
        <p>
          <button type="sumbit"> submit</button>
        </p>
      </form>
      {status === "error" && <div>{errorMsg}</div>}
    </div>
  );
};

export default Login;

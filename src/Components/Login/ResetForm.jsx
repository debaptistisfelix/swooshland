import "../Login/ResetForm.css";
import useInputState from "../Hooks/useInputState";

function ResetForm({ ResetYourPassword }) {
  const [password, handlePassword, resetPassword] = useInputState("");
  const [passwordConfirm, handlePasswordConfirm, resetPasswordConfirm] =
    useInputState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        ResetYourPassword(password, passwordConfirm);
      }}
      className="ResetForm"
    >
      <h3 className="ResetForm-title">PASSWORD RESET</h3>
      <div className="ResetForm-input-box">
        <label className="ResetForm-label">Password</label>
        <input
          required
          type="password"
          onChange={handlePassword}
          className="ResetForm-input"
        />
      </div>
      <div className="ResetForm-input-box">
        <label className="ResetForm-label">Confirm Password</label>
        <input
          required
          type="password"
          onChange={handlePasswordConfirm}
          className="ResetForm-input"
        />
      </div>
      <button className="ResetForm-btn">RESET PASSWORD</button>
    </form>
  );
}

export default ResetForm;

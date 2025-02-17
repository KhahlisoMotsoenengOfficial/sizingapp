import "../css/Login.css";
import "../css/Navbar.css";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <>
      <div className="login">
        <Navbar />
        <img
          src="/src/components/images/magic.jpg"
          alt="login image"
          className="login__img"
        />
        <div className="login__container">
          <form action="" className="login__form">
            <h3 className="login__message">Let’s find your perfect size</h3>
            <h2 className="login__message">no more guessing, just clicking!</h2>
            <h1 className="login__title">Login</h1>
            <div className="login__content">
              <div className="login__box">
                <i className="fa-solid fa-user login__icon"></i>
                <div className="login__box-input">
                  <input
                    type="email"
                    required
                    className="login__input"
                    id="login-email"
                    placeholder=" "
                  />
                  <label for="login-email" className="login__label">
                    Email
                  </label>
                </div>
              </div>

              <div className="login__box">
                <i className="fa-solid fa-lock login__icon"></i>
                <div className="login__box-input">
                  <input
                    type="password"
                    required
                    className="login__input"
                    id="login-pass"
                    placeholder=" "
                  />
                  <label for="login-pass" className="login__label">
                    Password
                  </label>
                  <i
                    className="fa-solid fa-eye-low-vision login__eye"
                    id="login-eye"
                  ></i>
                </div>
              </div>
            </div>
            <div className="login__check">
              <div className="login__check-group">
                <input
                  type="checkbox"
                  className="login__check-input"
                  id="login-check"
                />
                <label for="login-check" className="login__check-label">
                  Remember me
                </label>
              </div>
              <a href="#" className="login__forgot">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login__button">
              Login
            </button>
            <p className="login__register">
              Don't have an account? <a href="register.html">Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

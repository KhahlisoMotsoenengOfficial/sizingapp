import "../css/Home.css";
import '../css/Navbar.css'
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <img
        src="/src/components/images/magic.jpg"
        alt="login image"
        className="main__img"
      />
      <div className="main__container">
        <div className="main__content">
          <h1>Perfect Fit,</h1>
          <h2>Everytime.</h2>
          <p>#SizeItRight</p>
          <button className="main__btn">
            <a href="/SignUp">Sign Up</a>
          </button>
        </div>
        <div className="main__img--container">
          <img
            src="/src/components/images/smart_resize_re_q4mo.svg"
            alt="pic"
            id="main__img"
          />
        </div>
      </div>
    </div>
  );
}

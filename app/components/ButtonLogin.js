import Link from "next/link";

//const { isLoggedIn, name, age, city } = props;
//Jave script destructuring props
//We can find out if the user is logged in or not by using props.isLoggedIn. If the user is logged in, we can display a welcome message with their name. If the user is not logged in, we can display a login button.
const ButtonLogin = ({ isLoggedIn, name, age, city, children, extraStyle }) => {
  console.log(extraStyle);
  if (isLoggedIn) {
    return (
      <Link
        href="/dashboard"
        className={`btn btn-primary  ${extraStyle ? extraStyle : ""}`}
      >
        Welcome, {name}
      </Link>
    );
  }

  return <button>ButtonLogin</button>;
};
export default ButtonLogin;

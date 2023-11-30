import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const { currentUser } = useSelector((state) => state.usersReducer);
  return (
    <>
      <div className="list-group">
        <Link
          to="/project/napster-search"
          className="list-group-item list-group-item-action"
        >
          Napster Search
        </Link>
        {!currentUser && (
          <>
            <Link
              to="/project/signin"
              className="list-group-item list-group-item-action"
            >
              SignIn
            </Link>
            <Link
              to="/project/signup"
              className="list-group-item list-group-item-action"
            >
              SignUp
            </Link>
          </>
        )}
        {currentUser && (
          <>
            {currentUser.role === "ADMIN" && (
              <Link
                to="/project/users"
                className="list-group-item list-group-item-action"
              >
                Users
              </Link>
            )}
            <Link
              to="/project/account"
              className="list-group-item list-group-item-action"
            >
              Account
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default Nav;

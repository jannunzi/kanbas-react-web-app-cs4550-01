import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedContent({ children }) {
  const { currentUser } = useSelector((state) => state.usersReducer);
  if (currentUser) {
    return children;
  }
  return null;
}

export default ProtectedContent;

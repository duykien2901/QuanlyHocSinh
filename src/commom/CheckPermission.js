import jwts from "jsonwebtoken";

export const checkPermission = () => {
  const token = localStorage.getItem("token");
  const permission = jwts.decode(token)?.sub.split(",")[1];
  return permission;
};

import { Outlet } from "react-router-dom";
// import classes from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is Home Page.</p>
      <Outlet/>
    </div>
  );
}

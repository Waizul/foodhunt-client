import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <NavMenu active={active} setActive={setActive} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;

import Nav from "./Nav";

const Layout = ({ children }) => (
  <div
  className=" px-4 md:px-9 py-6 h-screen w-screen relative"
    style={{
      background: `url('/Ultiverse Demo.png') no-repeat center center fixed`,
      backgroundSize: "cover",
      minHeight: "100vh",
     }}
  >
    <Nav />
    {children}
  </div>
);

export default Layout;

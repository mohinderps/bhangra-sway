const Header = props => {
  return (
    <nav>
      <div
        className="nav-wrapper"
        style={{
          backgroundColor: "black",
          color: "white",
          fontSize: "20px",
          height: "64px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/bhangraswaylogo.png"
          style={{
            height: "52px",
            marginLeft: "20px",
            marginTop: "6px",
          }}
        ></img>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "35%",
            alignItems: "center",
          }}
        >
          <Link style={{ color: "white" }} to="/">
            Home
          </Link>
          <Link style={{ color: "white" }} to="/contact/">
            Contact
          </Link>
          <Link style={{ color: "white" }} to="/contact/">
            Services
          </Link>
          <Link style={{ color: "white" }} to="/about/">
            About
          </Link>
          <Link style={{ color: "white" }} to="/contact/">
            Demo
          </Link>
          <Link style={{ color: "white" }} to="/contact/">
            Videos
          </Link>
        </div>
      </div>
    </nav>
  )
}

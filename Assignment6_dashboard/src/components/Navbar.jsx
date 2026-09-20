function Navbar({ title }) {
  return (
    <nav>
      <h2>{title}</h2>

      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Logout</a>
      </div>
    </nav>
  )
}

export default Navbar
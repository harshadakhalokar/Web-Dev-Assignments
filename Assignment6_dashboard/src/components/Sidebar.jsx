import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside>
      <h3>Student Hub</h3>

      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>

        <li>
          <NavLink to="/assignments">Assignments</NavLink>
        </li>

        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
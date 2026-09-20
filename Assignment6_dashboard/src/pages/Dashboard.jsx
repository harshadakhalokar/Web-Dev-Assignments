function Dashboard() {
  return (
    <div>
      <h1>Good Morning, Harshada!</h1>

      <p className="subtitle">
        Welcome to your student dashboard.
      </p>

      <div className="cards">

        <div className="card">
          <h3>Courses</h3>
          <p>6</p>
          <span>Current semester</span>
        </div>

        <div className="card">
          <h3>Tasks</h3>
          <p>4</p>
          <span>Pending tasks</span>
        </div>

        <div className="card">
          <h3>CGPA</h3>
          <p>9.0</p>
          <span>Previous year</span>
        </div>

      </div>

      <section className="tasks-section">
        <h2>Upcoming Tasks</h2>

        <div className="task">
          <span>React practical</span>
          <small>Today</small>
        </div>

        <div className="task">
          <span>Java DSA practice</span>
          <small>Tomorrow</small>
        </div>

        <div className="task">
          <span>AIML assignment</span>
          <small>This week</small>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
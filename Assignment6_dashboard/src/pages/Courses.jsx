function Courses() {
  return (
    <div>
      <h1>My Courses</h1>

      <p className="subtitle">
        Courses I am studying this semester.
      </p>

      <div className="info-list">

        <div className="info-item">
          <h3>Java & DSA</h3>
          <p>Data Structures and Algorithms using Java</p>
        </div>

        <div className="info-item">
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript and React</p>
        </div>

        <div className="info-item">
          <h3>AIML</h3>
          <p>Artificial Intelligence and Machine Learning</p>
        </div>

        <div className="info-item">
          <h3>Data Analytics</h3>
          <p>Data analysis and visualization concepts</p>
        </div>

      </div>
    </div>
  )
}

export default Courses
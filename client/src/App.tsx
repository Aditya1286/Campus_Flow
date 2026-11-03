import { Link } from "react-router-dom";

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">CampusFlow</p>
        <h1>Plan. Collaborate. Build.</h1>
        <p className="lead">
          A workspace for student teams to manage projects, hackathons, and
          capstone work in one place.
        </p>
        <div className="actions">
          <Link className="button primary" to="/dashboard">
            Open dashboard
          </Link>
          <a className="button secondary" href="/api/health">
            Check API
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;

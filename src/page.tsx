import { Link } from "react-router-dom";

export default function Page() {
    return (
        <div>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />

            </head>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"><Link to="/form">Home</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <h1>Qualities of a good student</h1>
        </div>
    )
}
import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="wrap">
                    <div>© 2019 Hlavac Business</div>
                <div>
                        <div className="socials">
                            <Link to="">
                                <img
                                    alt="Gustav on LinkedIn"
                                    title="Gustav on LinkedIn"
                                    src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yNTYsMEMxMTQuNjA5LDAsMCwxMTQuNjA5LDAsMjU2YzAsMTQxLjM5MSwxMTQuNjA5LDI1NiwyNTYsMjU2YzE0MS4zOTEsMCwyNTYtMTE0LjYwOSwyNTYtMjU2ICAgQzUxMiwxMTQuNjA5LDM5Ny4zOTEsMCwyNTYsMHogTTI1Niw0NzJjLTExOS4yOTcsMC0yMTYtOTYuNzAzLTIxNi0yMTZTMTM2LjcwMyw0MCwyNTYsNDBzMjE2LDk2LjcwMywyMTYsMjE2UzM3NS4yOTcsNDcyLDI1Niw0NzJ6ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEyOC4wOTQsMzgzLjg5MWg0OHYtMTkyaC00OFYzODMuODkxeiBNMzIwLjA5NCwxOTEuODkxYy00MS4wOTQsMC42ODgtNjEuMzEyLDMwLjY0MS02NCwzMnYtMzJoLTQ4djE5Mmg0OHYtMTEyICAgICBjMC00LjEwOCwxMC4xMjUtMzcsNDgtMzJjMjAuMzQ0LDEuMzI4LDMxLjMxMiwyOC4yMzQsMzIsMzJ2MTEybDQ3LjgxMiwwLjIxOVYyNTEuMTg4ICAgICBDMzgyLjIxOSwyMzIsMzcyLjYyNSwxOTIuNTc4LDMyMC4wOTQsMTkxLjg5MXogTTE1Mi4wOTQsMTI3Ljg5MWMtMTMuMjUsMC0yNCwxMC43MzQtMjQsMjRzMTAuNzUsMjQsMjQsMjRzMjQtMTAuNzM0LDI0LTI0ICAgICBTMTY1LjM0NCwxMjcuODkxLDE1Mi4wOTQsMTI3Ljg5MXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg=="
                                />
                            </Link>
                            <Link to="">
                                <img
                                    alt="Gustav on Facebook"
                                    title="Gustav on Facebook"
                                    src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yNTYsMEMxMTQuNjA5LDAsMCwxMTQuNjA5LDAsMjU2YzAsMTQxLjM5MSwxMTQuNjA5LDI1NiwyNTYsMjU2YzE0MS4zOTEsMCwyNTYtMTE0LjYwOSwyNTYtMjU2ICAgQzUxMiwxMTQuNjA5LDM5Ny4zOTEsMCwyNTYsMHogTTI1Niw0NzJjLTExOS4yOTcsMC0yMTYtOTYuNzAzLTIxNi0yMTZTMTM2LjcwMyw0MCwyNTYsNDBzMjE2LDk2LjcwMywyMTYsMjE2UzM3NS4yOTcsNDcyLDI1Niw0NzJ6ICAgIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8cGF0aCBkPSJNMzE2Ljc1LDIxNi44MTJoLTQ0LjUzMXYtMzIuNWMwLTkuOTY5LDEwLjMxMi0xMi4yODEsMTUuMTI1LTEyLjI4MWM0Ljc4MSwwLDI4Ljc2NywwLDI4Ljc2Nywwdi00My44NTlMMjgzLjE0MSwxMjggICBjLTQ0Ljk4MywwLTU1LjI1LDMyLjcwMy01NS4yNSw1My42NzJ2MzUuMTQxSDE5NS4yNVYyNjJoMzIuNjQxYzAsNTguMDE2LDAsMTIyLDAsMTIyaDQ0LjMyOGMwLDAsMC02NC42NDEsMC0xMjJoMzcuNjU2ICAgTDMxNi43NSwyMTYuODEyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgo8L2c+PC9nPiA8L3N2Zz4="
                                />
                            </Link>
                        </div>
                    <Link to="mailto:info@hlavac.business">info@hlavac.business</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

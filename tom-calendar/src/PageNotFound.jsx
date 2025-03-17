import { Link } from "react-router"

export default function PageNotFound() {
    return (
        <div>
            <div>Page not found</div>
            <div>
                <Link to="/">Get yersel home</Link>
            </div>
        </div>
    )
}
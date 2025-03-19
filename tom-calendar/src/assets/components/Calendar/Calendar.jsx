import { Link } from "react-router"
import './calendar.css'

export default function Calendar() {
    return (
        <div>
            <h1>Calendar</h1>
            <div>
                <Link to='day'>Day</Link>
            </div>
        </div>
    )
}
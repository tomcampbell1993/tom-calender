import { Link } from "react-router"
import Day from "../Day/Day.jsx"
import './calendar.css'

export default function Calendar() {

    const numberOfDays = 31;
    let dayArray = [];

    function daySetup(days) {
        for (let i = 0; i < days; i++) {
            dayArray[i] = i;
        }

        return dayArray;
    }

    const listDays = daySetup(numberOfDays).map((day) =>
        <Day key={day.toString()} />
    );


    return (
        <div>
            <h1>Calendar</h1>
            <div>
                <Link to='day'>Day</Link>
            </div>
            <div>
                {listDays}
            </div>
        </div>
    )
}
import { Link } from "react-router"
import Day from '../Day/Day.jsx'

import './calendar.css'



export default function Calendar() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = new Date(year, month+1, 0).getDate();

    function findDay(dayNumber) {
        const thatDay = new Date(year, month, dayNumber).getDay();
        return thatDay
    }


    function createList() {
        const dayList = [];

        for (let i = 0; i < daysInMonth; i++) {
            dayList.push(i);
        }
        return dayList;
    }

    const dayItems = createList().map(day =>
        <Day currentDay={findDay(day)} dayNumber={day+1} key={day} />
    );

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <div>
                <Link to='day'>Day</Link>
            </div>
            <div className="day-wrapper">
                {dayItems}
            </div>


        </div>
    )
}

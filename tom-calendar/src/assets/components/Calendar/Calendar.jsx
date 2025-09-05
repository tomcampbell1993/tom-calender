import { Link } from "react-router"
import { useState } from 'react';
import Day from '../Day/Day.jsx'

import './calendar.css'



export default function Calendar() {

    let date = new Date();
    let year = 2025;
    const [month, setMonth] = useState(9);
    let day = 10;

    date.setMonth(month - 1);
    date.setFullYear(year);
    date.setDate(day);

    console.log(date);

    function displayMonth(thisMonth) {
        switch (thisMonth) {
            case 1:
                return "January"
            case 2:
                return "February"
            case 3:
                return "March"
            case 4:
                return "April"
            case 5:
                return "May"
            case 6:
                return "June"
            case 7:
                return "July"
            case 8:
                return "August"
            case 9:
                return "September"
            case 10:
                return "October"
            case 11:
                return "November"
            case 12:
                return "December"
        }
    }



    const daysInMonth = new Date(year, month, 0).getDate();

    function findDay(dayNumber) {
        const thatDay = new Date(year, month - 1, dayNumber).getDay();
        return thatDay
    }

    function createList() {
        const dayList = [];

        for (let i = 0; i < daysInMonth; i++) {
            dayList.push(i);
        }
        return dayList;
    }

    function dayItems() {

        return (
            createList().map(day =>
                <Day currentDay={findDay(day)} dayNumber={day + 1} key={day} />
            ))
    };

    function previousMonth() {
        if (month > 1) {
            setMonth(month - 1);
        }
    }

    function nextMonth() {
        if (month < 12) {
            setMonth(month + 1);
        }
    }

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            <div>
                <Link to='day'>Day</Link>
            </div>
            <div className="month-wrapper">
                <button className="month-button previous" onClick={previousMonth}>&lt;</button>
                <h2>{displayMonth(month)}</h2>
                <button className="month-button next" onClick={nextMonth}>&gt;</button>
            </div>
            <div className="day-wrapper">
                {dayItems()}
            </div>
        </div>
    )
}

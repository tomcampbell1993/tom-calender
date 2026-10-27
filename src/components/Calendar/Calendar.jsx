import { Link } from "react-router"
import { useState, useEffect } from 'react';
import Day from '../Day/Day.jsx'
import loginRegister from '../LoginRegister/LoginRegister.jsx'

import './calendar.css'

export default function Calendar() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function getEvents() {
            const response = await fetch("http://localhost:3001/api/events");
            const data = await response.json();

            //console.log(data);
            setEvents(data);
        }
        getEvents();
    }, []);

    let date = new Date();
    let year = 2026;
    const [month, setMonth] = useState(date.getMonth());
    const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
    let day = 10;

    date.setMonth(month);
    date.setFullYear(year);
    date.setDate(day);

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    function displayMonth(thisMonth) {
        return months[thisMonth];      
    }

    const daysInMonth = new Date(year, month+1, 0).getDate();

    function findDay(dayNumber) {
        const thatDay = new Date(year, month, dayNumber).getDay();
        return thatDay
    }

    function previousMonth() {
        if (month > 0) {
            setMonth(month - 1);
        }
    }

    function nextMonth() {
        if (month < 11) {
            setMonth(month + 1);
        }
    }

    function setMonthDropDown(month) {
        setMonth(month);
        setIsMonthDropdownOpen(false);
    }

    function toggleMonthDropDown() {
        setIsMonthDropdownOpen(previous => !previous);
    }

    function monthDropDown() {
        return (
            <div className="month-dropdown">
                <button className="month-title" onClick={toggleMonthDropDown}>
                    {displayMonth(month)}
                </button>
                {months.map((monthName, index) => (
                    <button key={monthName} className={isMonthDropdownOpen ? "month-dropdown-item" : "month-dropdown-item hidden"}
                        onClick={() => setMonthDropDown(index)}>
                        {monthName}
                    </button>
                ))}
            </div>
        );
    }


    return (
        <div className="calendar">
            <h1>Calendar</h1>
            {loginRegister()}
            <div>
                <Link to='day'>Day</Link>
            </div>
            <div className="month-wrapper">
                <button className="month-button previous" onClick={previousMonth}>&lt;</button>
                {monthDropDown()}
                <button className="month-button next" onClick={nextMonth}>&gt;</button>
            </div>
            <div className="day-wrapper">
                {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(dayNumber => (
                    <Day
                        key={dayNumber}
                        dayNumber={dayNumber}
                        currentDay={new Date(year, month, dayNumber).getDay()}
                    />
                ))}
            </div>
        </div>
    )
}
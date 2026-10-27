import "./Day.css"

export default function Day(props) {

    function formatDay() {
        switch (props.currentDay) {
            case 0:
                return ("Sunday")
            case 1:
                return ("Monday")
            case 2:
                return ("Tuesday")
            case 3:
                return ("Wednesday")
            case 4:
                return ("Thursday")
            case 5:
                return ("Friday")
            case 6:
                return ("Saturday")
        }
    }

    function formatDayNumber() {
        switch (props.dayNumber) {
            case 1:
                return ("st")
            case 11:
                return ("st")
            case 21:
                return ("st")
            case 31:
                return ("st")
            case 2:
                return ("nd")
            case 22:
                return ("nd")
            case 3:
                return ("rd")
            case 23:
                return ("rd")
            default:
                return ("th")
        }
    }

    return (
        <div className='day'>
            {formatDay()} the {props.dayNumber}{formatDayNumber()}
        </div>
    )
}
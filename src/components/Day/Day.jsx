import "./Day.css"

export default function Day(props) {

    function formatDay() {
        switch (props.currentDay) {
            case 0:
                return("monday")
            case 1:
                return("Tuesday")
            case 2:
                return("Wednessday")
            case 3:
                return("Thursday")
            case 4:
                return("Friday")
            case 5:
                return("Saturday")
            case 6:
                return("Sunday")
        }
    }

    function formatDayNumber() {
        switch (props.dayNumber) {
            case 1:
                return("st")
            case 11:
                return("st")
            case 21:
                return("st")
            case 31:
                return("st")
            case 2:
                return("nd")
            case 22:
                return("nd")
            case 3:
                return("rd")
            case 23:
                return("rd")
            default:
                return("th")           
        }
    }

    return (
        <div className='day'>
            Today is {formatDay()} the {props.dayNumber}{formatDayNumber()}
        </div>
    )
}
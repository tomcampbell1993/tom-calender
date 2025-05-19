import "./Day.css"

export default function Day(props) {

    function formatDay() {
        switch (props.currentDay) {
            case 0:
                return("monday")
            case 1:
                return("Tuesday")
            case 2:
                return"Wednessday"
            case 3:
                return"Thursday"
            case 4:
                return"Friday"
            case 5:
                return"Saturday"
            case 6:
                return"Sunday"
        }
    }

    function formatTag(dayText) {

        dayText = props.currentDay

        return dayText
    }


    return (
        <div className='day'>
            Today is {formatDay()}
        </div>
    )
}
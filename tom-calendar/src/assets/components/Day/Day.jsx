import "./Day.css"

export default function Day(props){

    
    return(
        <div className='day'>
            Today is { props.currentDay }
        </div>
    )
}
import { getAllByPlaceholderText } from '@testing-library/react'
import {useState, useEffect} from 'react'

export const DisplayDate = () => {

    const [day, setDay] = useState("")
    const [date, setDate] = useState(null)
    const [month, setMonth] = useState(null)
    const [nameMonth, setNameMonth] = useState('')
    const [year, setYear] = useState(null)


    useEffect(() => {
        getDate()
    })

    function getDate() {
        let newDate = new Date()
        setDate(newDate.getDate())
        setMonth(newDate.getMonth() +1)
        setYear(newDate.getFullYear())
        calculateDay()
        calculateMonth()
    }

    function calculateDay() {
        switch(date) {
            case 0:
                setDay("Sunday")
                break;
            case 1:
                setDay("Monday")
                break;
            case 2:
                setDay("Tuesday")
                break;
            case 3:
                setDay("Wednesday")
                break;
            case 4:
                setDay("Thursday")
                break;
            case 5:
                setDay("Friday")
                break;
            case 6:
                setDay("Saturday")
                break;
            default:
                setDay("Error")
        }
    }

    function calculateMonth() {
        switch(month) {
            case 1:
                setNameMonth("January")
                break;
            case 2:
                setNameMonth("February")
                break;
            case 3:
                setNameMonth("March")
                break;
            case 4:
                setNameMonth("April")
                break;
            case 5:
                setNameMonth("May")
                break;
            case 6:
                setNameMonth("June")
                break;
            case 7:
                setNameMonth("July")
                break;
            case 8:
                setNameMonth("August")
                break;
            case 9:
                setNameMonth("September")
                break;
            case 10:
                setNameMonth("October")
                break;
            case 11:
                setNameMonth("November")
                break;
            case 12:
                setNameMonth("December")
                break;
        }

    }


    return (
        <div>
            <p>{day}</p>
            <p>{nameMonth} {date}, {year}</p>
        </div>
    )
}
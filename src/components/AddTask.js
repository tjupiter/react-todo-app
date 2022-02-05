import { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion"

const AddTask = ({ onAdd, showAddTask }) => {
    const [text, setText] = useState('')
    const [date, setStartDate] = useState(new Date())
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add a task")
            return
        }

        // convert Date object to custom string format

        // should this be a function ?
        const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const selectedDate = date;
        const year = selectedDate.getFullYear();
        const month = String(monthsOfTheYear[selectedDate.getMonth() + 1]);
        const dayOfMonth = String(selectedDate.getDate());
        const dayOfWeek = String(daysOfTheWeek[selectedDate.getDay()]);
        const hour = String(selectedDate.getHours()).padStart(2, "0");
        const minute = String(selectedDate.getMinutes()).padStart(2, "0");

        const customDate = `${hour}:${minute} on ${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

        const day = customDate
        // end of convert
        // probably could've just used this: https://www.npmjs.com/package/dateformat
        // https://moment.github.io/luxon/#/tour


        onAdd({ text, day, reminder })

        setText('')
        setStartDate('')
        setReminder(false)
    }

    const parent = {
        visible: {
            opacity: [0, 1], 
            y:  0,       
            // y:  [-180, -100, -80, -50, -30, 0],            
            transition: { 
                duration: .1, 
                type: "spring" 
            }
        },
        hidden: { 
            opacity: 0, 
            y: -200,
         },
    }

    return (
        <motion.form 
            className="add-form" 
            onSubmit={onSubmit}
            initial="hidden"
            animate="visible"
            variants={parent}
            style={{originY:1}}
            >
            <div className="form-control">
                <label>Task</label>
                <input 
                    type="text" 
                    placeholder="Add Task" 
                    value={text}  
                    onChange={(e) => setText(e.target.value)}
                    ></input>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
               

                <DatePicker
                    selected={date}
                    showTimeSelect
                    dateFormat="Pp"
                    onChange={(date) => setStartDate(date)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type="checkbox" 
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input 
                type="submit" 
                value="Save Task" 
                className="btn btn-block"
            ></input>
        </motion.form>
    )
}

export default AddTask;
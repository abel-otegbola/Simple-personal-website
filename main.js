// Add UTC date and day to page


const addUTCTimeAndDay = () => {
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const day = document.querySelector("#current-day")
    const time = document.querySelector("#current-time")

    setInterval(() => {
        day.textContent = new Date().toLocaleDateString("en-US", { weekday: "long" })
        time.textContent = Date.now()

    }, [1000])
}

addUTCTimeAndDay()
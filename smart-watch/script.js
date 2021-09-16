setInterval(() => {
    let time = new Date()

    document.getElementById("hours").innerText = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    document.getElementById("minutes").innerText = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    document.getElementById("seconds").innerText = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
}, 500)
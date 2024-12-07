function changeTime(){
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezone').textContent = timezone;

    let time = dayjs().format('HH:mm:ss');
    document.getElementById('time').textContent = time;
    
    let date = dayjs().format('dddd, D MMMM, YYYY');
    document.getElementById('date').textContent = date;
}
   
setInterval(changeTime, 1000);

const setClock = () => {
    const second = document.querySelector('.second');
    const minute = document.querySelector('.minute');
    const hour = document.querySelector('.hour');

    const date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    if(hours > 12){
        hours = hours - 12;
    }
    
    console.log(seconds, minutes, hours);

    second.style.transform = `rotate(${seconds * 6}deg)`;
    minute.style.transform = `rotate(${minutes * 6}deg)`;
    hour.style.transform = `rotate(${hours * 30}deg)`;
}
setInterval(setClock, 1000);
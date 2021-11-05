function timerModule() {
    let cs = 0;
    let sec = 0;
    let min = 0;
    

    function delay(t) {
            return setInterval(() => {timeHandler()}, t)
        
    }

    function timeHandler(){
        cs += 1
        if (cs == 100){
            cs = 0
            sec ++
        }
        if(sec == 60){
            sec = 0
            min ++
        }

        time = (min < 10 ? `0` + min : min) + `:` + (sec < 10 ? `0` + sec : sec)   + `:`+ (cs < 10 ? `0` + cs : cs)
        document.querySelector(`h2.timer`).textContent = time
    }

    return{
        delay
    }
}

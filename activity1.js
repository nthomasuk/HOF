const once = () => {
    console.log("Hello Codenation");
}

const multipleTimes = (once, num) => {
    for(i = 0; i < num; i++){
        once();
    }
}
multipleTimes(once,5);
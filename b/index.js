const control_btn = document.querySelector(".panel-player");
const control_flag = document.querySelector(".panel-player b");
const control_start = document.querySelector(".panel-pause");

control_btn.addEventListener("click", ()=>{
    if (control_btn.dataset.status === "playing") {
        control_btn.dataset.status = "pause";
        control_flag.innerHTML = "▶";
        const isStart = control_start.classList.contains("d-none");
        if(isStart) {
            control_start.classList.remove("d-none");
        }

    } else if (control_btn.dataset.status === "pause"){
        control_btn.dataset.status = "playing";
        control_flag.innerHTML = "=";
        control_start.classList.add("d-none");
    }
})
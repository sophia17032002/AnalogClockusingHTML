const body = document.querySelectorAll("main")[0];
let play = true;
document.body.onload = () => {
    setHours();
    updateHands();
    setInterval(updateHands, 1000);
};

function setHours() {
    for (i = 0; i < 12; i++) {
        let temp = "I",
        deg = 0;
        if (i % 3 == 0) {
            deg = -i;
            temp = i;
        }

        body.innerHTML +=`
        <div class="wrap" style="--i: ${i}">
        <div class="labels" style="--j: ${deg}">
        ${temp == 0 ? 12 : temp}
        </div>
        </div>`;
    }
}
function updateHands() {
    const now = new Date(),
    hrs = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    h_deg = (((hrs % 12) + min / 60) * 360) / 12,
    m_deg = ((min + sec / 60) * 360) / 60,
    s_deg = (sec * 360) / 60;

    (hourHand = document.querySelector("#hour")),
    (minHand = document.getElementById("minute")),
    (secHand = document.getElementById("second"));
    hourHand.style.transform = `translate(-50%, -50%) rotate(${h_deg}deg)`;
    minHand.style.transform = `translate(-50%, -50%) rotate(${m_deg}deg)`;
    secHand.style.transform = `translate(-50%, -50%) rotate(${s_deg}deg)`;
}
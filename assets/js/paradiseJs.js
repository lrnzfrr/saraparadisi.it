var psichedelic = true;
var colors = ['red', 'yellow', 'deeppink'];
var i = 0;
var welcomeDiv = document.getElementById("first");
function whaitALittle(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function thunderParty(sleepInt) {
    await whaitALittle(sleepInt);
    welcomeDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            await whaitALittle(sleepInt);
            welcomeDiv.style.backgroundColor = "yellow";
        }

    }
}

while (psichedelic) {
    thunderParty(400);
    i++;
    if (i == 45000) {
        psichedelic = false;
    }
}

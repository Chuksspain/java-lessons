var password = '';//prompt("please enter a new password");

if (password.length >= 6 && password.indexOf(' ') != -1) {
    console.log("VALID PASSWORD")
} else {
    console.log("INCORRECT")
}

const age = 90;
if (age < 5 || age >= 65) {
    console.log("FREE");
} else if (age < 10) {
    console.log("$10")
} else if (age < 65) {
    console.log("$20")
}
/*const FisrtName = '';//prompt("enter your first name");
if (!FisrtName) {
    FisrtName = '';//prompt("TRY AGAIN!!");
}
*/
document.querySelector('#Entry').addEventListener('change', e => {
    let output = document.querySelector('#Output');
    let enterred = Number(e.target.value);
    output.innerHTML = `<br>You just enterred ${enterred}<br>`;
    let now = new Date().getFullYear();
    output.innerHTML += `You're ${enterred++} this year ${now++}<br>`;

    for (let cnt = 3; cnt <= 10; cnt++) {
        output.innerHTML += `You will be ${enterred + cnt} by ${now + cnt}<br>`;
        cnt++;
    }
    // // let cnt = 1;
    // // while (cnt <= 10) {
    // //     output.innerHTML += `You will be ${enterred + cnt} by ${now + cnt} - While Loop<br>`;
    // //     cnt += 2;
    // }
    cnt = 1;
    while (cnt <= 10) {
        output.innerHTML += `You will be ${enterred++} by ${now++} - While Loop<br>`;
        cnt++;
    }

    // for (let i = 1; i <= enterred; i++) {
    //     for (let j = 1; j <= enterred; j++) {
    //         output.innerHTML += i*j;
    //     }
    // }
    console.log(`You just enterred ` + e.target.value);
});
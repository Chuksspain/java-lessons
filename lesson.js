const password = prompt("please enter a new password");

if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD")
} else {
    console.log("PASSWORD TOO SHORT! Must Be 6+ Characters")
}
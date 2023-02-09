
// Function to get the Random Number in the Hex Code 
const getColor = () => {
    
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    // To copy the Hex Code in your Clipboard 
    navigator.clipboard.writeText(randomCode)
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();















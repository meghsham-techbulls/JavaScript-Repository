document.addEventListener('DOMContentLoaded', () => {
    let boxesOnPage = document.querySelectorAll('.box');
    let pageBody = document.querySelector("body");
    boxesOnPage.forEach((box) => {
        box.addEventListener("click", (eventObj) => {

            switch (eventObj.target.id) {
                case "boxRed":
                    pageBody.style.backgroundColor = "red";
                    break;
                case "boxBlue":
                    pageBody.style.backgroundColor = "blue";
                    break;
                case "boxGreen":
                    pageBody.style.backgroundColor = "green";
                    break;
                case "boxYellow":
                    pageBody.style.backgroundColor = "yellow";
                    break;
                case "boxPink":
                    pageBody.style.backgroundColor = "pink";
                    break;
                default:
                    console.log("Unexpected box clicked");
            }
        });
    });
});

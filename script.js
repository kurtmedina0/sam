const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Coffee’s on me, Sam. See you on February 13! ☕😊"

;
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHR3NTVjamJuZTMzNjNnd2N1MGZ2MDQ4ZzJ5MzRrMzN2Y3Z6Z3Z5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SKGo6OYe24EBG/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
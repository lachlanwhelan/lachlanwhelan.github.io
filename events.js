export const flip = () => {
    const projectCards = document.querySelectorAll('.project-body');

    projectCards.forEach(item => {
        item.addEventListener("touchstart", function(){
            item.classList.toggle('card-flip');
        });
    })
} 







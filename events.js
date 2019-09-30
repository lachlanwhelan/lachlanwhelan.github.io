
export const watchForMobile = () => {
    const body = document.querySelector('body');
    const projectCards = document.querySelectorAll('.project-card');

    body.addEventListener("touchstart", function(){

        projectCards.forEach(item => {
            item.classList.remove('project-card');
        })
    })
}


export const flip = () => {
    const projectCards = document.querySelectorAll('.project-body');

    projectCards.forEach(item => {
        item.addEventListener("touchstart", function(){
            item.classList.toggle('card-flip');
        });
    })
    
} 




const submit = document.querySelector('.submit');
const card_content_1 = document.querySelector('.card-1');
const card_content_2 = document.querySelector('.card-hidden');
const ratingBtns = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');


submit.addEventListener('click', onSubmit);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
});

function onSubmit(){
    card_content_1.classList.add('hide');
    score.textContent = stars_score;
    card_content_2.classList.remove('hide');
    //console.log('submit click');
}

function handleRatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('rating-btn')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }

    stars_score = event.target.textContent;
    
}


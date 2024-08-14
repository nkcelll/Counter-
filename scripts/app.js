const incrElement = document.querySelector('.js-btn-incr')
const resetElemet = document.querySelector('.js-btn-reset')
const decrElement = document.querySelector('.js-btn-decr')


function display() {

    let generatingHTML = '';

    let html = `
        <h1 class="text">Counter</h1>
            <h1 class="number js-number-display">3</h1>
            <div class="footer-cont">
                <button class="btn-display js-btn-decr">Decrease</button>
                <button class="btn-display js-btn-reset">Reset</button>
                <button class="btn-display js-btn-incr">Increase</button>
            </div> 
    `;

    generatingHTML += html

    document.querySelector('.js-display').innerHTML = generatingHTML
}

display()
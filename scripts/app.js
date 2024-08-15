function display() {
    let generatingHTML = '';
    let counter = 0
    

    function updateCounter(){
        document.querySelector('.js-number-display').innerText = counter
    }
    

    function calculate() {
        const incrElement = document.querySelector('.js-btn-incr')
        const resetElemet = document.querySelector('.js-btn-reset')
        const decrElement = document.querySelector('.js-btn-decr')

        incrElement.addEventListener('click', () => {
            counter++;
            updateCounter()
        });
        resetElemet.addEventListener('click', () => {
            counter = 0;
            updateCounter()
        });
        decrElement.addEventListener('click', () => {
            counter--;
           updateCounter()
        });
        
    };

    generatingHTML += `
        <h1 class="text">Counter</h1>
        <h1 class="number js-number-display">${counter}</h1>
        <div class="footer-cont">
                <button class="btn-display js-btn-decr">Decrease</button>
                <button class="btn-display js-btn-reset">Reset</button>
                <button class="btn-display js-btn-incr">Increase</button>
        </div> 
    `;

    document.querySelector('.js-display').innerHTML = generatingHTML;

    calculate()
    
    updateCounter()

}
display()

console.log('git practicing 3')




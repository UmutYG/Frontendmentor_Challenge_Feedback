const card_1 = document.getElementById('card-1');
const card_2 = document.getElementById('card-2');

const numbers = document.querySelectorAll('.card-number');

document.querySelector('.button').addEventListener('click', () => {
    card_1.classList.add('d-none');
    card_2.classList.remove('d-none');
    card_2.classList.add('d-block');

    const selectedNum = document.querySelector('.active').textContent;
    document.querySelector('#summary').textContent = `You selected ${selectedNum} out of 5`
});

const activeHandler = (event) => {
    numbers.forEach((number) => number.classList.remove('active'));
    event.target.classList.add('active');
};

numbers.forEach((number) => number.addEventListener('click', activeHandler));

const btn = document.getElementById('myButton');
const colors = ['yellow', 'green', 'red'];
let index = 0;

btn.addEventListener('click', function onClick() {
        btn.style.backgroundColor = colors[index];
        btn.style.color = 'black';
        index = index >= colors.length -1 ? 0 : index + 1;
})

function changeColor() {
    btn.style.backgroundColor = colors[index];
    btn.style.color = 'black';
    index = index >= colors.length -1 ? 0 : index + 1;
}

setInterval(changeColor, 10000);

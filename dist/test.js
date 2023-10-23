const button = document.querySelector('button');
const input = document.querySelector('input');
function add(num1, num2) {
    console.log(num1 + num2);
}
if (button && input) {
    button.addEventListener('click', () => {
        add(5, 5);
    });
}
console.log("hello");
//# sourceMappingURL=test.js.map
const inputA = document.querySelector(".calc-input-a");
const inputB = document.querySelector(".calc-input-b");
const selectOperation = document.querySelector(".calc-operations");
const button = document.querySelector(".calc-btn");
const output = document.querySelector(".calc-output");

button.addEventListener ('click', function() {
        const a = Number(inputA.value);
        const b = Number(inputB.value);
        const operation = selectOperation.value;

        const result = calculate(
            a,
            b,
            operation
        );

        output.innerHTML= result;
        
        console.log(result);
    });
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perfom action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
// conditional statement
if (answere.operator === "Addition") {
    console.log(answere.firstNumber + answere.secondNumber);
}
else if (answere.operator === "Subtraction") {
    console.log(answere.firstNumber - answere.secondNumber);
}
else if (answere.operator === "Multiplication") {
    console.log(answere.firstNumber * answere.secondNumber);
}
else if (answere.operator === "Division") {
    console.log(answere.firstNumber % answere.secondNumber);
}
else {
    console.log("please select valid operator");
}

const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("\n\n***************************************************");
console.log("\tWelcome to the Quiz of Automobiles. ");
console.log("***************************************************");
var name = "";
r1.question("\nPlease enter username : ", (temp) => {
    if (temp === ""){
        name = "unregistered_user"
    }else{
        name = temp;
    }
    console.log("\n===============================================");
    console.log("\tWelcome " + name.toUpperCase() + ".");
    console.log("===============================================");
    quiz();
});

var i = 0;
var score = 0;
const question = ["\nQ : RPM stands for ?", "\nQ : Which of the following is not a part of the engine assembly ?", "\nQ : Pick out the odd one with respect to their function :", "\nQ : Name the bike which is named after Japanese bird Peregrine Falcona ?", "\nQ : What is the full form of ABS ?"];
const option = [
    ["Revolutions per mile.", "Rotations per mile.", "Revolutions per minute.", "Rotations per minute."],
    ["Intake Valve.", "Crank Shaft.", "Piston.", "Propeller Shaft."],
    ["Tyres.", "Crankshaft.", "Fog lamp.", "Camshaft."],
    ["Hornet.", "Hayabusa.", "Fireblade.", "Kizashi."],
    ["Anti-lock Braking System.", "Anti Braking System.", "Anti-lock Braking Solution.", "All lock Braking System."]
];

var quiz = () => {
    if (i === 0) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("\nAnswer : ", (ans) => {
            if (ans === "3") {
                score += 5;
                console.log("\nRight Answer." + "\tYour Score : " + score);
                i += 1;
                quiz();
            }else if(ans === ""){
                console.log("\nQuestion skipped !!!" + "\nCorrect answer is : " + option[i][2] + "\tYour Score : " + score);
                i += 1;
                quiz();
            } else {
                score -= 2;
                console.log("\nWrong answer !!!" + "\nCorrect answer is : " + option[i][2] + "\tYour Score : " + score);
                i += 1;
                quiz();
            }

        });
    } else if (i === 1) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("\nAnswer : ", (ans) => {
            if (ans === "4") {
                score += 5;
                console.log("\nRight Answer." + "\tYour Score : " + score);
                i += 1;
                quiz();
            }else if(ans === ""){
                console.log("\nQuestion skipped !!!" + "\nCorrect answer is : " + option[i][2] + "\tYour Score : " + score);
                i += 1;
                quiz();
            } else {
                score -= 2;
                console.log("\nWrong answer !!!" + "\nCorrect answer is : " + option[i][3] + "\tYour Score : " + score);
                i += 1;
                quiz();
            }

        });
    } else if (i === 2) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("\nAnswer : ", (ans) => {
            if (ans === "3") {
                score += 5;
                console.log("\nRight Answer." + "\tYour Score : " + score);
                i += 1;
                quiz();
            }else if(ans === ""){
                console.log("\nQuestion skipped !!!" + "\nCorrect answer is : " + option[i][2] + "\tYour Score : " + score);
                i += 1;
                quiz();
            } else {
                score -= 2;
                console.log("\nWrong answer !!!" + "\nCorrect answer is : " + option[i][2] + "\tYour Score : " + score);
                i += 1;
                quiz();
            }

        });
    } else if (i === 3) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("\nAnswer : ", (ans) => {
            if (ans === "2") {
                score += 5;
                console.log("\nRight Answer." + "\tYour Score : " + score);
                i += 1;
                quiz();
            }else if(ans === ""){
                console.log("\nQuestion skipped !!!" + "\nCorrect answer is : " + option[i][2] + "\tYour Score : " + score);
                i += 1;
                quiz();
            } else {
                score -= 2;
                console.log("\nWrong answer !!!" + "\nCorrect answer is : " + option[i][1] + "\tYour Score : " + score);
                i += 1;
                quiz();
            }

        });
    } else if (i === 4) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("\nAnswer : ", (ans) => {
            if (ans === "1") {
                score += 5;
                console.log("\nRight Answer." + "\tYour Score : " + score);
                i += 1;
                quiz();
            }else if(ans === ""){
                console.log("\nQuestion skipped !!!" + "\nCorrect answer is : " + option[i][2] + "\tYour Score : " + score);
                i += 1;
                quiz();
            } else {
                score -= 2;
                console.log("\nWrong answer !!!" + "\nCorrect answer is : " + option[i][0] + "\tYour Score : " + score);
                i += 1;
                quiz();
            }

        });
    } else {
        console.log("\n==============================================================");
        console.log("\t\t\tRESULT");
        console.log("==============================================================");
        console.log("\n" + name.toUpperCase() + "'s Final Score is : " + score + "/" + (question.length * 5) + "\n\n");
        r1.close();
    }
}
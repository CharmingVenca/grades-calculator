function calculateGrade(result, inputs, i = 0) {
    if (i > 101) {
        inputs.results.innerText = `Tak z tohohle se už nedostaneš...`;
        return;
    }

    result = getAverage(inputs.gradeAvg, inputs.gradeTotalWeight, i, inputs.nextGradeWeight);

    if (result >= inputs.targetGradePercentage) {
        inputs.results.innerText = `Potřebuješ nejméně ${i}`;
        return;
    }

    return calculateGrade(result, inputs, i + 1);
}

function parseNumberInput(value) {
    value = value.replace(',', '.');
    return parseFloat(value);
}

function getMinGrade() {
    let inputs = {
        gradeAvg: parseNumberInput(document.getElementById('grade-avg-1').value),
        gradeTotalWeight: parseNumberInput(document.getElementById('grade-total-weight-1').value),
        nextGradeWeight: parseNumberInput(document.getElementById('next-grade-weight-1').value),
        targetGradePercentage: parseNumberInput(document.getElementById('target-grade-percentage').value),
        results: document.querySelector('.minGradeResult')
    };

    if (inputs.gradeAvg && inputs.gradeTotalWeight && inputs.nextGradeWeight && inputs.targetGradePercentage) {
        calculateGrade(0, inputs);
    } else {
        inputs.results.innerText = `Prosím vyplň všechny pole.`;
    }
}

function getAverage() {
    let inputs = {
        gradeAvg: parseNumberInput(document.getElementById('grade-avg-2').value),
        gradeTotalWeight: parseNumberInput(document.getElementById('grade-total-weight-2').value),
        nextGradeWeight: parseNumberInput(document.getElementById('next-grade-weight-2').value),
        nextGrade: parseNumberInput(document.getElementById('next-grade').value),
        results: document.querySelector('.new-average')
    };

    function calculateAverage(inputs) {
        return (inputs.gradeAvg * inputs.grade + inputs.nextGrade * inputs.nextGradeWeight) / inputs.nextGradeWeight + inputs.gradeTotalWeight;
    }

    if (inputs.gradeAvg && inputs.gradeTotalWeight && inputs.nextGradeWeight && inputs.targetGradePercentage) {
        inputs.results.innerText = `Potřebuješ nejméně ${calculateAverage(inputs)}`;
    } else {
        inputs.results.innerText = `Prosím vyplň všechny pole.`;
    }
}

function getAverage(gradeAvg = 0, gradeTotalWeight = 0, i = 0, nextGradeWeight = 0) {
    return ((gradeAvg * gradeTotalWeight + i * nextGradeWeight) / (gradeTotalWeight + nextGradeWeight));
}
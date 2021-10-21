function showOperation(){
    const calculatorMemoryArray = calc.getCalculatorMemoryArray()
    document.querySelector('#total span#operation').innerText = calculatorMemoryArray.join(' ')
}

function resetTags(){
    document.querySelector('#total span#equal').innerText = ''
    document.querySelector('#total span#result').innerText = ''
}


function operationValues() {
    const number = document.querySelector('#number').value
    calc.enter(number)
    document.querySelector('#number').value = ''
    showOperation()
    resetTags()
    }


    function changeTotal(){
        result = calc.equals()
        document.querySelector('#total span#equal').innerText = ' = '
        document.querySelector('#total span#result').innerText = result
    }


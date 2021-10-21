let calculatorModule=(() =>{
     
    let _calculatorArray = [];
    let _calculatorArray2 =[];
    let _calculatorMemoryArray = [];
    let _memoryArray = [];
    const plus = (x,y) => x+y;
    const minus = (x,y) => x-y;
    const division = (x,y) => x/y;
    const multiplication = (x,y) => x*y;
    const calcHandler={
        '+': plus,
        '-': minus,
        '/': division,
        '*': multiplication
    }

    const _operation = (x,operat,y)=>{
        x = parseInt(100*x)/100
        y = parseInt(100*y)/100
        if((isNaN(x)) || (isNaN(y)) ){return 'Número Inválido'}
        if(calcHandler[operat]){
            return calcHandler[operat](x,y)
        }else{
            return 'Operador inválido'
        }
    }

    const enter = (val) => {
        _calculatorArray.push(val)
        _calculatorMemoryArray.push(val)
        if(_calculatorArray.length > 3){
            let [elem1, elem2, elem3, elem4] = _calculatorArray
            if(_calculatorArray2.length != 0){
                _calculatorArray2.push(val)
                let [el1, el2, el3] = _calculatorArray2;

                const operation = _operation(el1,el2,el3)
                _calculatorArray2 = []
                _calculatorArray = [elem1, elem2, operation]
            }else{
                
                if(elem4 == '*' || elem4 == '/'){
                    _calculatorArray2 = [elem3, elem4]
                    _calculatorArray.pop()
                }else{
                    _calculatorArray=[_operation(elem1,elem2,elem3), elem4]
                }
            }               
        }
        return {_calculatorArray,
                _calculatorMemoryArray,
                _calculatorArray2                
                }
        }

    const equals = () => {

        let [elem1, elem2, elem3] = _calculatorArray
        
        if(typeof elem1 === 'undefined' || typeof elem2 === 'undefined' || typeof elem3 === 'undefined'){
            return 'Faltam dados para realizar a operação, utilize a função enter()';
        }
        const op = _operation(elem1, elem2, elem3)
        if(typeof op == 'number'){
            _calculatorMemoryArray.push('= ', op.toString())
            _memoryArray.push(_calculatorMemoryArray)
        }
        _calculatorArray=[]
        _calculatorMemoryArray=[]
        return op
    }

    const list = () => _memoryArray

    const reset = () => _memoryArray.length = 0

    const getCalculatorMemoryArray = () => _calculatorMemoryArray


    
    return{
        enter,
        equals,
        list,
        reset,
        getCalculatorMemoryArray,
    }
})

const calc = calculatorModule()
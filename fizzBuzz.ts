function fizzBuzz(startNumber: number, endNumber: number): void {
    for (let number = startNumber; number <= endNumber; number++) {
        let stringValue = '';
        let isFizz = number % 3 == 0;
        let isBuzz = number % 5 == 0;
        if (isFizz && isBuzz) { 
            stringValue = 'FizzBuzz'; // Espace de fin existant dans l'énoncé “FizzBuzz “, semble plutôt être une typo qu'un besoin
        } else if (isFizz) { 
            stringValue = 'Fizz';  
        } else if (isBuzz) {
            stringValue = 'Buzz';
        }        
        console.log(stringValue || number);
    }
}

export default fizzBuzz;

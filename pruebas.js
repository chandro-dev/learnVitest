export function sumar(a, b) {
        if (Number.isNaN(a) | Number.isNaN(b)) {
                throw new Error('Esto no es un numero');
        }
        if((typeof a) == 'string'){
                throw new Error("A no puede ser un string");
        }
        if((typeof b) == 'string'){
                throw new Error("B no puede ser un string");
        }
        return a + b;
}

export function toString(variable){


        if(variable==null){
                throw new Error("La variable no puede ser nula")
        }

        return variable.toString
}
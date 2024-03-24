import { expect, describe, test } from 'vitest'
import {sumar,toString} from '../pruebas'
describe('sumar', () => {
    test('Debe ser una funcion', () => {
        expect(typeof sumar).toBe("function");
    })
    test('Deberia ser un numero', () => {
        expect(() => sumar(NaN,NaN)).toThrow("Esto no es un numero");
    })

    test('Deberia sumar dos valores', () => {
        expect(sumar(1,2)).toBe(3);
    })

    test('El primer parametro debe ser un number', () => {
        expect(()=>sumar('aaaa',2)).toThrow('A no puede ser un string');
    })
    test('El segundo parametro debe ser un number', () => {
        expect(()=>sumar(2,'ss')).toThrow('B no puede ser un string');
    })
})
describe ('toString',()=>{

    test('No debe aceptar nulos',()=>{
        expect(()=>toString(null)).throw('La variable no puede ser nula');
    });
    test('Convertir cualquier parametro en nulos',()=>{
        expect(String(3)).toBeTypeOf('boolean')
    });

})
import {potencia} from './potencia';

describe('potencia', () =>{
    it('should return the first input number raised to the power of the second input number', () => {
        const result = potencia(2, 3);
        expect(result).toBe(8);
    })
})

import {suma} from './suma';

describe('suma', () =>{
    it('should return the sum of the two input numbers', () => {
        const result = suma(1, 2);
        expect(result).toBe(1 + 2);
    })
})

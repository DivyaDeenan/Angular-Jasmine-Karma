import { greet } from './greet';

describe('greet', () => {
    it('should return name', () =>{
        const result = greet('Divya');
        expect(result).toContain('Divya');
    });
});    
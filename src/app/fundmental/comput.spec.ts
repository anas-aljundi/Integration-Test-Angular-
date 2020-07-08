import { comput } from './comput';

describe('compute', () => {
    it('should return 0 if the input negative', () => {
        const result = comput(-1);
        expect(result).toBe(0);
    });
    it('should return more than 1 if the input positive', () => {
        const poResult = comput(2);
        expect(poResult).toBeGreaterThan(0);
    });
});

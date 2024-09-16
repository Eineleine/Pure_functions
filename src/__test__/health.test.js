import { isHealth } from '../health.js';

test('should critical', () => {

    const name = 'маг';
    const health = 7;
    const result = isHealth(name, health);
    
    expect(result).toBe('critical');
})
test('should healthy', () => {
    const name = 'маг';
    const health = 90;
    const result = isHealth(name, health);

    expect(result).toBe('healthy');
})
test('should wounded', () => {
    const name = 'маг';
    const health = 35;
    const result = isHealth(name, health);
    
    expect(result).toBe('wounded');
})
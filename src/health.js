let output = '';

export function isHealth(name, health) {
    
    if (health < 15) {
        output = 'critical';
    } else if (health > 50) {
        output = 'healthy';
    } else {
        output = 'wounded';
    }
    return output;
}


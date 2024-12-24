
require('dotenv').config();
const { execSync } = require('child_process');

describe('Run Tests', function () {
    this.timeout(60000);

    it('Run Cucumber Tests', () => {
        execSync('npx cucumber-js', { stdio: 'inherit' });
    });
});

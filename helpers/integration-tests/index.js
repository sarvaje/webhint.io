const { runStaticTests } = require('./staticUrls');
const { runScannerTest } = require('./scanner');

console.log('Integration tests are running...');

const runIntegrationTests = async () => {
    let error = false;

    for (const test of [runStaticTests, runScannerTest]) {
        const errorFound = await test();

        if (errorFound) {
            error = true;
        }
    }

    console.log(`${
        error ?
            '🚨 Integration tests completed with errors.' :
            '🏁 Integration tests completed successfully!'
    }`);
};

runIntegrationTests();
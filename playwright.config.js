const { defineConfig } = require('@playwright/test');
timeout:  120000,
   retries: 2,
   workers: 1,
module.exports = defineConfig({
    use: {
        video: 'retain-on-failure', // Record videos for failed tests only. Use 'on' to record for all tests.
        screenshot: 'only-on-failure', // Optional: Capture screenshots on failure.
        trace: 'on-first-retry', // Optional: Record trace for debugging.
    },
    reporter: [
        ['html', { open: 'never' }], // Generate an HTML report, but don't auto-open it.
    ],
    outputDir: 'test-results/', // Directory to store videos and other test artifacts.
});

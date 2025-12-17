const fs = require('fs');
const path = require('path');

// Clean Angular test cache
const cacheDir = path.join(__dirname, '.angular', 'cache');

if (fs.existsSync(cacheDir)) {
  console.log('Cleaning Angular test cache...');
  fs.rmSync(cacheDir, { recursive: true, force: true });
  console.log('Test cache cleaned successfully!');
} else {
  console.log('No test cache found to clean.');
}

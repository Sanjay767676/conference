const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npx tsc --noEmit', { encoding: 'utf8' });
  fs.writeFileSync('build_output.txt', output || 'Success!');
} catch (error) {
  fs.writeFileSync('build_output.txt', error.stdout || error.message);
}

try {
  const viteOutput = execSync('npx vite build', { encoding: 'utf8' });
  fs.writeFileSync('vite_output.txt', viteOutput || 'Vite Success!');
} catch (error) {
  fs.writeFileSync('vite_output.txt', error.stdout || error.message);
}

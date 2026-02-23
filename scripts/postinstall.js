#!/usr/bin/env node
'use strict';
const { execSync } = require('child_process');

console.log('\n📦 Installing additional dependencies...');
try {
    execSync("npm i -g @openai/codex", { stdio: 'inherit' });
    console.log('\n✔ Dependencies installed successfully.\n');
} catch (e) {
    console.log('\n⚠ Optional dependency installation had warnings (continuing)\n');
}

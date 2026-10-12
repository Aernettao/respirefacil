// Copia o index.html para a pasta www/ (usada pelo Capacitor)
const fs = require('fs');
fs.mkdirSync('www', { recursive: true });
fs.copyFileSync('index.html', 'www/index.html');
console.log('index.html copiado para www/');

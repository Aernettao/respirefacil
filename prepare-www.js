// Prepara a pasta www/ para o APK.
// Tira as imagens (base64) de dentro do index.html e salva como arquivos separados.
// Isso deixa o app MUITO mais leve para abrir no celular. O index.html original não é alterado.
const fs = require('fs');
const crypto = require('crypto');

let html = fs.readFileSync('index.html', 'utf8');
const antes = Buffer.byteLength(html);

fs.rmSync('www', { recursive: true, force: true });
fs.mkdirSync('www/img', { recursive: true });

const feitos = new Map();
html = html.replace(
  /data:image\/(png|webp|jpeg|jpg|gif);base64,([A-Za-z0-9+\/=]+)/g,
  (todo, tipo, b64) => {
    if (b64.length < 3000) return todo; // imagens pequenas ficam no lugar
    const ext = tipo === 'jpeg' ? 'jpg' : tipo;
    const hash = crypto.createHash('md5').update(b64).digest('hex').slice(0, 12);
    const nome = `img/${hash}.${ext}`;
    if (!feitos.has(hash)) {
      fs.writeFileSync('www/' + nome, Buffer.from(b64, 'base64'));
      feitos.set(hash, nome);
    }
    return nome;
  }
);

fs.writeFileSync('www/index.html', html);
console.log(
  `index.html: ${(antes / 1048576).toFixed(1)} MB -> ${(Buffer.byteLength(html) / 1048576).toFixed(2)} MB; ` +
  `${feitos.size} imagens separadas em www/img`
);

const sharp = require('sharp');
const fs = require('fs');

if (process.argv.length < 4) {
  console.error('Uso: node make-favicons.js <input-path> <output-prefix>');
  console.error('Ex: node make-favicons.js img/source.png favicon');
  process.exit(1);
}

const input = process.argv[2];
const prefix = process.argv[3];

async function make() {
  if (!fs.existsSync(input)) {
    console.error('Arquivo de entrada não encontrado:', input);
    process.exit(2);
  }

  await sharp(input).resize(32, 32, {fit: 'cover'}).png().toFile(`img/${prefix}-32.png`);
  await sharp(input).resize(16, 16, {fit: 'cover'}).png().toFile(`img/${prefix}-16.png`);
  await sharp(input).resize(180, 180, {fit: 'cover'}).png().toFile(`img/${prefix}-180.png`);
  await sharp(input).resize(256, 256, {fit: 'cover'}).png().toFile(`img/${prefix}-256.png`);

  console.log('PNGs gerados: img/' + prefix + '-16.png, -32.png, -180.png, -256.png');
  console.log('Para gerar .ico, use ImageMagick:');
  console.log(`magick convert img/${prefix}-16.png img/${prefix}-32.png img/${prefix}-256.png img/${prefix}.ico`);
}

make().catch(err => { console.error(err); process.exit(3); });

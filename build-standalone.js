import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Начинаем сборку автономных HTML файлов...\n');

console.log('📦 Шаг 1: Сборка через Vite...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Ошибка при сборке:', error.message);
  process.exit(1);
}

console.log('\n📝 Шаг 2: Создание автономных HTML файлов...');

const distDir = path.join(__dirname, 'dist');
const standaloneDir = path.join(__dirname, 'standalone-html');

if (fs.existsSync(standaloneDir)) {
  fs.rmSync(standaloneDir, { recursive: true, force: true });
}
fs.mkdirSync(standaloneDir, { recursive: true });

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

let cssContent = '';
let jsContent = '';

const cssMatches = indexHtml.matchAll(/<link[^>]*href="([^"]*\.css)"[^>]*>/g);
for (const match of cssMatches) {
  const cssPath = path.join(distDir, match[1]);
  if (fs.existsSync(cssPath)) {
    cssContent += fs.readFileSync(cssPath, 'utf-8');
  }
}

const jsMatches = indexHtml.matchAll(/<script[^>]*src="([^"]*\.js)"[^>]*>/g);
for (const match of jsMatches) {
  const jsPath = path.join(distDir, match[1]);
  if (fs.existsSync(jsPath)) {
    jsContent += fs.readFileSync(jsPath, 'utf-8');
  }
}

console.log(`   CSS размер: ${(cssContent.length / 1024).toFixed(2)} KB`);
console.log(`   JS размер: ${(jsContent.length / 1024).toFixed(2)} KB`);

function convertImageToBase64(imagePath) {
  if (!fs.existsSync(imagePath)) return null;
  
  const ext = path.extname(imagePath).toLowerCase();
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  };
  
  const mimeType = mimeTypes[ext] || 'image/jpeg';
  const imageBuffer = fs.readFileSync(imagePath);
  const base64 = imageBuffer.toString('base64');
  
  return `data:${mimeType};base64,${base64}`;
}

const assetsDir = path.join(distDir, 'assets');
const imageAssets = {};

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'].includes(ext)) {
      const filePath = path.join(assetsDir, file);
      const base64 = convertImageToBase64(filePath);
      if (base64) {
        imageAssets[`/assets/${file}`] = base64;
        imageAssets[`assets/${file}`] = base64;
      }
    }
  });
  console.log(`   📷 Найдено ${Object.keys(imageAssets).length / 2} изображений для встраивания`);
}

let modifiedCss = cssContent;
Object.entries(imageAssets).forEach(([path, base64]) => {
  modifiedCss = modifiedCss.replace(new RegExp(path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), base64);
});

const pages = [
  { name: 'index', title: 'Дед Мороз и Снегурочка - Новогодние праздники для детей', route: '' },
  { name: 'programs', title: 'Программы - Дед Мороз и Снегурочка', route: 'programs' },
  { name: 'characters', title: 'Персонажи - Дед Мороз и Снегурочка', route: 'characters' },
  { name: 'prices', title: 'Цены - Дед Мороз и Снегурочка', route: 'prices' },
  { name: 'gallery', title: 'Галерея - Дед Мороз и Снегурочка', route: 'gallery' },
  { name: 'reviews', title: 'Отзывы - Дед Мороз и Снегурочка', route: 'reviews' },
  { name: 'contacts', title: 'Контакты - Дед Мороз и Снегурочка', route: 'contacts' }
];

console.log('\n📄 Создание автономных HTML файлов:');

pages.forEach(page => {
  const htmlContent = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="Профессиональные Дед Мороз и Снегурочка на дом в Москве. Новогодние программы для детей от 2 до 12 лет. Качественные костюмы, интерактивные программы, выезд по всей Москве.">
  <style>${modifiedCss}</style>
</head>
<body>
  <div id="root"></div>
  <script>window.__INITIAL_ROUTE__ = '/${page.route}';</script>
  <script type="module">${jsContent}</script>
</body>
</html>`;

  const fileName = page.name === 'index' ? 'index.html' : `${page.name}.html`;
  const filePath = path.join(standaloneDir, fileName);
  fs.writeFileSync(filePath, htmlContent);
  
  const fileSize = (fs.statSync(filePath).size / 1024).toFixed(2);
  console.log(`   ✅ ${fileName} (${fileSize} KB)`);
});

const totalSize = fs.readdirSync(standaloneDir)
  .reduce((sum, file) => {
    const filePath = path.join(standaloneDir, file);
    return sum + fs.statSync(filePath).size;
  }, 0);

console.log('\n✨ Готово! Автономные HTML файлы находятся в папке: standalone-html/');
console.log(`\n📊 Общий размер: ${(totalSize / 1024 / 1024).toFixed(2)} MB (${pages.length} файлов)`);
console.log('\n📋 Структура:');
console.log('   standalone-html/');
console.log('   ├── index.html (полностью автономный)');
console.log('   ├── programs.html (полностью автономный)');
console.log('   ├── characters.html (полностью автономный)');
console.log('   ├── prices.html (полностью автономный)');
console.log('   ├── gallery.html (полностью автономный)');
console.log('   ├── reviews.html (полностью автономный)');
console.log('   └── contacts.html (полностью автономный)');
console.log('\n💡 Каждый файл содержит весь CSS, JS и изображения внутри себя');
console.log('💡 Файлы можно открывать и распространять независимо друг от друга');
console.log('💡 Работают без интернета и без сервера');

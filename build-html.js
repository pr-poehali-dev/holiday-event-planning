import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Начинаем сборку проекта в HTML...\n');

console.log('📦 Шаг 1: Сборка через Vite...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Ошибка при сборке:', error.message);
  process.exit(1);
}

console.log('\n📝 Шаг 2: Создание отдельных HTML файлов...');

const distDir = path.join(__dirname, 'dist');
const htmlDistDir = path.join(__dirname, 'html-build');

if (fs.existsSync(htmlDistDir)) {
  fs.rmSync(htmlDistDir, { recursive: true, force: true });
}
fs.mkdirSync(htmlDistDir, { recursive: true });

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const cssMatch = indexHtml.match(/<link[^>]*href="([^"]*\.css)"[^>]*>/);
const jsMatch = indexHtml.match(/<script[^>]*src="([^"]*\.js)"[^>]*>/);

let cssFile = null;
let jsFile = null;

const cssMatches = indexHtml.matchAll(/<link[^>]*href="([^"]*\.css)"[^>]*>/g);
for (const match of cssMatches) {
  cssFile = match[1];
}

const jsMatches = indexHtml.matchAll(/<script[^>]*src="([^"]*\.js)"[^>]*>/g);
for (const match of jsMatches) {
  jsFile = match[1];
}

console.log(`   CSS файл: ${cssFile || 'не найден'}`);
console.log(`   JS файл: ${jsFile || 'не найден'}`);

const assetsDir = path.join(distDir, 'assets');
const htmlAssetsDir = path.join(htmlDistDir, 'assets');

if (fs.existsSync(assetsDir)) {
  fs.mkdirSync(htmlAssetsDir, { recursive: true });
  
  const files = fs.readdirSync(assetsDir);
  files.forEach(file => {
    fs.copyFileSync(
      path.join(assetsDir, file),
      path.join(htmlAssetsDir, file)
    );
  });
  console.log('   ✅ Ресурсы скопированы в assets/');
}

const pages = [
  { name: 'index', title: 'Дед Мороз и Снегурочка - Новогодние праздники для детей', route: '' },
  { name: 'programs', title: 'Программы - Дед Мороз и Снегурочка', route: 'programs' },
  { name: 'characters', title: 'Персонажи - Дед Мороз и Снегурочка', route: 'characters' },
  { name: 'prices', title: 'Цены - Дед Мороз и Снегурочка', route: 'prices' },
  { name: 'gallery', title: 'Галерея - Дед Мороз и Снегурочка', route: 'gallery' },
  { name: 'reviews', title: 'Отзывы - Дед Мороз и Снегурочка', route: 'reviews' },
  { name: 'contacts', title: 'Контакты - Дед Мороз и Снегурочка', route: 'contacts' }
];

console.log('\n📄 Создание HTML файлов:');

pages.forEach(page => {
  const htmlContent = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="Профессиональные Дед Мороз и Снегурочка на дом в Москве. Новогодние программы для детей от 2 до 12 лет. Качественные костюмы, интерактивные программы, выезд по всей Москве.">
  ${cssFile ? `<link rel="stylesheet" href="${cssFile}">` : ''}
</head>
<body>
  <div id="root"></div>
  <script>window.__INITIAL_ROUTE__ = '/${page.route}';</script>
  ${jsFile ? `<script type="module" src="${jsFile}"></script>` : ''}
</body>
</html>`;

  const fileName = page.name === 'index' ? 'index.html' : `${page.name}.html`;
  fs.writeFileSync(path.join(htmlDistDir, fileName), htmlContent);
  console.log(`   ✅ ${fileName}`);
});

const faviconPath = path.join(distDir, 'favicon.ico');
if (fs.existsSync(faviconPath)) {
  fs.copyFileSync(faviconPath, path.join(htmlDistDir, 'favicon.ico'));
  console.log('   ✅ favicon.ico');
}

console.log('\n✨ Готово! HTML файлы находятся в папке: html-build/');
console.log('\n📋 Структура:');
console.log('   html-build/');
console.log('   ├── index.html');
console.log('   ├── programs.html');
console.log('   ├── characters.html');
console.log('   ├── prices.html');
console.log('   ├── gallery.html');
console.log('   ├── reviews.html');
console.log('   ├── contacts.html');
console.log('   └── assets/');
console.log('       ├── *.css (общий стиль)');
console.log('       ├── *.js (общий скрипт)');
console.log('       └── * (другие ресурсы)');
console.log('\n💡 Для просмотра откройте любой HTML файл в браузере');
console.log('💡 Все страницы используют общие CSS и JS из папки assets/');
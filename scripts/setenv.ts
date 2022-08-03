import { writeFile, readFileSync, existsSync } from 'fs';
import { join } from 'path'

const templateFile = join(process.cwd(), 'src/environments/environment.template');
const targetPath = join(process.cwd(), 'src/environments/environment.ts');

if (!existsSync('.env')) {
  throw 'Отсутствует .env файл';
}

const dotenv = require('dotenv').config('')

let template = readFileSync(templateFile, 'utf8');

const keys = Object.keys(dotenv.parsed);

keys.map(key => {
  template = template.replace(`\${${key}}`, dotenv.parsed[key]);
});

writeFile(targetPath, template, function (err: any) {
   if (err) {
      console.log(err);
   }

  console.log(`Wrote variables to ${targetPath}`);
});

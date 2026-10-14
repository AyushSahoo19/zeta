import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
const files = ['app.js', 'data.js', 'domain-content.js', 'learning-paths.js', 'course-catalog.js', 'courses.js'];
for (const file of files) execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' });
const context = { URL };
context.window = context;
vm.createContext(context);
for (const file of ['data.js', 'domain-content.js', 'learning-paths.js', 'course-catalog.js']) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
}
const domains = context.ZETA_CATALOG.domains;
assert.equal(domains.length, 102);
assert.equal(new Set(domains.map(d => d.id)).size, domains.length);
const checkURL = value => {
  const url = new URL(value);
  assert.equal(url.protocol, 'https:');
  assert.equal(url.username + url.password, '');
};
for (const domain of domains) {
  assert.ok(context.ZETA_DOMAIN_CONTENT[domain.id]?.about);
  const path = context.ZETA_LEARNING_PATHS[domain.id];
  assert.equal(path.stages.length, 4);
  for (const stage of path.stages) {
    assert.ok(stage.resources.length && stage.exercise && stage.checkpoint);
    stage.resources.forEach(r => checkURL(r.url));
  }
  domain.resources.forEach(r => checkURL(r.url));
}
const courses = context.ZETA_COURSE_CATALOG.courses;
assert.equal(courses.length, 29);
assert.equal(new Set(courses.map(c => c.id)).size, courses.length);
assert.equal(new Set(courses.map(c => c.category)).size, 10);
for (const course of courses) {
  assert.ok(domains.some(d => d.id === course.primaryDomainId));
  assert.ok(course.modules.length >= 4);
  assert.equal(new Set(course.modules.map(m => m.id)).size, course.modules.length);
  for (const module of course.modules) {
    assert.ok(module.resources.length && module.checkpoint && module.practice);
    module.resources.forEach(r => checkURL(r.url));
  }
}
const html = fs.readFileSync('index.html', 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const path = match[1].split('?')[0];
  if (!path.startsWith('https:')) assert.ok(fs.existsSync(path), `Missing asset: ${path}`);
}
console.log(`Validated ${domains.length} domains, ${courses.length} courses, and ${courses.reduce((n,c) => n + c.modules.length, 0)} modules.`);


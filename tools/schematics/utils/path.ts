import { Schema } from '@schematics/angular/component/schema';
import * as path from 'path';

export function modulePath(schema: Schema) {
  return path.join('apps', schema.project, 'src', 'app', 'dashboard');
}

export function joinPath(schema: Schema) {
  return path.join(
    'apps',
    schema.project,
    'src',
    'app',
    'dashboard',
    schema.name
  );
}

export function joinLibPath(schema: Schema) {
  return path.join('libs', schema.project, 'src', 'lib', schema.name);
}

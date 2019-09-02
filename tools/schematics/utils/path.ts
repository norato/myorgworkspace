import { Schema } from '@schematics/angular/component/schema';
import * as path from 'path';

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

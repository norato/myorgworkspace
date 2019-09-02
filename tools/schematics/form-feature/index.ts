import { chain, Rule } from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';
import { Schema } from '@schematics/angular/component/schema';
import { joinPath } from '../utils/path';

export default function(schema: Schema): Rule {
  return chain([buildComponent({ ...schema, path: joinPath(schema) })]);
}

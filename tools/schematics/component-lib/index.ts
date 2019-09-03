import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { Schema } from '@schematics/angular/component/schema';
import { moveTo } from '../utils/move';
import { joinLibPath } from '../utils/path';

export default function(schema: Schema): Rule {
  schema.path = joinLibPath(schema);

  return chain([
    externalSchematic('@schematics/angular', 'component', {
      ...schema,
      style: 'scss',
      flat: true
    }),
    moveTo(schema)
  ]);
}

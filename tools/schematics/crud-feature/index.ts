import {
  chain,
  externalSchematic,
  Rule,
  schematic
} from '@angular-devkit/schematics';
import { buildComponent } from '@angular/cdk/schematics';
import { joinPath, modulePath } from '../utils/path';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'module', {
      project: schema.project,
      name: schema.name,
      routing: true,
      path: modulePath(schema)
    }),
    buildComponent({ ...schema, path: joinPath(schema) }),
    schematic('table-feature', schema),
    schematic('form-feature', schema)
  ]);
}

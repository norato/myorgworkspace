import { Schema } from '@schematics/angular/component/schema';

import {
  Rule,
  move,
  mergeWith,
  url,
  apply,
  template
} from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';

export function moveTo(schema: Schema) {
  const source = url('./files');
  const rules: Rule[] = [
    template({
      ...strings,
      ...schema
    }),
    move(schema.path)
  ];

  return mergeWith(apply(source, rules));
}

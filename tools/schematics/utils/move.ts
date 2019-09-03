import { Schema } from '@schematics/angular/component/schema';

import {
  Rule,
  move,
  mergeWith,
  url,
  apply,
  template,
  forEach,
  FileEntry,
  when,
  composeFileOperators
} from '@angular-devkit/schematics';

import { strings, Path } from '@angular-devkit/core';

export function moveTo(schema: Schema) {
  const TEMPLATE_FILENAME_RE = /\.template$/;
  const source = url('./files');
  const rules: Rule[] = [
    template({
      ...strings,
      ...schema
    }),
    move(schema.path),
    forEach(
      when(
        path => path.endsWith('.template'),
        composeFileOperators([
          entry => {
            return {
              content: entry.content,
              path: entry.path.replace(TEMPLATE_FILENAME_RE, '') as Path
            };
          }
        ])
      )
    )
  ];

  return mergeWith(apply(source, rules));
}

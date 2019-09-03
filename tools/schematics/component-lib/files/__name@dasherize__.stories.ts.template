import { storiesOf, moduleMetadata } from '@storybook/angular';
import {<%= classify(name) %>Component} from './<%= dasherize(name) %>.component';
import { <%= classify(project) %>ModuleName } from '@myorgworkspace/<%= dasherize(project) %>';

const metadata = moduleMetadata({
  declarations: [
    <%= classify(name) %>Component
  ]
});

const storyName = [<%= classify(project) %>ModuleName, <%= classify(name) %>Component.name].join(' | ');

storiesOf(storyName, module)
  .addDecorator(metadata)
  .add('default', () => ({
    template: `<my-org-<%= dasherize(project) %>-<%= dasherize(name) %>></my-org-<%= dasherize(project) %>-<%= dasherize(name) %>>`,
    props: {}
  }));

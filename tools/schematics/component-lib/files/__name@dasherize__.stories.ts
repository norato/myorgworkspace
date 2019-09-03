import { storiesOf, moduleMetadata } from '@storybook/angular';
import {<%= classify(name) %>Component} from './<%= dasherize(name) %>';

const metadata = moduleMetadata({
  declarations: [
    <%= classify(name) %>Component
  ]
});

const storyName = [UiModuleName, <%= classify(name) %>Component.name].join(' | ');

storiesOf(storyName, module)
  .addDecorator(metadata)
  .add('story name', () => ({
    template: ``,
    props: {}
  }));

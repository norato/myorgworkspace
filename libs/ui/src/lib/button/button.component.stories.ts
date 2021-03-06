import { UiModuleName } from '@myorgworkspace/ui';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const metadata = moduleMetadata({
  declarations: [ButtonComponent]
});

const storyName = [UiModuleName, ButtonComponent.name].join(' | ');

storiesOf(storyName, module)
  .addDecorator(metadata)
  .add('story name', () => ({
    template: `
      <my-org-ui-button label="Button Label" ></my-org-ui-button>
      <my-org-ui-button label="Disabled" [disabled]="true"></my-org-ui-button>
    `
  }));

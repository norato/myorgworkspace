import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModuleName } from '@myorgworkspace/ui';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { InputComponent } from './input.component';

const storyName = [UiModuleName, InputComponent.name].join(' | ');
const metadata = moduleMetadata({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [InputComponent]
});

storiesOf(storyName, module)
  .addDecorator(metadata)
  .add('default', () => ({
    template: `
      <div class="input-stories">
        <my-org-ui-input [control]="control" placeholder="Input placeholder as text"></my-org-ui-input>
        <my-org-ui-input [control]="control2" type="password" placeholder="Input placeholder as password"></my-org-ui-input>
      </div>
    `,
    props: {
      control: new FormControl('form control text'),
      control2: new FormControl('password'),
      placeholder: 'Input placeholder'
    },
    styles: [
      `
      .input-stories {
        display: grid;
        grid-gap: 1rem;
        padding: 2rem;
      }
      `
    ]
  }));

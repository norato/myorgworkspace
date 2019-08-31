import { InputComponent } from './input.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { storiesOf, moduleMetadata } from '@storybook/angular';

const metadata = moduleMetadata({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [InputComponent]
});

storiesOf('UiModuleName | component', module)
  .addDecorator(metadata)
  .add('story name', () => ({
    template: `<my-org-ui-input>`,
    props: {
      control: new FormControl('form control value'),
      placeholder: 'Input placeholder'
    }
  }));

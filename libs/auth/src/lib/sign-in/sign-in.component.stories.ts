import { AuthModuleName } from '@myorgworkspace/auth';
import { UiModule } from '@myorgworkspace/ui';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { SignInComponent } from './sign-in.component';

const metadata = moduleMetadata({
  declarations: [SignInComponent],
  imports: [UiModule]
});
const storyName = [AuthModuleName, SignInComponent.name].join(' | ');

storiesOf(storyName, module)
  .addDecorator(metadata)
  .add('story name', () => ({
    template: `<my-org-auth-sign-in></my-org-auth-sign-in>`,
    props: {}
  }));

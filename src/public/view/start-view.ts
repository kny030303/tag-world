import { BackgroundComponent } from '../component';
import Component from '../core/component';

class StartView extends Component {
  template(): string {
    return `
      <div id="background"></div>
    `;
  }

  mounted(): void {
    const $background = this.$element.querySelector('#background');

    if ($background) {
      new BackgroundComponent($background);
    }
  }
}

export default StartView;

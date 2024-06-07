import Component from '../core/component';

export class BackgroundComponent extends Component {
  template(): string {
    return `
     <div
        style="
        background-color: #000000;
        border-radius: 30px;
        width: 607px;
        height: 875px;
        "
    >
    </div>`;
  }
}

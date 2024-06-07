import Component from '../core/component';

export class BodyComponent extends Component {
  template(): string {
    return `
    <div
        id="body"
        style="
        background-color: #9bbbd4;
        width: 607px;
        height: 655px;
        border-width: 2px 2px 2px 2px;
        border-style: solid;
        "
    ><
    /div>`;
  }
}

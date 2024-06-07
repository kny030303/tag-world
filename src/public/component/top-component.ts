import Component from '../core/component';

export class TopComponent extends Component {
  template(): string {
    return `
    <div
        id="top"
        style="
        background-color: #92b3cd;
        border-radius: 30px 30px 0px 0px;
        width: 607px;
        height: 91px;
        border-width: 2px 2px 0px 2px;
        border-style: solid;
        display: flex;
        justify-content: space-around;
        align-items: center;
        "
    >
    </div>`;
  }
}

import Component from '../core/component';

export class BottomComponent extends Component {
  template(): string {
    return `
    <div
        id="bottom"
        style="
        background-color: #fcfcfc;
        border-radius: 0px 0px 30px 30px;
        width: 607px;
        height: 129px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-width: 0px 2px 2px 2px;
        border-style: solid;
    "
    >
    </div>`;
  }
}

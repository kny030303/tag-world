import { updateElement } from '../utils/diff';

/* eslint-disable @typescript-eslint/no-explicit-any */
abstract class Component {
  $element: Element;
  #state = {};
  props: any;

  /**
   * 상태변화를 감지할 observer에게 상태 등록
   * props 설정/event 설정
   */

  constructor($element: Element, props = {}) {
    this.$element = $element;
    this.props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  // 엘리먼트를 그리기전 필요한 로직 수행
  created() {}

  // 컴포넌트 마운팅
  mounted() {}

  // observable
  setup(): void {}

  // 이벤트 리스너
  setEvent(): void {}

  //이벤트 버블링
  addEvent(): void {}

  // 엘리먼트 생성
  render() {
    this.created();
    const { $element } = this;
    // ! innterHTML을 변경하면 모든 자식을 제거하고 다시 추가하기 때문에, DOM 조작이 많아지면 성능에 큰 영향을 미친다.
    // $element.innerHTML = this.template();

    // 기존 Node를 복제한 후에 새로운 템플릿을 채워넣는다.
    const newNode = <Element>$element.cloneNode(true);
    newNode.innerHTML = this.template();

    // diff알고리즘을 적용한다.
    const oldChildNodes = [...$element.childNodes];
    const newChildNodes = [...newNode.childNodes];
    const max = Math.max(oldChildNodes.length, newChildNodes.length);
    for (let i = 0; i < max; i++) {
      updateElement($element, newChildNodes[i], oldChildNodes[i]);
    }

    this.mounted();
  }

  setState(newState: any) {
    this.#state = { ...this.#state, ...newState };
    this.render();
  }

  template(): string {
    return '';
  }
}

export default Component;

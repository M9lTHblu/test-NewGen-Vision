/* eslint-disable class-methods-use-this */
export default class View {
  init() {
    this.dataInput = document.querySelector('[data-view="input-data"]');
    this.dataOutput = document.querySelector('[data-view="output-data"]');
    this.inputs = document.querySelectorAll('input[type="number"]');
    this.select = document.querySelector('select[name="sortParam"]');
  }

  getInputs() {
    return this.inputs;
  }

  getSelect() {
    return this.select;
  }

  formattingPrice([a, b]) {
    const process = (x) => (x || '');
    const sep = a && b ? '-' : '';
    if (!a && !b) {
      return 'Free';
    }
    return `${process(a)} ${sep} ${process(b)}`;
  }

  item(name, prices) {
    return `<li class="list-item">
      <span>${name}</span>
      <span>${this.formattingPrice(prices)}</span>
    </li>`;
  }

  list(data) {
    return data.map(({ name, prices }) => this.item(name, prices))
      .join('');
  }

  renderData(inputData, outputData) {
    this.dataInput.innerHTML = this.list(inputData);
    this.dataOutput.innerHTML = this.list(outputData);
  }
}

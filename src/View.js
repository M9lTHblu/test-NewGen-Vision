export default class View {
  init() {
    this.dataInput = document.querySelector('[data-view="input-data"]');
    this.dataOutput = document.querySelector('[data-view="output-data"]');
  }

  formattingPrice([a, b]) {
    const process = (x) => x ? x : '';
    const sep = Boolean(a && b) ? '-' : '';
    if (!a && !b) {
      return 'Free'
    }
    return `${process(a)} ${sep} ${process(b)}`
  }

  item(name, prices) {
    return `<li class="flex gap-1 p-1 text-cyan">
      <span>${name}</span>
      <span>${this.formattingPrice(prices)}</span>
    </li>`
  }

  list(data) {
    return data.map(({name, prices}) => this.item(name, prices))
        .join('')
  }

  renderData(inputData, outputData) {
    this.dataInput.innerHTML = this.list(inputData)
    this.dataOutput.innerHTML = this.list(outputData)
  }
}

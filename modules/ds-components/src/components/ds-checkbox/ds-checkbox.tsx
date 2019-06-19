import { Component, Element, Prop, Watch, h } from '@stencil/core'

import { MDCCheckbox } from '@material/checkbox'

@Component({
  tag: 'ds-checkbox',
  styleUrls: ['ds-checkbox.scss']
})
export class Checkbox {
  @Element() el: HTMLElement & { destroy: () => void }

  private checkboxElement

  @Prop() controlId: string
  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  checked: boolean
  @Prop() indeterminate: boolean
  @Prop() disabled: boolean

  @Watch('checked')
  watchChecked(newValue: boolean, _: boolean) {
    this.checkboxElement.checked = newValue
  }

  @Watch('disabled')
  watchDisabled(newValue: boolean, _: boolean) {
    this.checkboxElement.disabled = newValue
  }

  componentDidLoad() {
    this.checkboxElement = new MDCCheckbox(this.el.querySelector('div.mdc-checkbox'))
    this.checkboxElement.checked = this.checked
    this.checkboxElement.indeterminate = this.indeterminate
    this.checkboxElement.disabled = this.disabled
  }
  componentDidUnload() {
    this.checkboxElement.destroy && this.checkboxElement.destroy()
  }

  handleInputChange = e => {
    this.checked = e.target.checked
  }

  render() {
    return (
      <div class="mdc-checkbox">
        <input
          id={this.controlId}
          type="checkbox"
          class="mdc-checkbox__native-control"
          onChange={this.handleInputChange}
        />
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              class="mdc-checkbox__checkmark-path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
          <div class="mdc-checkbox__mixedmark" />
        </div>
      </div>
    )
  }
}

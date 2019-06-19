import { Component, Element, Prop, h } from '@stencil/core'
import { MDCRipple } from '@material/ripple'
import cc from 'classcat'

@Component({
  tag: 'ds-button',
  styleUrls: ['ds-button.scss']
})
export class Button {
  @Prop() interactive: boolean
  @Prop() raised: boolean
  @Prop() unelevated: boolean
  @Prop() stroked: boolean
  @Prop() dense: boolean
  @Prop() compact: boolean
  @Prop({ reflectToAttr: true }) disabled: boolean

  @Element() el: HTMLElement

  private ripple

  componentDidLoad() {
    if (!this.interactive) return

    this.ripple = MDCRipple.attachTo(this.el.querySelector('button'))
  }
  componentDidUnload() {
    if (!this.interactive) return

    this.ripple.destroy()
  }
  render() {
    const classes = cc([
      'mdc-button',
      {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated,
        'mdc-button--stroked': this.stroked,
        'mdc-button--dense': this.dense,
        'mdc-button--compact': this.compact
      }
    ])

    return (
      <button class={classes} disabled={this.disabled}>
        <slot name="icon" />
        <slot />
      </button>
    )
  }
}

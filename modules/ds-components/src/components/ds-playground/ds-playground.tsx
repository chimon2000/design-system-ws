import { Component, h } from '@stencil/core'

@Component({
  tag: 'ds-playground',
  styles: `
    label {
      display: flex;
      align-items: center;
    }
  `
})
export class DsPlayground {
  render() {
    return (
      <div>
        <my-component></my-component>
        <h1>Buttons</h1>
        <p>Material UI buttons</p>
        <h2>Flat</h2>
        <ds-button>Button</ds-button>
        <h2>Raised</h2>
        <ds-button raised>Button</ds-button>
        <h2>Unelevated</h2>
        <ds-button unelevated>Button</ds-button>
        <h2>Dense</h2>
        <ds-button dense>Button</ds-button>
        <h2>Compact</h2>
        <ds-button compact>Button</ds-button>
        <h1>Checkboxes</h1>
        <label>
          <ds-checkbox /> Check me
        </label>
        <label>
          Check me (reversed) <ds-checkbox />
        </label>
      </div>
    )
  }
}

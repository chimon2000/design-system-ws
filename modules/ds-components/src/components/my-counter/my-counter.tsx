import { Component, State, h } from "@stencil/core";

@Component({
  tag: "my-counter",
  scoped: true
})
export class MyCounter {
  @State()
  count: number = 0;

  private handleIncrement = () => (this.count = this.count + 1);

  render() {
    return (
      <div>
        <div>{this.count}</div>
        <ds-button onClick={this.handleIncrement}>Increment</ds-button>
      </div>
    );
  }
}

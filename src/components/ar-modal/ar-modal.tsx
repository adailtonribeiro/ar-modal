import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ar-modal',
  styleUrl: 'ar-modal.css',
  shadow: true
})
export class ArModal {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
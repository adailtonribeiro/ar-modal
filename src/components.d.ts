/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface ArModal {
      'first': string;
      'last': string;
    }
  }

  interface HTMLArModalElement extends StencilComponents.ArModal, HTMLStencilElement {}

  var HTMLArModalElement: {
    prototype: HTMLArModalElement;
    new (): HTMLArModalElement;
  };
  interface HTMLElementTagNameMap {
    'ar-modal': HTMLArModalElement;
  }
  interface ElementTagNameMap {
    'ar-modal': HTMLArModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ar-modal': JSXElements.ArModalAttributes;
    }
  }
  namespace JSXElements {
    export interface ArModalAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;
import { customElement } from "lit/decorators.js";
import { html, HTMLTemplateResult, LitElement } from "lit";
import "./bar";

@customElement("common-ui-foo")
export class CommonUIFoo extends LitElement {
  protected override render(): HTMLTemplateResult {
    return html`
      <h3>Hello I am foo and following me is bar</h3>
      <common-ui-bar></common-ui-bar>
    `;
  }
}

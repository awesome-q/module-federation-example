import { customElement } from "lit/decorators.js";
import { html, HTMLTemplateResult, LitElement } from "lit";

@customElement("common-ui-bar")
export class CommonUIBar extends LitElement {
  protected override render(): HTMLTemplateResult {
    return html` <h3>Hello I am Bar</h3> `;
  }
}

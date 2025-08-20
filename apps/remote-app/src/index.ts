import { css, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import "@mf-example/common-ui/bar";

@customElement("remote-app-root")
export class RemoteAppRoot extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: 1px solid red;
    }
  `;

  protected override render(): TemplateResult {
    return html`
      <h1>Hello I am the remote app</h1>
      <common-ui-bar></common-ui-bar>
    `;
  }
}

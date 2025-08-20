import { html, HTMLTemplateResult, LitElement, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";
import "@mf-example/common-ui/foo";

@customElement("host-app-root")
export class HostAppRoot extends LitElement {
  @state()
  remoteAppLoaded = false;

  async onLoadRemote() {
    await import("remote_app/Remote");
    this.remoteAppLoaded = true;
    this.requestUpdate();
  }

  protected override render(): HTMLTemplateResult {
    return html`
      <h1>Hello I am the root app nice 2 meet you</h1>
      <common-ui-foo></common-ui-foo>
      <pre>
        bar exists = ${!!(window as Window).customElements.get("common-ui-foo")}
        foo exists = ${!!(window as Window).customElements.get("common-ui-bar")}
      </pre
      >
      <button @click=${() => this.onLoadRemote()}>Load remote</button>
      ${this.remoteAppLoaded
        ? html`<remote-app-root></remote-app-root>`
        : nothing}
    `;
  }
}

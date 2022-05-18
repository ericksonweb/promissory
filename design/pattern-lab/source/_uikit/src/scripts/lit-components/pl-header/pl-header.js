/* eslint-disable no-unused-vars, no-param-reassign */
import { store } from '../../store.js'; // connect to redux
import { ifDefined } from 'lit-html/directives/if-defined';
import { html } from 'lit-html';
import { BaseLitComponent } from '../../components/base-component';
import { iframeMsgDataExtraction } from '../../utils';
import { customElement } from 'lit-element';
import Mousetrap from 'mousetrap';
import styles from './pl-header.scss?external';

@customElement('pl-header')
class Header extends BaseLitComponent {
  constructor() {
    super();
    this._wasInitiallyRendered = false;
    this.receiveIframeMessage = this.receiveIframeMessage.bind(this);
    this.handleExternalClicks = this.handleExternalClicks.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  static get properties() {
    return {
      themeMode: String,
      isActive: Boolean,
      currentPattern: String,
    };
  }

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    styles.use();
    const state = store.getState();
    const { ishControlsHide } = window.ishControls;
    this.ishControlsHide = ishControlsHide;
    this.currentPattern = state.app.currentPattern || '';
    this.themeMode = state.app.themeMode || 'dark';

    window.addEventListener('message', this.receiveIframeMessage, false);
    document.addEventListener('click', this.handleExternalClicks);

    Mousetrap(this).bind('esc', () => {
      if (window.innerWidth <= 670) {
        this.isActive = false;
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback && super.disconnectedCallback();
    styles.unuse();
    window.removeEventListener('message', this.receiveIframeMessage);
    document.removeEventListener('click', this.handleExternalClicks);
  }

  _stateChanged(state) {
    if (this.themeMode !== state.app.themeMode) {
      this.themeMode = state.app.themeMode || 'dark';
    }

    if (this.currentPattern !== state.app.currentPattern) {
      if (this.isActive === true) {
        this.isActive = false;
      }
      this.currentPattern = state.app.currentPattern;
    }
  }

  handleExternalClicks(e) {
    if (window.innerWidth <= 670) {
      if (
        e.target !== this.navToggle &&
        !e.target.closest('.pl-js-nav-container') &&
        !e.target.closest('pl-toggle-layout') &&
        this.isActive === true
      ) {
        this.isActive = false;
      }
    }
  }

  firstUpdated() {
    this.navToggle = this.renderRoot.querySelector('.pl-js-nav-trigger');
    this.navTarget = this.querySelector('.pl-js-nav-target');

    if (!window.__PRERENDER_INJECTED) {
      this._wasInitiallyRendered = true;
    }
  }

  toggleNav() {
    this.isActive = !this.isActive;
  }

  render() {
    return html`
    <header class="site-header stuck" id="pl-header" aria-role="banner">
      <a href="./" class="logo site-header__logo"><svg version="1.1" id="site-logo--header" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 128.6 27.4" style="enable-background:new 0 0 128.6 27.4" xml:space="preserve">
      <style type="text/css">
        .eslslh0 {
          fill: #00B156
        }
        .eslslh1 {
          fill: #00395D
        }
      </style>
      <g>
        <path class="eslslh0" d="M31.2,12.8C22.7,21.5,7.8,12,0,26.6c0,0,0,0.1,0.1,0C8.7,16.2,24.5,25.4,31.2,12.8 C31.3,12.8,31.2,12.8,31.2,12.8z" />
        <path class="eslslh0" d="M34.5,6.4c-8.4,8.7-23.4-0.8-31.2,13.7c0,0,0,0.1,0.1,0C12.1,9.8,27.9,19,34.5,6.4C34.6,6.4,34.6,6.4,34.5,6.4 z" />
        <path class="eslslh0" d="M37.9,0C29.5,8.7,14.6-0.8,6.8,13.7c0,0,0,0.1,0.1,0C15.5,3.4,31.3,12.6,37.9,0C38,0,38,0,37.9,0z" />
      </g>
      <path class="eslslh1" d="M42.3,14.6h2.5V2.5h-2.5V1.4h12.3v4.5h-0.9C53.2,3,53,2.5,51.6,2.5h-5v5.4h2.2c1.3,0,1.5-0.2,1.8-2.2h0.9v5.5 h-0.9c-0.3-2.1-0.5-2.3-1.8-2.3h-2.2v5.8h4.9c1.6,0,1.8-0.5,2.4-3.8h0.9v4.9H42.4L42.3,14.6L42.3,14.6z" />
      <path class="eslslh1" d="M56.4,14.6h1.7V7h-1.7V5.8h3.3v2.3c0.6-1.7,1.8-2.5,3-2.5c1,0,1.6,0.7,1.6,1.5c0,0.7-0.5,1.3-1.2,1.3 C62.5,8.5,62,8,62,7.3c0-0.1,0-0.3,0.1-0.4c-1.1-0.1-2,1.3-2.3,2.3v5.4h1.9v1.1h-5.3L56.4,14.6L56.4,14.6z" />
      <path class="eslslh1" d="M65.4,14.6h1.9V7h-1.9V5.8H69v8.8h1.9v1.1h-5.4L65.4,14.6L65.4,14.6z M66.7,2.3C66.7,1.6,67.3,1,68,1 c0.7,0,1.2,0.5,1.2,1.3S68.7,3.6,68,3.6C67.3,3.6,66.7,3.1,66.7,2.3z" />
      <path class="eslslh1" d="M71.4,11c0-3.1,2-5.3,5-5.3c2.2,0,3.8,1.5,3.8,2.8c0,0.9-0.5,1.5-1.3,1.5c-0.8,0-1.2-0.6-1.2-1.2 c0-0.5,0.3-1,0.8-1.2c-0.3-0.5-1.1-1-2.2-1c-1.8,0-3.1,1.6-3.1,4.2c0,2.5,1.2,4,3.2,4c1.4,0,2.4-0.8,2.9-2.3h0.9 c-0.6,2.2-2.1,3.4-4.3,3.4C73.3,15.9,71.4,13.8,71.4,11z" />
      <path class="eslslh1" d="M92.9,12.2h1c0.5,1.7,1.7,2.8,3.3,2.8c1.2,0,1.9-0.6,1.9-1.5c0-1-0.7-1.4-2.7-2c-2.4-0.7-3.4-1.5-3.4-3 s1.3-2.9,3.3-2.9c1.1,0,2.1,0.4,2.6,1.2l0.2-1.2h1V9h-1c-0.7-1.6-1.4-2.5-2.8-2.5c-0.9,0-1.8,0.5-1.8,1.4c0,0.9,0.8,1.4,2.6,1.9 c2.4,0.7,3.4,1.4,3.4,3c0,1.5-1.3,3-3.4,3c-1.4,0-2.4-0.5-3.1-1.4l-0.2,1.4h-1L92.9,12.2L92.9,12.2z" />
      <path class="eslslh1" d="M101.9,10.9c0-3.1,2.1-5.2,4.8-5.2c2.8,0,4.8,2,4.8,5.1c0,3.1-2.1,5.2-4.8,5.2 C103.9,15.9,101.9,13.9,101.9,10.9z M109.6,10.8c0-2.9-1.3-4.2-3-4.2c-1.6,0-2.8,1.3-2.8,4.2s1.4,4.2,3,4.2 C108.4,15,109.6,13.6,109.6,10.8z" />
      <path class="eslslh1" d="M112.3,14.6h1.7V7h-1.7V5.8h3.3v2.6c1.2-2,2.5-2.7,3.8-2.7c1.7,0,2.7,1.1,2.7,3.1v5.8h1.7v1.1h-4.9v-1.1h1.5v-5 c0-0.9-0.2-1.6-0.6-2c-0.3-0.3-0.8-0.5-1.3-0.5c-1.5,0-2.9,1.6-2.9,3.2v4.3h1.5v1.1h-4.9C112.3,15.7,112.3,14.6,112.3,14.6z" />
      <g>
        <g>
          <path class="eslslh1" d="M44,27.4c-0.7,0-1.4-0.2-2-0.6l0.4-1c0.5,0.4,1.1,0.6,1.6,0.6c0.7,0,0.9-0.4,0.9-0.8s-0.2-0.7-1.2-1.1 c-1.1-0.5-1.5-1-1.5-1.8c0-0.9,0.8-1.7,2-1.7c0.6,0,1.2,0.2,1.6,0.5l-0.3,0.9c-0.3-0.2-0.8-0.4-1.2-0.4c-0.7,0-1,0.4-1,0.8 c0,0.4,0.3,0.7,1.1,1c1.2,0.5,1.6,1,1.6,1.9C46,26.5,45.2,27.4,44,27.4z" />
          <path class="eslslh1" d="M48.8,27.3V21h3.8v1h-2.7v1.6h2.5v0.9h-2.5v1.7h2.7v1L48.8,27.3L48.8,27.3z" />
          <path class="eslslh1" d="M60.5,27.4l-3.9-4.1v4h-1.1V21l0.2,0l3.8,4V21h1.1v6.3L60.5,27.4z" />
          <path class="eslslh1" d="M63.7,27.3V21h1.1v6.2H63.7z" />
          <path class="eslslh1" d="M70.7,27.4c-1.8,0-3.1-1.4-3.1-3.2c0-1.9,1.4-3.2,3.2-3.2s3.1,1.4,3.1,3.2C73.9,26,72.5,27.4,70.7,27.4z M70.8,21.9c-1.2,0-2,1-2,2.3s0.8,2.3,2,2.3c1.2,0,2-1,2-2.3C72.8,22.9,71.9,21.9,70.8,21.9z" />
          <path class="eslslh1" d="M80.1,27.3L78.8,25c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0v2.2h-1.1v-6.1c0.5-0.1,1-0.1,1.6-0.1 c1.8,0,2.5,0.9,2.5,2c0,0.8-0.4,1.5-1.2,1.8l1.6,2.5L80.1,27.3L80.1,27.3z M78.5,21.9c-0.2,0-0.5,0-0.7,0v2.1c0.2,0,0.4,0,0.6,0 c0.9,0,1.4-0.4,1.4-1.1C79.8,22.4,79.3,21.9,78.5,21.9z" />
          <path class="eslslh1" d="M87.3,27.3V21h1.1v5.2h2.7v1H87.3z" />
          <path class="eslslh1" d="M93.6,27.3V21h1.1v6.2H93.6z" />
          <path class="eslslh1" d="M100.2,27.3H100L97.1,21h1.2l1.8,4.1l1.7-4.1h1.2L100.2,27.3z" />
          <path class="eslslh1" d="M105.5,27.3V21h1.1v6.2H105.5z" />
          <path class="eslslh1" d="M114.6,27.4l-3.9-4.1v4h-1.1V21l0.2,0l3.8,4V21h1.1v6.3L114.6,27.4z" />
          <path class="eslslh1" d="M123.2,24v2.7c-0.7,0.4-1.4,0.7-2.3,0.7c-1.8,0-3.3-1.3-3.3-3.2c0-1.9,1.6-3.2,3.3-3.2c0.9,0,1.6,0.2,2.2,0.6 l-0.5,0.9c-0.5-0.3-1.1-0.5-1.7-0.5c-1.4,0-2.2,1-2.2,2.2c0,1.3,1,2.3,2.2,2.3c0.5,0,0.9-0.1,1.2-0.3v-1.2h-1.4V24H123.2z" />
        </g>
      </g>
      <path class="eslslh1" d="M87.1,9.7l3.4,4.9h1.3v1.2h-4.5v-1.1h1.3L86,10.8l-1.6,1.6v2.2h1.4v1.1H81v-1.1h1.7v-12H81V1.4h3.4v9.8l4-4.3 h-1.7V5.8h4.6V7h-1.5L87.1,9.7z" />
      <g>
        <path d="M125.7,22.5c0-0.8,0.6-1.5,1.4-1.5s1.4,0.7,1.4,1.5c0,0.8-0.6,1.5-1.4,1.5S125.7,23.3,125.7,22.5z M128.3,22.5 c0-0.7-0.5-1.2-1.2-1.2s-1.2,0.6-1.2,1.2c0,0.7,0.5,1.2,1.2,1.2C127.8,23.7,128.3,23.1,128.3,22.5z M126.7,21.7c0.1,0,0.2,0,0.4,0 c0.4,0,0.6,0.2,0.6,0.5c0,0.2-0.1,0.4-0.3,0.4l0.4,0.6h-0.3l-0.3-0.5c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0v0.5h-0.3L126.7,21.7 L126.7,21.7z M127,22.4c0.1,0,0.1,0,0.1,0c0.2,0,0.3-0.1,0.3-0.3c0-0.1-0.1-0.2-0.3-0.2c-0.1,0-0.1,0-0.1,0L127,22.4L127,22.4z" style="fill:#00395D;stroke:#FFFFFF;stroke-width:5.000000e-02;stroke-miterlimit:10" />
      </g>
    </svg></a>
      <div class="o-collapse menu site-header__menu">
        <button class="btn o-collapse__toggler menu__toggler main-menu__toggler" aria-expanded="false" aria-controls="main-menu__collapse" data-bs-toggle="collapse" data-bs-target="#main-menu__collapse"><span class="icon fa-fw fas fa-blank"></span></button>
        <div class="o-collapse__content collapse menu__content main-menu__content" id="main-menu__collapse">
          <div class="o-collapse__body">
            <pl-nav></pl-nav>
          </div>
        </div>
      </div>
      <div class="site-header__addl">
        ${!this.ishControlsHide['find'] ? html`<pl-search max-results="10" placeholder="Find a Pattern"></pl-search>` : ''}
        <pl-controls></pl-controls>
      </div>
    </header>
    `;
  }

  /**
   *
   * @param {MessageEvent} e A message received by a target object.
   */
  receiveIframeMessage(e) {
    const self = this;

    const data = iframeMsgDataExtraction(e);

    if (data.event !== undefined && data.event === 'patternLab.pageClick') {
      try {
        if (
          window.innerWidth <= 670 ||
          (window.innerWidth >= 670 && self.layoutMode !== 'vertical')
        ) {
          this.isActive = false;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export { Header };

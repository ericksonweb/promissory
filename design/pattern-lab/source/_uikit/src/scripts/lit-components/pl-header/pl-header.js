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
    <header class="site-header stuck bg--primary" id="pl-header" aria-role="banner">
      <a href="./" class="logo site-header__logo"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 132 31.2">
        <style>
          .st000 {
            fill: #00843d
          }
        </style>
        <path d="M32.8 15.1c-8.4 8.7-23.4-.8-31.2 13.7 0 0 0 .1.1 0 8.8-10.4 24.4-1.2 31.1-13.7.1 0 0-.1 0 0z" class="st000" />
        <path d="M36.2 8.7C27.8 17.4 12.8 7.9 5 22.4c0 0 0 .1.1 0C13.8 12 29.6 21.2 36.2 8.7c.1 0 0-.1 0 0z" class="st000" />
        <path d="M39.6 2.3C31.1 11 16.2 1.5 8.5 16c0 0 0 .1.1 0 8.5-10.4 24.3-1.2 31-13.7.1 0 .1-.1 0 0z" class="st000" />
        <path fill="#fff" d="M44.1 16.9h2.5V4.8h-2.5V3.6h12.3v4.5h-.9c-.6-2.8-.8-3.4-2.2-3.4h-5v5.4h2.2c1.3 0 1.5-.2 1.8-2.2h.9v5.5h-.8c-.3-2.1-.5-2.3-1.8-2.3h-2.2v5.8h4.9c1.6 0 1.8-.5 2.4-3.8h.9V18H44.1v-1.1zm14 0h1.7V9.2h-1.7V8.1h3.3v2.3c.6-1.7 1.8-2.5 3-2.5 1 0 1.6.7 1.6 1.5 0 .7-.5 1.3-1.2 1.3s-1.2-.4-1.2-1.1c0-.1 0-.3.1-.4-1.1-.1-2 1.3-2.3 2.3v5.4h1.9V18H58l.1-1.1zm8.9 0h1.9V9.2H67V8.1h3.6v8.8h1.9V18h-5.4l-.1-1.1zm1.4-12.3c0-.7.5-1.3 1.3-1.3.7 0 1.2.5 1.2 1.3s-.6 1.2-1.3 1.2c-.7 0-1.2-.4-1.2-1.2zm4.6 8.6c0-3.1 2-5.3 5-5.3 2.2 0 3.8 1.5 3.8 2.8 0 .9-.5 1.5-1.3 1.5s-1.2-.6-1.2-1.2c0-.5.3-1 .8-1.2-.3-.5-1.1-1-2.2-1-1.8 0-3.1 1.6-3.1 4.2 0 2.5 1.2 4 3.2 4 1.4 0 2.4-.8 2.9-2.3h.9c-.6 2.2-2.1 3.4-4.3 3.4-2.6.1-4.5-2-4.5-4.9zm21.5 1.2h1c.5 1.7 1.7 2.8 3.3 2.8 1.2 0 1.9-.6 1.9-1.5 0-1-.7-1.4-2.7-2-2.4-.7-3.4-1.5-3.4-3S96 7.8 98 7.8c1.1 0 2.1.4 2.6 1.2l.2-1.2h1v3.4h-1c-.7-1.6-1.4-2.5-2.8-2.5-.9 0-1.8.5-1.8 1.4s.8 1.4 2.6 1.9c2.4.7 3.4 1.4 3.4 3 0 1.5-1.3 3-3.4 3-1.4 0-2.4-.5-3.1-1.4l-.3 1.4h-1l.1-3.6zm9-1.3c0-3.1 2.1-5.2 4.8-5.2 2.8 0 4.8 2 4.8 5.1s-2.1 5.2-4.8 5.2c-2.8 0-4.8-2-4.8-5.1zm7.7-.1c0-2.9-1.3-4.2-3-4.2-1.6 0-2.8 1.3-2.8 4.2s1.4 4.2 3 4.2 2.8-1.3 2.8-4.2zm2.7 3.9h1.7V9.2h-1.7V8.1h3.3v2.6c1.2-2 2.5-2.7 3.8-2.7 1.7 0 2.7 1.1 2.7 3.1v5.8h1.7V18h-4.9v-1.1h1.5v-5c0-.9-.2-1.6-.6-2.1-.3-.3-.8-.5-1.3-.5-1.5 0-2.9 1.6-2.9 3.2v4.3h1.5V18h-4.9c.1 0 .1-1.1.1-1.1zM45.7 29.6c-.7 0-1.4-.2-2-.6l.4-1c.5.4 1.1.6 1.6.6.7 0 .9-.4.9-.8s-.2-.7-1.2-1.1c-1.1-.5-1.5-1-1.5-1.8 0-.9.8-1.7 2-1.7.6 0 1.2.2 1.6.5l-.3.9c-.3-.2-.8-.4-1.2-.4-.7 0-1 .4-1 .8s.3.7 1.1 1c1.2.5 1.6 1 1.6 1.9 0 .9-.9 1.7-2 1.7zm4.7-.1v-6.2h3.8v1h-2.7v1.6H54v.9h-2.5v1.7h2.7v1h-3.8zm11.8.1-3.9-4.1v4h-1.1v-6.3h.2l3.8 4v-3.9h1.1l-.1 6.3zm3.1-.1v-6.2h1.1v6.2h-1.1zm7 .1c-1.8 0-3.1-1.4-3.1-3.2 0-1.9 1.4-3.2 3.2-3.2s3.1 1.4 3.1 3.2c0 1.9-1.3 3.2-3.2 3.2zm.1-5.5c-1.2 0-2 1-2 2.3s.8 2.3 2 2.3 2-1 2-2.3-.9-2.3-2-2.3zm9.4 5.4-1.4-2.2h-.9v2.2h-1.1v-6.1c.5-.1 1-.1 1.6-.1 1.8 0 2.5.9 2.5 2 0 .8-.4 1.5-1.2 1.8l1.6 2.5-1.1-.1zm-1.6-5.3h-.7v2.1h.6c.9 0 1.4-.4 1.4-1.1-.1-.6-.6-1-1.3-1zm8.7 5.3v-6.2H90v5.2h2.7v1h-3.8zm6.3 0v-6.2h1.1v6.2h-1.1zm6.6.1-3-6.3h1.2l1.8 4.1 1.7-4.1h1.2l-2.9 6.3zm5.4-.1v-6.2h1.1v6.2h-1.1zm9 .1-3.9-4.1v4h-1v-6.3h.2l3.8 4v-3.9h1.1v6.3h-.2zm8.6-3.4v2.7c-.7.4-1.4.7-2.3.7-1.8 0-3.3-1.3-3.3-3.2 0-1.9 1.6-3.2 3.3-3.2.9 0 1.6.2 2.2.6l-.5.9c-.5-.3-1.1-.5-1.7-.5-1.4 0-2.2 1-2.2 2.2 0 1.3 1 2.3 2.2 2.3.5 0 .9-.1 1.2-.3v-1.2h-1.4v-.9h2.5v-.1zM88.8 12l3.4 4.9h1.3V18H89v-1.1h1.3l-2.6-3.8-1.6 1.6v2.2h1.3V18h-4.7v-1.1h1.7v-12h-1.7V3.6h3.4v9.8l4-4.3h-1.7v-1H93v1.1h-1.5L88.8 12zm38.7 12.2c.1.1.3.1.4.1.1 0 .2-.1.2-.2s-.1-.1-.3-.3-.4-.2-.4-.5c0-.2.2-.4.5-.4.2 0 .3.1.4.1l-.1.3c-.1-.1-.2-.1-.4-.1s-.2 0-.2.1.1.2.3.2c.2.1.4.2.4.5s-.2.5-.5.5c-.2 0-.4-.1-.5-.2l.2-.1zm2.6.4v-.9l-.5.6-.5-.6v.9h-.3l.1-1.6.7 1 .7-1 .1 1.6h-.3z" />
      </svg></a>
      <div class="o-collapse menu menu--bar site-header__menu">
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

---
order: 1
---
A self-contained content display with optional [Media](/patterns/atoms-media/index.html), header and footer.
___
<h2 class="h3 font-family--sans-serif">Schema</h2>
<table class="table--minimal font-size--xsmall" role="table">
  <thead>
    <tr>
      <th>Twig Property</th>
      <th>Type</th>
      <th class="w-auto">Description</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>header</code></td>
      <td>object</td>
      <td>Create a header for the Card.</td>
      <td class="text-nowrap">See <a href="#card-header">header</a> below.</td>
    </tr>
    <tr>
      <td><code>media</code></td>
      <td>object</td>
      <td>Include a Media item.</td>
      <td class="text-nowrap">See <a href="#card-media">media</a> below.</td>
    </tr>
    <tr>
      <td><code>body</code></td>
      <td>object</td>
      <td>The main content area of the Card.</td>
      <td class="text-nowrap">See <a href="#card-body">body</a> below.</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td>object</td>
      <td>Create a footer for the Card.</td>
      <td class="text-nowrap">See <a href="#card-footer">footer</a> below.</td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>object</td>
      <td>Add a hyperlink to the entire Card.</td>
      <td class="text-nowrap">See <a href="#card-link">link</a> below.</td>
    </tr>
    <tr>
      <td><code>dark</code></td>
      <td>boolean</td>
      <td>Display the Card with a darkened grey background.</td>
      <td class="text-nowrap"><code>true</code></td>
    </tr>
    <tr>
      <td><code>horizontal</code></td>
      <td>boolean</td>
      <td>Display the Card horizontally.</td>
      <td class="text-nowrap"><code>true</code></td>
    </tr>
  </tbody>
</table>
<div id="card-schema" class="accordion">
  <div class="accordion-item" id="card-header">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler card-header__toggler" aria-expanded="false" aria-controls="card-header__collapse" data-bs-toggle="collapse" data-bs-target="#card-header__collapse">header<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content card-header__content bg--charcoal" data-bs-parent="#card-schema" id="card-header__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>content</code></td>
                <td>mixed</td>
                <td>The header content.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="card-media">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler card-media__toggler" aria-expanded="false" aria-controls="card-media__collapse" data-bs-toggle="collapse" data-bs-target="#card-media__collapse">media<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content card-media__content bg--charcoal" data-bs-parent="#card-schema" id="card-media__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>item</code></td>
                <td>object</td>
                <td>The Media item.</td>
                <td class="text-nowrap">See <a href="/patterns/atoms-media/index.html">Media</a> for syntax.</td>
              </tr>
              <tr>
                <td><code>flush</code></td>
                <td>boolean</td>
                <td>Extend the Media item to the edges of the Card.</td>
                <td class="text-nowrap"><code>true</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="card-body">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler card-body__toggler" aria-expanded="false" aria-controls="card-body__collapse" data-bs-toggle="collapse" data-bs-target="#card-body__collapse">body<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content card-body__content bg--charcoal" data-bs-parent="#card-schema" id="card-body__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>content</code></td>
                <td>mixed</td>
                <td>The body content.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="card-footer">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler card-footer__toggler" aria-expanded="false" aria-controls="card-footer__collapse" data-bs-toggle="collapse" data-bs-target="#card-footer__collapse">footer<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content card-footer__content bg--charcoal" data-bs-parent="#card-schema" id="card-footer__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>content</code></td>
                <td>mixed</td>
                <td>The footer content.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="card-link">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler card-link__toggler" aria-expanded="false" aria-controls="card-link__collapse" data-bs-toggle="collapse" data-bs-target="#card-link__collapse">link<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content card-link__content bg--charcoal" data-bs-parent="#card-schema" id="card-link__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>href</code></td>
                <td>string</td>
                <td>The URL that the hyperlink points to.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

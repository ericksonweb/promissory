---
order: 11
---
Information presented in a two-dimensional table comprised of rows and columns of cells.
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
      <td><code>caption</code></td>
      <td>string</td>
      <td>The caption or title of the Table.</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>columns</code></td>
      <td>array</td>
      <td>Designate table columns (<code>&lt;col&gt;</code>).</td>
      <td class="text-nowrap">See <a href="#table-columns">columns</a> below.</td>
    </tr>
    <tr>
      <td><code>header</code></td>
      <td>object</td>
      <td>Create the table header (<code>&lt;thead&gt;</code>).</td>
      <td class="text-nowrap">See <a href="#table-header">header</a> below.</td>
    </tr>
    <tr>
      <td><code>body</code></td>
      <td>array</td>
      <td>Create one or more table body (<code>&lt;tbody&gt;</code>) elements.</td>
      <td class="text-nowrap">See <a href="#table-body">body</a> below.</td>
    </tr>
    <tr>
      <td><code>footer</code></td>
      <td>object</td>
      <td>Create the table footer (<code>&lt;tfoot&gt;</code>).</td>
      <td class="text-nowrap">See <a href="#table-footer">footer</a> below.</td>
    </tr>
  </tbody>
</table>
<div id="table-schema" class="accordion">
  <div class="accordion-item" id="table-columns">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler table-columns__toggler" aria-expanded="false" aria-controls="table-columns__collapse" data-bs-toggle="collapse" data-bs-target="#table-columns__collapse">columns<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content table-columns__content bg--charcoal" data-bs-parent="#table-schema" id="table-columns__collapse">
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
                <td><code>attributes</code></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>span</code></pre>
                </td>
                <td>integer</td>
                <td>Sets the <code>span</code> attribute of the column.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="table-header">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler table-header__toggler" aria-expanded="false" aria-controls="table-header__collapse" data-bs-toggle="collapse" data-bs-target="#table-header__collapse">header<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content table-header__content bg--charcoal" data-bs-parent="#table-schema" id="table-header__collapse">
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
                <td><code>rows</code></td>
                <td>array</td>
                <td>Creates one or more table rows (<code>&lt;tr&gt;</code>).</td>
                <td class="text-nowrap">See <a href="#table-row">row</a> below.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="table-body">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler table-body__toggler" aria-expanded="false" aria-controls="table-body__collapse" data-bs-toggle="collapse" data-bs-target="#table-body__collapse">body<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content table-body__content bg--charcoal" data-bs-parent="#table-schema" id="table-body__collapse">
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
                <td><code>rows</code></td>
                <td>array</td>
                <td>Creates one or more table rows (<code>&lt;tr&gt;</code>).</td>
                <td class="text-nowrap">See <a href="#table-row">row</a> below.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="table-footer">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler table-footer__toggler" aria-expanded="false" aria-controls="table-footer__collapse" data-bs-toggle="collapse" data-bs-target="#table-footer__collapse">footer<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content table-footer__content bg--charcoal" data-bs-parent="#table-schema" id="table-footer__collapse">
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
                <td><code>rows</code></td>
                <td>array</td>
                <td>Creates one or more table rows (<code>&lt;tr&gt;</code>).</td>
                <td class="text-nowrap">See <a href="#table-row">row</a> below.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="table-row">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler table-row__toggler" aria-expanded="false" aria-controls="table-row__collapse" data-bs-toggle="collapse" data-bs-target="#table-row__collapse">row<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content table-row__content bg--charcoal" data-bs-parent="#table-schema" id="table-row__collapse">
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
                <td><code>cells</code></td>
                <td>array</td>
                <td>Creates one or more table cells (<code>&lt;td&gt;</code> or <code>&lt;th&gt;</code>).</td>
                <td class="text-nowrap">See <a href="#table-cell">cell</a> below.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item" id="table-cell">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler table-cell__toggler" aria-expanded="false" aria-controls="table-cell__collapse" data-bs-toggle="collapse" data-bs-target="#table-cell__collapse">cell<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content table-cell__content bg--charcoal" data-bs-parent="#table-schema" id="table-cell__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
                <th>Default</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>element</code></td>
                <td>string</td>
                <td>The HTML element.</td>
                <td><code>"td"</code></td>
                <td class="text-nowrap"><code>"td"</code>, <code>"th"</code></td>
              </tr>
              <tr>
                <td><code>content</code></td>
                <td>mixed</td>
                <td>Content of the table cell.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>attributes</code></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>colspan</code></pre>
                </td>
                <td>integer</td>
                <td>Sets the <code>colspan</code> attribute of the cell.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>rowspan</code></pre>
                </td>
                <td>integer</td>
                <td>Sets the <code>rowspan</code> attribute of the cell.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>scope</code></pre>
                </td>
                <td>string</td>
                <td>For use only when <code>element</code> is set to <code>"th"</code>. Sets the <code>scope</code> attribute of the cell.</td>
                <td>-</td>
                <td class="text-nowrap"><code>"row"</code>, <code>"col"</code>, <code>"rowgroup"</code>, <code>"colgroup"</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

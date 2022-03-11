---
order: 7
---
A document section containing interactive controls for submitting information.
___
<h2 class="h3 font-family--sans-serif">Schema</h2>
<table class="table--minimal font-size--xsmall" role="table">
  <thead>
    <tr>
      <th>Twig Property</th>
      <th>Type</th>
      <th class="w-auto">Description</th>
      <th>Default</th>
      <th>Options</th>
      <th>CSS Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>form</code></td>
      <td>array</td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>fieldset</code></pre></td>
      <td>object</td>
      <td>Wraps fields in a <code>&lt;fieldset&gt;</code> element.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>legend</code></pre></td>
      <td>object</td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>content</code></pre></td>
      <td>string</td>
      <td>The content of the fieldset <code>&lt;legend&gt;</code>.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>fields</code></pre></td>
      <td>array</td>
      <td>An array of one or more field objects contained in the <code>&lt;fieldset&gt;</code>.</td>
      <td>-</td>
      <td class="text-nowrap">See <a href="#form-field">field</a> below for syntax.</td>
      <td>-</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>required</code></pre></td>
      <td>boolean</td>
      <td>Marks the fieldset as required.</td>
      <td>-</td>
      <td class="text-nowrap"><code>true</code></td>
      <td class="text-nowrap">mark-required</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>fields</code></pre></td>
      <td>array</td>
      <td>An array of one or more field objects contained in the <code>&lt;form&gt;</code>.</td>
      <td>-</td>
      <td class="text-nowrap">See <a href="#form-field">field</a> below for syntax.</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
<div id="form-schema" class="accordion">
  <div class="accordion-item" id="form-field">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler form-field__toggler" aria-expanded="false" aria-controls="form-field__collapse" data-bs-toggle="collapse" data-bs-target="#form-field__collapse">field<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content form-field__content bg--charcoal" data-bs-parent="#form-schema" id="form-field__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
                <th>Default</th>
                <th>Options</th>
                <th>CSS Class</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>label</code></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td><pre>&nbsp;&nbsp;<code>content</code></pre></td>
                <td>string</td>
                <td>The content of the Label.</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><pre>&nbsp;&nbsp;<code>attributes</code></pre></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>for</code></pre>
                </td>
                <td>string</td>
                <td>The <code>id</code> of the associated form control.</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>control</code></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td><pre>&nbsp;&nbsp;<code>element</code></pre></td>
                <td>string</td>
                <td>The HTML element of the form control.</td>
                <td>-</td>
                <td class="text-nowrap"><code>button</code>, <code>input</code>, <code>select</code>, <code>textarea</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td colspan="6">&nbsp;&nbsp;&nbsp;&nbsp;See <a href="/patterns/atoms-button/index.html">Button</a> or <a href="/patterns/atoms-form/index.html">Form</a> atoms for other related <code>control</code> schema.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
---
order: 12
---
Interactive controls for submitting information.
___
<h2 class="h3 font-family--sans-serif">Schema</h2>
<div id="form-schema" class="accordion">
  <div class="accordion-item">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler form-label__toggler" aria-expanded="false" aria-controls="form-label__collapse" data-bs-toggle="collapse" data-bs-target="#form-label__collapse">label<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content form-label__content bg--esl-blue" data-bs-parent="#form-schema" id="form-label__collapse">
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
                <td>string</td>
                <td>The content of the Label.</td>
              </tr>
              <tr>
                <td><code>attributes</code></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>for</code></pre>
                </td>
                <td>string</td>
                <td>The <code>id</code> of the associated <code>input</code> element.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler form-input__toggler" aria-expanded="false" aria-controls="form-input__collapse" data-bs-toggle="collapse" data-bs-target="#form-input__collapse">input<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content form-input__content bg--esl-blue" data-bs-parent="#form-schema" id="form-input__collapse">
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
                <td><code>attributes</code></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>type</code></pre>
                </td>
                <td>string</td>
                <td>Sets the input <code>type</code> attribute.</td>
                <td><code>"text"</code></td>
                <td class="text-nowrap"><code>"button"</code>, <code>"checkbox"</code>, <code>"color"</code>, <code>"date"</code>, <br><code>"datetime-local"</code>, <code>"email"</code>, <code>"file"</code>, <br><code>"hidden"</code>, <code>"image"</code>, <code>"month"</code>, <code>"number"</code>, <br><code>"password"</code>, <code>"radio"</code>, <code>"range"</code>, <code>"reset"</code>, <br><code>"search"</code>, <code>"submit"</code>, <code>"tel"</code>, <code>"text"</code>, <br><code>"time"</code>, <code>"url"</code>, <code>"week"</code></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>name</code></pre>
                </td>
                <td>string</td>
                <td>Sets the control's <code>name</code> attribute.</td>
                <td><code>"field"</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>value</code></pre>
                </td>
                <td>string</td>
                <td>Sets the input <code>value</code> attribute.</td>
                <td><code>"Input"</code></td>
                <td class="text-nowrap">Used with <code>button</code>, <code>checkbox</code>, <code>radio</code>, <br><code>reset</code>, and <code>submit</code> types.</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>placeholder</code></pre>
                </td>
                <td>string</td>
                <td>Displays placeholder text.</td>
                <td class="text-nowrap"><code>"​"</code> <br><span class="font-size--tiny">(Zero-width Space character)</span></td>
                <td class="text-nowrap">Used with <code>email</code>, <code>password</code>, <code>search</code>, <br><code>tel</code>, <code>text</code>, and <code>url</code> types.</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>required</code></pre>
                </td>
                <td>boolean</td>
                <td>Marks the <code>input</code> as required.</td>
                <td>-</td>
                <td class="text-nowrap">
                  <p><code>true</code><br> -<br> Used with <code>checkbox</code>, <code>date</code>, <code>datetime-local</code>, <br><code>email</code>, <code>file</code>, <code>month</code>, <code>number</code>, <code>password</code>, <code>radio</code>, <br><code>search</code>, <code>tel</code>, <code>text</code>, <code>time</code>, <code>url</code>, and <code>week</code> types.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler form-select__toggler" aria-expanded="false" aria-controls="form-select__collapse" data-bs-toggle="collapse" data-bs-target="#form-select__collapse">select<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content form-select__content bg--esl-blue" data-bs-parent="#form-schema" id="form-select__collapse">
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
                <td><code>menu</code></td>
                <td>array</td>
                <td>Creates a menu of <code>&lt;option&gt;</code> elements, optionally nested in an <code>&lt;optgroup&gt;</code>.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>optgroup</code></pre>
                </td>
                <td>object</td>
                <td>Creates a wrapping <code>&lt;optgroup&gt;</code> for the nested <code>options</code>.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>options</code></pre>
                </td>
                <td>array</td>
                <td>Creates the options.</td>
                <td>-</td>
                <td class="text-nowrap">See <code>options</code> below for syntax.</td>
              </tr>
              <tr>
                <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>attributes</code></pre></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>label</code></pre>
                </td>
                <td>string</td>
                <td>The label for the <code>&lt;optgroup&gt;</code>.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>options</code></pre>
                </td>
                <td>array</td>
                <td>Creates the options.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>content</code></pre>
                </td>
                <td>text</td>
                <td>The text content of the option.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>attributes</code></pre></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>value</code></pre>
                </td>
                <td>text</td>
                <td>The value of the option.</td>
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
                  <pre>&nbsp;&nbsp;<code>name</code></pre>
                </td>
                <td>string</td>
                <td>Sets the control's <code>name</code> attribute.</td>
                <td><code>"field"</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>title</code></pre>
                </td>
                <td>string</td>
                <td>Sets the control's <code>title</code> attribute. For <code>select</code> elements, this acts similarly to a <code>placeholder</code>.</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>multiple</code></pre>
                </td>
                <td>boolean</td>
                <td>Enables multiple options to be selected.</td>
                <td>-</td>
                <td><code>true</code></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>required</code></pre>
                </td>
                <td>boolean</td>
                <td>Marks the <code>select</code> as required.</td>
                <td>-</td>
                <td><code>true</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler form-textarea__toggler" aria-expanded="false" aria-controls="form-textarea__collapse" data-bs-toggle="collapse" data-bs-target="#form-textarea__collapse">textarea<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content form-textarea__content bg--esl-blue" data-bs-parent="#form-schema" id="form-textarea__collapse">
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
                <td><code>attributes</code></td>
                <td>object</td>
                <td colspan="4"></td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>name</code></pre>
                </td>
                <td>string</td>
                <td>Sets the control's <code>name</code> attribute.</td>
                <td><code>"field"</code></td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>placeholder</code></pre>
                </td>
                <td>string</td>
                <td>Displays placeholder text.</td>
                <td class="text-nowrap"><code>"​"</code> <br><span class="font-size--tiny">(Zero-width Space character)</span></td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <pre>&nbsp;&nbsp;<code>required</code></pre>
                </td>
                <td>boolean</td>
                <td>Marks the <code>textarea</code> as required.</td>
                <td>-</td>
                <td><code>true</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
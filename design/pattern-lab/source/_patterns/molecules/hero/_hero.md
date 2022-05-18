---
order: 2
---
A large, full-width [Media](/patterns/atoms-media/index.html) item with optional overlay content.
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
      <td><code>media</code></td>
      <td>object</td>
      <td>The Media item.</td>
      <td class="text-nowrap">See <a href="/patterns/atoms-media/index.html">Media</a> for syntax.</td>
    </tr>
    <tr>
      <td><code>content</code></td>
      <td>object</td>
      <td>Content that will appear in an overlay on the Media item.</td>
      <td class="text-nowrap">See <a href="#hero-content">content</a> below.</td>
    </tr>
  </tbody>
</table>
<div id="hero-schema" class="accordion">
  <div class="accordion-item" id="hero-content">
    <div class="o-collapse">
      <h3><button class="btn o-collapse__toggler accordion__toggler hero-content__toggler" aria-expanded="false" aria-controls="hero-content__collapse" data-bs-toggle="collapse" data-bs-target="#hero-content__collapse">content<span class="icon fa-fw fas fa-blank"></span></button></h3>
      <div class="o-collapse__content collapse accordion__content hero-content__content bg--esl-blue" data-bs-parent="#hero-schema" id="hero-content__collapse">
        <div class="o-collapse__body o-collapse__body--flush">
          <table class="table--minimal font-size--xsmall">
            <thead>
              <tr>
                <th>Twig Property</th>
                <th>Type</th>
                <th class="w-auto">Description</th>
                <th class="w-auto">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>body</code></td>
                <td>mixed</td>
                <td>The Hero overlay content.</td>
                <td>-</td>
              </tr>
              <tr>
                <td><code>properties</code></td>
                <td>array</td>
                <td>Display options for the overlay.</td>
                <td class="p-0">
                  <table class="table--minimal font-size--xsmall">
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th class="w-auto">Description</th>
                        <th>CSS Class</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>inset</code></td>
                        <td>Insets the overlay away from the edges of the Hero.</td>
                        <td class="text-nowrap">hero__content--inset</td>
                      </tr>
                      <tr>
                        <td><code>contain</code></td>
                        <td>Contains the left and right sides of the overlay within the width of the highest breakpoint.</td>
                        <td class="text-nowrap">hero__content--contain</td>
                      </tr>
                      <tr>
                        <td><code>half</code></td>
                        <td>Reduces the width of the overlay by half.</td>
                        <td class="text-nowrap">hero__content--half</td>
                      </tr>
                      <tr>
                        <td><code>left</code></td>
                        <td>Horizontally positions the overlay to the left when <code>half</code> is set.</td>
                        <td class="text-nowrap">hero__content--left</td>
                      </tr>
                      <tr>
                        <td><code>center</code></td>
                        <td>Horizontally centers the overlay when <code>half</code> is set.</td>
                        <td class="text-nowrap">hero__content--center</td>
                      </tr>
                      <tr>
                        <td><code>right</code></td>
                        <td>Horizontally positions the overlay to the right when <code>half</code> is set.</td>
                        <td class="text-nowrap">hero__content--right</td>
                      </tr>
                      <tr>
                        <td><code>top</code></td>
                        <td>Vertically positions the overlay to the top.</td>
                        <td class="text-nowrap">hero__content--top</td>
                      </tr>
                      <tr>
                        <td><code>middle</code></td>
                        <td>Vertically positions the overlay to the middle.</td>
                        <td class="text-nowrap">hero__content--middle</td>
                      </tr>
                      <tr>
                        <td><code>bottom</code></td>
                        <td>Vertically positions the overlay to the bottom.</td>
                        <td class="text-nowrap">hero__content--bottom</td>
                      </tr>
                      <tr>
                        <td><code>light</code></td>
                        <td>Adds a semi-transparent light background to the overlay.</td>
                        <td class="text-nowrap">hero__content--light</td>
                      </tr>
                      <tr>
                        <td><code>dark</code></td>
                        <td>Adds a semi-transparent dark background to the overlay.</td>
                        <td class="text-nowrap">hero__content--dark</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

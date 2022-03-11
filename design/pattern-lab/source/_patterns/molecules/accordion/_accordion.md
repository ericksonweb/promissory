---
order: 19
---
Vertically collapsing content panels.
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
      <td><code>items</code></td>
      <td>array</td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>name</code></pre></td>
      <td>string</td>
      <td>A unique identifier for the Accordion item.</td>
      <td>-</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>title</code></pre></td>
      <td>object</td>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>heading</code></pre></td>
      <td>object</td>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>level</code></pre></td>
      <td>integer</td>
      <td>Heading level 1-6.</td>
      <td class="text-nowrap"><code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>content</code></pre></td>
      <td>mixed</td>
      <td>The content of the <code>title</code>.</td>
      <td>-</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>content</code></pre></td>
      <td>mixed</td>
      <td>The content of the Accordion panel.</td>
      <td>-</td>
    </tr>
    <tr>
      <td><pre><code>attributes</code></td>
      <td>object</td>
      <td colspan="2"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>id</code></pre></td>
      <td>string</td>
      <td>A unique identifier for the Accordion group.</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
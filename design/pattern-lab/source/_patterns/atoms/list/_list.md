---
order: 7
---
A list of items with optional styling.
___
<h2 class="h3 font-family--sans-serif">Schema</h2>
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
  <td><code>element</code></td>
  <td>string</td>
  <td>The HTML element.</td>
  <td><code>"ul"</code></td>
  <td class="text-nowrap"><code>"ul"</code>, <code>"ol"</code>, <code>"dl"</code></td>
  <td>-</td>
</tr>
<tr>
  <td><code>items</code></td>
  <td class="text-nowrap">array or object</td>
  <td>
  <p>The items to display in the List.</p>
  <ul>
  <li>Items for <code>ul</code> and <code>ol</code> lists are structured in an array. Each item in the array is an object representing an <code>li</code> element.</li>
  <li>Items for <code>dl</code> lists are structured in an object. Each key/value pair in the hash represents a <code>dt</code>/<code>dd</code> pairing.</li>
  </ul>
  </td>
  <td>-</td>
  <td>-</td>
  <td>-</td>
</tr>
<tr>
  <td><code>unstyled</code></td>
  <td>boolean</td>
  <td>Removes <code>list-style</code> and <code>margin</code> CSS styling.</td>
  <td>-</td>
  <td><code>"true"</code></td>
  <td class="text-nowrap">list--style-none</td>
</tr>
<tr>
  <td><code>horizontal</code></td>
  <td>boolean</td>
  <td>Display list items horizontally when screen size is wide enough. Disables <code>list-style</code> CSS styling.</td>
  <td>-</td>
  <td><code>"true"</code></td>
  <td>-</td>
</tr>
<tr>
  <td><code>separator</code></td>
  <td>string</td>
  <td>Separate items in a <code>horizontal</code> list with a small graphical element.</td>
  <td>-</td>
  <td class="text-nowrap"><code>"bullet"</code>, <code>"pipe"</code></td>
  <td class="text-nowrap">separator--[<code>separator</code>]</td>
</tr>
</tbody>
</table>

---
order: 2
---
An interactive UI element used to submit forms, present a strong call to action or for other accessible, standard button functionality.
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
  <td><code>"button"</code></td>
  <td class="text-nowrap"><code>"a"</code>, <code>"button"</code>, <code>"input"</code></td>
  <td>-</td>
</tr>
<tr>
  <td><code>content</code></td>
  <td>string</td>
  <td>Content of the Button. Populates the <code>value</code> attribute when <code>element</code> property is <code>"input"</code>. Text only.</td>
  <td class="text-nowrap"><code>"Button"</code> or <code>"Input"</code> based on <br>value of <code>element</code> property.</td>
  <td>-</td>
  <td>-</td>
</tr>
<tr>
  <td><code>icon</code></td>
  <td>object</td>
  <td>Includes an Icon with the Link.</td>
  <td>-</td>
  <td class="text-nowrap">See <a href="/patterns/atoms-icon/index.html">Icon</a> for syntax.</td>
  <td>-</td>
</tr>
<tr>
  <td><code>wide</code></td>
  <td>boolean</td>
  <td>Style Button with extra width.</td>
  <td>-</td>
  <td><code>true</code></td>
  <td class="text-nowrap">btn--wide</td>
</tr>
<tr>
  <td><code>large</code></td>
  <td>boolean</td>
  <td>Style Button with large text.</td>
  <td>-</td>
  <td><code>true</code></td>
  <td class="text-nowrap">btn--large</td>
</tr>
</tbody>
<tbody>
<tr>
  <td><code>attributes</code></td>
  <td>object</td>
  <td colspan="4"></td>
</tr>
<tr>
  <td><pre>&nbsp;&nbsp;<code>href</code></pre></td>
  <td>string</td>
  <td>The URL that the hyperlink points to. If set, the <code>element</code> property will be automatically set to <code>"a"</code>.</td>
  <td>-</td>
  <td>-</td>
  <td>-</td>
</tr>
<tr>
  <td><pre>&nbsp;&nbsp;<code>type</code></pre></td>
  <td>string</td>
  <td>The <code>type</code> attribute of the Button. Used when <code>element</code> property is <code>"button"</code> or <code>"input"</code>.</td>
  <td><code>"button"</code></td>
  <td class="text-nowrap"><code>"button"</code>, <code>"reset"</code>, <code>"submit"</code></td>
  <td>-</td>
</tr>
</tbody>
</table>

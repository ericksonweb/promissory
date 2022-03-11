---
order: 6
---
An informational or contextual feedback message.
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
      <td><code>type</code></td>
      <td>string</td>
      <td>The type of Message being displayed.</td>
      <td><code>"status"</code></td>
      <td class="text-nowrap"><code>"status"</code>, <code>"warning"</code>, <code>"error"</code></td>
      <td class="text-nowrap">message--[<code>type</code>]</td>
    </tr>
    <tr>
      <td><code>content</code></td>
      <td>mixed</td>
      <td>The content of the Message.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>dismissible</code></td>
      <td>boolean</td>
      <td>Enables the Message to be closed and hidden.</td>
      <td>-</td>
      <td><code>true</code></td>
      <td class="text-nowrap">message--dismissible alert fade show</td>
    </tr>
  </tbody>
</table>
---
order: 18
---
A mobile-enabled responsive navigation menu.
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
      <td><code>name</code></td>
      <td>string</td>
      <td>A unique name for the Menu.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>items</code></td>
      <td>array</td>
      <td>The navigation items in the Menu, structured in <a href="/patterns/atoms-list/index.html">List</a> format.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>content</code></pre></td>
      <td>mixed</td>
      <td>The content of the navigation item.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>submenu</code></td>
      <td>boolean</td>
      <td>Designates the Menu as a submenu.</td>
      <td>-</td>
      <td><code>true</code></td>
      <td>menu__submenu</td>
    </tr>
  </tbody>
</table>
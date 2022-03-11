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
    <tr>
      <td><code>style</code></td>
      <td>object</td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>separator</code></pre></td>
      <td>string</td>
      <td>Separate top-level items with a small graphical element.</td>
      <td>-</td>
      <td class="text-nowrap"><code>"bullet"</code>, <code>"pipe"</code></td>
      <td class="text-nowrap">separator--[<code>separator</code>]</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>bar</code></pre></td>
      <td>boolean</td>
      <td>Style the Menu with an alternate "bar" format.</td>
      <td>-</td>
      <td class="text-nowrap"><code>true</code></td>
      <td class="text-nowrap">menu--bar</td>
    </tr>
  </tbody>
</table>
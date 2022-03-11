---
order: 18
---
A graphical user interface object that allows multiple documents or panels to be contained within a single window.
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
      <td>A unique identifier for the Tabs group.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>string</td>
      <td>Text shown when Tabs are collapsed at narrow screen size.</td>
      <td><code>"Tabs"</code></td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>list</code></td>
      <td class="text-nowrap">string or boolean</td>
      <td>
        <p>Determines the display method.</p>
        <ul>
          <li><code>"ul"</code> or <code>"ol"</code> will display Tabs as a List.</li>
          <li><code>false</code> will display Tabs as <code>&lt;div&gt;</code>s</li>
        </ul>
      </td>
      <td><code>"ul"</code></td>
      <td class="text-nowrap"><code>"ol"</code>, <code>false</code></td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>justify</code></td>
      <td class="text-nowrap">string</td>
      <td>Align Tabs horizontally.</td>
      <td>-</td>
      <td class="text-nowrap"><code>"center"</code>, <code>"right"</code></td>
      <td class="text-nowrap">tabs__content--justify-[<code>justify</code>]</td>
    </tr>
    <tr>
      <td><code>items</code></td>
      <td>array</td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>content</code></pre></td>
      <td>mixed</td>
      <td>The content of the Tab.</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

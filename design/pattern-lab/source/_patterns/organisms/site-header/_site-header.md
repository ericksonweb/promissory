---
order: 1
---
A mobile-enabled, responsive site header containing a logo, <a href="/patterns/molecules-menu/index.html">Menu</a> and optional additional content.
___
<h2 class="h3 font-family--sans-serif">Schema</h2>
<table class="table--minimal font-size--xsmall" role="table">
  <thead>
    <tr>
      <th>Twig Property</th>
      <th>Type</th>
      <th class="w-auto">Description</th>
      <th>Options</th>
      <th>CSS Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><pre><code>corporate</code></pre></td>
      <td>boolean</td>
      <td>Applies alternate "Corporate" styling to the Site Header, featuring an Erickson Blue background and block Menu style. Use of the Corporate style is intended for single-level navigation only and will disable any dropdown submenus, which will need to be recreated elsewhere.</td>
      <td><code>true</code></td>
      <td class="text-nowrap">site-header--corporate</td>
    </tr>
    <tr>
      <td><code>logo</code></td>
      <td>object</td>
      <td colspan="4">A logo image, typically linked to the homepage of the site.</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>content</code></pre></td>
      <td>mixed</td>
      <td>The logo image. Can be an image <a href="/patterns/atoms-media/index.html">Media</a> object, or inline SVG code.</td>
      <td>-</td>
      <td class="text-nowrap">logo site-header__logo</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>attributes</code></pre></td>
      <td>object</td>
      <td colspan="4"></td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;&nbsp;&nbsp;<code>href</code></pre></td>
      <td>string</td>
      <td>The URL of the logo link.</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td><code>menu</code></td>
      <td>object</td>
      <td colspan="4">
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>content</code></pre></td>
      <td>object</td>
      <td>The site navigation Menu.</td>
      <td class="text-nowrap">See <a href="/patterns/molecules-menu/index.html">Menu</a> for syntax.</td>
      <td class="text-nowrap">site-header__menu</td>
    </tr>
    <tr>
      <td><code>addl</code></td>
      <td>object</td>
      <td colspan="4">
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>content</code></pre></td>
      <td>mixed</td>
      <td>Additional content to display in the top-right of the header.</td>
      <td>-</td>
      <td class="text-nowrap">site-header__addl</td>
    </tr>
    <tr>
      <td><pre>&nbsp;&nbsp;<code>hide</code></pre></td>
      <td>boolean</td>
      <td>Hides the additional content when the Site Header is "stuck" to the top of the viewport and/or when the viewport width falls below the <code>lg</code> breakpoint.</td>
      <td><code>true</code></td>
      <td class="text-nowrap">site-header__addl--hide</td>
    </tr>
  </tbody>
</table>
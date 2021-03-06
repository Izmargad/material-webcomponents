export const template = `<h1>material-dropdown</h1>
<p>
    A dropdown menu is a temporary piece of material that appears upon interaction with a button, action, pointer, or
    other
    control. It contains at least two menu items.
</p>

<h3>Usage</h3>
<pre>
    &lt;material-dropdown&gt;
        &lt;i class="material-icons" slot="icon" tabindex="1"&gt;menu&lt;/i&gt;
        &lt;li slot="option" value="javascript"&gt;Javascript&lt;/li&gt;
        &lt;li slot="option" value="php"&gt;PHP&lt;/li&gt;
        &lt;li slot="option" value="java"&gt;Java&lt;/li&gt;
        &lt;li slot="option" value="scala"&gt;Scala&lt;/li&gt;
    &lt;/material-dropdown&gt;
</pre>


<h3>Styling</h3>
<ul>
    <li><code>--menu-background</code>: menu background color, default: #ffffff</li>
    <li><code>--icon-width</code>: icon width, default: 24px</li>
    <li><code>--icon-height</code>: icon height, default: 24px</li>
    <li><code>--menu-width</code>: menu width, default: 24px</li>
    <li><code>--menu-height</code>: menu height, default: 24px</li>
</ul>

<section class="demo">
    <h3>Demo</h3>
    <material-dropdown>
        <i class="material-icons" slot="icon" tabindex="1">menu</i>
        <li slot="option" value="javascript">Javascript</li>
        <li slot="option" value="php">PHP</li>
        <li slot="option" value="java">Java</li>
        <li slot="option" value="scala">Scala</li>
    </material-dropdown>
</section>`;

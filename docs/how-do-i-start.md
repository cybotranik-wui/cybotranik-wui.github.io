## How do I start

Add cybotranik library to the `<head>` tag of your page.

Use CDN 

```HTML
    <!-- Cybotranik WUI CDN-->
    <script src="https://unpkg.com/cybotranik-wui"></script>
```
or

Use library

Download this project and use one of the distribution files.

```HTML
    <!-- Cybotranik WUI Library -->
    <script src="dist/cybotranik-wui.min.js"></script>
```

## Examples

```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>

    <!-- Meta -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Site Information -->
    <title>Starter Example - Cybotranik WUI</title>
    <meta name="description" content="Starter Example. Cybotranik Web User Interface.">

    <!-- Cybotranik WUI -->
    <script async src="https://unpkg.com/cybotranik-wui"></script>
</head>

<body>

    <nav is="header-nav">
        <ul is="horizontal-menu">
            <li><a href="#home">Cybotranik</a></li>
            <li><a href="#fast-web-templates">Fast web templates</a></li>
            <li><a href="#depends-on-standards">Depends on standards</a></li>
            <li><a href="#compatible">Compatible</a></li>
            <li><a href="#semantics">Semantics</a></li>
            <li><a href="#cross-platform">Cross-Platform</a></li>
            <li><a href="#Mobile">Mobile</a></li>
        </ul>
    </nav>

    <section is="article-section" id="home">
        <header is="section-header">
            <h1>Web User Interface</h1>
        </header>
        <p is="section-description">The all-in-one, user interface kit. This interface is suitable for use in many
            programming languages.</p>
    </section>

    <section is="article-section" id="fast-web-templates">
        <header is="section-header">
            <h2>Fast web templates</h2>
        </header>
        <p is="section-description">It allows you to translate HTML code into programming languages, so you can quickly
            and effectively create web templates.</p>
    </section>

    <section is="article-section" id="depends-on-standards">
        <header is="section-header">
            <h2>Depends on standards</h2>
        </header>
        <p is="section-description">W3 standards compliant, semantic, new and old browser support, clean structure
            allows for quick application.</p>
    </section>

    <section is="article-section" id="compatible">
        <header is="section-header">
            <h2>Compatible</h2>
        </header>
        <p is="section-description">You can design sites that are compatible with search engines.</p>
    </section>

    <section is="article-section" id="semantics">
        <header is="section-header">
            <h2>Semantics</h2>
        </header>
        <p is="section-description">cybotranik-wui provides additional information to the browser's accessibility API.
        </p>
    </section>

    <section is="article-section" id="cross-platform">
        <header is="section-header">
            <h2>Cross-platform</h2>
        </header>
        <p is="section-description">It takes advantage of the additional features of the new generation of browsers, and
            supports browsers such as the older generation (ie ie8).</p>
    </section>

    <section is="article-section" id="Mobile">
        <header is="section-header">
            <h2>Mobile</h2>
        </header>
        <p is="section-description">It provides good looks on mobile devices and provides performance with a single file
            library.</p>
    </section>

    <footer>
        <p>copyright @ 2019 | Cybotranik WUI</p>
    </footer>

</body>

</html>
```

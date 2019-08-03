---
title: DECAF Documentation Theme
---

## Overview

This theme is designed to be used for DECAF documentation websites. It
uses [Bootstrap](https://getbootstrap.com). Refer to the following
sub-sections for the documentation of this theme.

## Quickstart

```
hugo new site decaf-docs-something
cd decaf-docs-something/
git init
git submodule add git@github.com:telostat/decaf-docs-theme.git
echo 'theme = "decafdocs"' >> config.toml
echo 'themesDir = "decaf-docs-theme/themes"' >> config.toml
mkdir content/pages/
echo -e "---\ntitle: Sample\ndate: 2019-01-01\n---\n\nHello" > content/pages/sample.md
echo "/resources" > .gitignore
hugo server
```

[Visit your page at http://localhost:1313/pages/sample/](http://localhost:1313/pages/sample/).

## Shortcodes

### `badge`

`{{</* badge "info" "Info "*/>}}`
: {{< badge "info" "Info">}}

`{{</* badge "danger" "Danger "*/>}}`
: {{< badge "danger" "Danger">}}

`{{</* badge "warning" "Warning "*/>}}`
: {{< badge "warning" "Warning">}}

`{{</* badge "success" "Success "*/>}}`
: {{< badge "success" "Success">}}

### `badge-group`

```
{{</* badge-group */>}}
{{</* badge "primary" "Hello" */>}}
{{</* badge "secondary" "World" */>}}
{{</* /badge-group */>}}
```

{{< badge-group >}}
{{< badge "primary" "Hello" >}}
{{< badge "secondary" "World" >}}
{{< /badge-group >}}

### `row` and `col` (Grid)

```
{{</* row "mb-3" */>}}
{{</* col "bg-danger text-white" */>}}
This is the contents of the column 1.
{{</* /col */>}}

{{</* col "bg-danger text-white" */>}}
This is the contents of the column 2.
{{</* /col */>}}
{{</* /row */>}}
```

{{< row "mb-3" >}}
{{< col "bg-danger text-white" >}}
This is the contents of the column 1.
{{< /col >}}

{{< col "bg-warning text-white" >}}
This is the contents of the column 2.
{{< /col >}}
{{< /row >}}


### Quick `colorbox`

```
{{</* colorbox "light" "dark" "extra classes such as border and mb-3" */>}}
This is a color box
{{</* /colorbox */>}}
```

{{< colorbox "light" "dark" "extra classes such as border and mb-3" >}}
This is a color box
{{< /colorbox >}}

### `kurl`

```
{{</* kurl "google" "preferences" "Google Preferences Page" */>}}
```

{{< kurl "google" "preferences" "Google Preferences Page" >}}

```
- {{</* kurl "hoogle" "?hoogle=map&scope=set%3Astackage" "Hoogle Search Result for map" */>}}
```

{{< kurl "hoogle" "?hoogle=map&scope=set%3Astackage" "Hoogle Search Result for map" >}}

### `todo`

```
{{</* todo assignee="Sinan" closed="2019-08-01" */>}}
Create a Hugo theme for DECAF documentation.
{{</* /todo */>}}
```

{{< todo assignee="Sinan" closed="2019-08-01" >}}
Create a Hugo theme for DECAF documentation.
{{< /todo >}}

```
{{</* todo assignee="Sinan" */>}}
Improve the theme documentation for `decaf-docs-theme`.
{{</* /todo */>}}
```

{{< todo assignee="Sinan" >}}
Improve the theme documentation for `decaf-docs-theme`.
{{< /todo >}}


### Latest updated pages

```
{{</* latest-updates */>}}
```

{{< latest-updates >}}

---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [https://docs.eatmeglobal.org/docs/hello](https://docs.eatmeglobal.org/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: "Hi!"
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```js title="sidebars.js"
export default {
  defaultSidebar: [
    "intro",
    // highlight-next-line
    "hello",
    {
      type: "category",
      label: "Tutorial",
      items: ["tutorial-basics/create-a-document"],
    },
  ],
};
```

## Linking

You can easily add links to other documents within your documentation. There are a few ways to do this:

Using Markdown syntax:

Using relative paths:

If you're linking to a document in the same directory or a subdirectory, you can use relative paths:

```[Link to Document in Same Directory](./another-doc-id)
[Link to Document in Subdirectory](./subdirectory/doc-id)
[Link to Document in Parent Directory](../doc-id)
```

Using the `@site` alias:

Docusaurus provides an @site alias that represents the base directory of your site. This is useful for absolute paths:

```md
[Link to Another Document](/docs/another-doc-id)
```

Using the `@docusaurus/Link` component:

For more dynamic linking, especially in MDX files, you can use the Link component:

```js
import Link from "@docusaurus/Link";

<Link to="/docs/another-doc-id">Link to Another Document</Link>;
```

Linking to specific sections:

You can link to specific headers within a document by adding a hash (#) followed by the header text, converted to kebab-case:

```md
[Link to Specific Section](another-doc-id#section-title)
```

Examples:
Assuming you have a document structure like this:

```
docs/
├── intro.md
├── advanced/
│ └── feature.md
└── api/
└── methods.md
```

You could link to these documents as follows:

```md
// In intro.md
[Check out our advanced features](advanced/feature)
[API Methods](api/methods)

// In feature.md
[Back to Intro](../intro)
[API Methods](../api/methods)

// In methods.md
[Introduction](../intro)
[Advanced Features](../advanced/feature#specific-feature)
```

Remember:
The .md extension is not needed in the links.
The links are case-sensitive.
If you change a file name, make sure to update all links pointing to that file.

These methods allow you to create a well-connected documentation structure in Docusaurus, enhancing navigation for your users.

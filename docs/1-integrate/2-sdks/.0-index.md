---
title: SDKs
sidebar_label: Overview
slug: /integrate/sdks
---

Our software development kits remove the need to handle sensitive data by enabling you to process payments and transactions in the same secure way as Frames and Hosted Payments.

## Mobile SDK libraries

Create a markdown file at `docs/my-doc.md`:

```mdx title="docs/hello.md"
---
title: Hello, World!
---

## Hello, World!

This is your first document in **Docusaurus**, Congratulations!
```

A new document is now available at `http://localhost:3000/docs/hello`.

## Add your document to the sidebar

Add `hello` to the `sidebars.js` file:

```diff title="sidebars.js"
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Docusaurus Tutorial',
-     items: ['getting-started', 'create-a-doc', ...],
+     items: ['getting-started', 'create-a-doc', 'hello', ...],
    },
  ],
};
```

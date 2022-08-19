---
layout: page
title: Webflow Preview Link
subtitle: webflow-demo
menubar: menu
hero_height: is-small
toc: true
# tabs: webflow-table
---

<a class="button is-danger" href="https://sygnal-webflow-utils.webflow.io/demo/collection-item-count" target="_blank">View Demonstration in Webflow</a>

Enables you to dynamically construct a Webflow preview link to the current page.

## What is a Preview Link?

In Webflow, a 
[preview link](https://university.webflow.com/lesson/share-your-project-and-invite-collaborators)
is a special link that allows someone to view a read-only version of your Webflow site in the designer.

## What would you Use this for?

If you develop Webflow sites, and want to make it easy for someone to click a button that switches the current page into a design mode view, this utility enables that.

## How to Use it

- You must have created a preview link to your site, and extract the preview link Id. It looks something like this- `4d388483d99c6cc36c58ae966e92c615`.

Limitations;

- Does not work with Collection pages, since they require an additional collection item ID that is not emitted into the page.

## Implementation

```
<script type="module">
import { createWebflowPreviewLink } from 'https://cdn.jsdelivr.net/gh/sygnaltech/webflow-util/src/modules/webflow-demo.js';
$(function () {
    $("#previewLink").attr("href", 
  		createWebflowPreviewLink('4d388483d99c6cc36c58ae966e92c615')
      );    
});
</script>
```

Best practices;

- Put in the site-level configuration so that it appears on all pages. Then you can choose which pages actually utilize it.






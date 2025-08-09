---
title: "first post"
description: "this is my first post on my new blog."
date: "07/31/2025"
tags: ["blog", "first-post"]
---

hello world! im just testing this out

### 3. Create a new page

Create a new page in the `src/pages` directory. The file name should be the same as the route you want to create. For example, if you want to create a page at `/about`, create a file named `about.vue`.

```bash
touch src/pages/about.vue
```

now, open the `about.vue` file and add the following code:

```vue
<template>
	<div>
		<h1>About Page</h1>
		<p>This is the about page.</p>
	</div>
</template>
<script setup>
// You can add any JavaScript logic here if needed
</script>
<style scoped>
/* Add any styles specific to this page */
</style>
```

great! now you have a new page at `/about`. you can navigate to it in your browser.
here is how the file structure should look like:

- `src/pages/about.vue`
- `src/pages/index.vue` (your home page)
- `src/pages/blog/index.vue` (your blog index page)
- `src/pages/blog/first-post.vue` (your first blog post)

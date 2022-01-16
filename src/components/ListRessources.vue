<template>
<ul>
    <li>{{ tittle }}</li>
    <li>{{ description }}</li>
    <li>{{ link }}</li>
</ul>
</template>

<script>
export default {
  props: {
    id: String,
    tittle: String,
    description: String,
    link: String,
  },
};
</script>

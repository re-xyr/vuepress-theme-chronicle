<template>
    <section>
        <a
            class="item dim-anchor"
            :class="/.+:/.test(cat.name) ? 'catlist-special' : ''"
            v-for="cat in list.sort(({ name: a }, { name: b }) => a > b ? 1 : -1)"
            :key="cat.path"
            :href="cat.path"
        >
            {{ cat.name }}
        </a>
    </section>
</template>

<style scoped>
.item {
    font-size: 1.5em;
    padding: .3em;
    display: block;
}
</style>


<script>
export default {
    name: 'CategoryList',
    props: ['list'],
}
</script>

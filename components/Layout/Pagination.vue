<template>
    <section class="pagination">
        <a class="dim-anchor" :href="prev" v-if="prev">☜</a>
        <a class="dim-anchor" :href="next" v-if="next">☞</a>
    </section>
</template>

<style scoped>
.pagination {
    text-align: right;
}

.pagination a {
    margin-left: 10px;
    font-size: 1.5em;
}
</style>

<script>
export default {
    name: 'Pagination',
    props: ['prev', 'next'],
}
</script>

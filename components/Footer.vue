<template>
    <div class="footer">
        <a class="dim-anchor" :href="$site.themeConfig.copy.link">&copy; {{ $site.themeConfig.copy.name }} {{ $site.themeConfig.copy.beginYear }} – {{ new Date().getFullYear() }}</a>
    </div>
</template>

<style scoped>
.footer {
    margin-top: 1em;
    text-align: right;
}
</style>

<script>
export default {
    name: 'Footer',
}
</script>

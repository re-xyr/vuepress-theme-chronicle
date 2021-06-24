<template>
    <header>
        <div class="header-title">
            <a href="/">{{ title }}</a>
        </div>
        <div class="header-aside">
            <template v-for="(x, ix) in $site.themeConfig.nav">
                <a :key="ix" :href="x.link" class="dim-anchor">{{ x.text }}</a>
            </template>
        </div>
    </header>
</template>

<style scoped>
    header {
        padding: 1em 0;
        display: flex;
    }
    
    .header-title {
        flex-grow: 1;
        font-size: 1.3em;
        font-weight: bold;
    }

    .header-title a {
        text-decoration: none;
    }

    .dim-anchor {
        margin-right: .3em;
    }
</style>

<script>
export default {
    name: 'Header',
    props: ['title'],
}
</script>

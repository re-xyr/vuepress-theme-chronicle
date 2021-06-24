<template>
    <div class="layout">
        <Header v-if="!$frontmatter.hideHeader" :title="$frontmatter.title" />

        <main v-if="$frontmatter.layout === 'FrontmatterKey'">
            <CategoryList :list="$frontmatterKey.list" />
        </main>
        <main v-else-if="$frontmatter.layout == 'FrontmatterPagination' || $frontmatter.layout == 'Layout'">
            <PageList :pages="$pagination.pages" />
            <Pagination :prev="$pagination.prevLink" :next="$pagination.nextLink"/>
        </main>
        <main v-else>
            <MarkdownContent />
        </main>
        
        <Footer v-if="!$frontmatter.hideFooter" />
    </div>
</template>

<script>
import Pagination from '../components/Layout/Pagination.vue'
import CategoryList from '../components/Layout/CategoryList.vue'
import PageList from '../components/Layout/PageList.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MarkdownContent from '../components/Layout/MarkdownContent.vue'
export default {
    name: 'Layout',
    components: {
        CategoryList,
        Pagination,
        PageList,
        Header,
        Footer,
        MarkdownContent,
    },
}
</script>

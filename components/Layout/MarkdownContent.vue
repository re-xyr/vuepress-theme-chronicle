<template>
    <section>
        <div v-if="!$frontmatter.notPost" class="content-metadata">
            <template v-if="$frontmatter.date && new Date($frontmatter.date).toString() !== 'Invalid Date'">
                {{new Date($frontmatter.date).toLocaleDateString()}}
            </template>
            <template v-if="$frontmatter.category instanceof Array && $frontmatter.category.length > 0">
                <a class="dim-anchor" v-for="cat in $frontmatter.category" :key="cat" :href="`/category/${cat}`">{{ cat }}</a>
            </template>
        </div>
        <Content class="content" />
    </section>
</template>

<style>
.content .header-anchor {
    color: #0003 !important;
    text-decoration: none;
}

.content-metadata {
    font-size: .7em;
    color: gray;
    text-align: right;
}

.content-metadata a {
    margin-right: .3em;
}

.content ul,
.content ol {
    padding-left: 30px;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6,
.content p,
.content ul,
.content ol,
.content table,
.content blockquote,
.content pre {
    margin: 10px 0;
}

.content :not(pre)>code {
    color: gray;
    font-size: .9em;
}

.content img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: max-content;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
    font-weight: bold;
    margin: 2em 0 0 0;
    letter-spacing: .1em;
}

.content .header-anchor {
    display: none;
}

.content *:hover>.header-anchor {
    animation: 1s display-delay;
    display: initial;
    float: right;
    color: gray;
    transition: .2s;
}

.content *:hover>.header-anchor:hover {
    color: black !important;
    text-decoration: none;
}

.content h1 {
    font-size: 1.6em;
    border-top: 1px #ccc solid;
    padding-top: .5em;
    text-transform: none;
    font-variant: small-caps;
}
.content h2 {
    font-size: 1.3em;
    font-variant: small-caps;
}
.content h3 {
    font-size: .9em;
}
.content h4 {
    font-size: .9em;
    color: gray;
}
.content h5 {
    font-size: .9em;
    font-weight: normal;
}
.content h6 {
    font-size: .9em;
    font-weight: normal;
    color: gray;
}

.content hr {
    border: none;
    margin: 0;
}

.content hr::before {
    content: '* * *';
    display: block;
    text-align: center;
    margin: 3em 0;
    color: #aaa;
}

.content a {
    color: #005;
    text-decoration: 1px underline #0053;
    transition: .2s;
}
.content a:visited {
    color: #305;
    text-decoration-color: #3053;
}
.content a:hover {
    color: #f00;
    text-decoration-color: #f00;
}

.content pre,
.content code {
    font-family: preferred-mono, monospace;
    font-variant-caps: normal;
    letter-spacing: 0;
}

.content pre {
    font-size: .9em;
    border: solid 1px #ddd;
    border-radius: 0;
    background: none;
}

.content :not(pre) > code {
    border: dotted 1px #ccc;
    padding: 0.1em 0.25em;
    border-radius: 3px;
}

.content blockquote {
    margin: 1.5em;
    padding: .2em 1em;
    font-size: 0.9em;
    line-height: 1.8em;
    border-left: 4px solid #aaa;
    color: gray;
}

.content table {
    border-collapse: collapse;
    width: 100%;
}

.content td,
.content th { 
    padding: .5em;
}

.content th {
    border-bottom: 1px solid gray;
}

.content td {
    border-bottom: 1px solid #ddd;
}

.content sup.footnote-ref {
    font-size: unset;
    vertical-align: middle;
    padding: 2px;
}
</style>


<script>
import 'prismjs/themes/prism-solarizedlight.css'
export default {
    name: 'MarkdownContent',
}
</script>

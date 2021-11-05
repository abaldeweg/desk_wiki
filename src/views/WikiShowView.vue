<template>
  <article>
    <b-container size="m" v-if="wiki.state.wiki">
      <router-link
        :to="{ name: 'wiki.edit', params: { id: wiki.state.wiki.id } }"
        >{{ $t('edit') }}</router-link
      >
    </b-container>

    <b-container size="m" v-if="wiki.state.wiki">
      <div v-html="markdown(wiki.state.wiki.body)" />
    </b-container>
  </article>
</template>

<script>
import useWiki from '@/composables/useWiki'
import { onMounted, toRefs } from '@vue/composition-api'
import { marked } from 'marked'

export default {
  name: 'wiki-edit-view',
  head: {
    title: 'Edit Wiki',
  },
  props: {
    id: String,
  },
  setup(props) {
    const { id } = toRefs(props)

    const wiki = useWiki()

    onMounted(() => {
      wiki.show(id.value)
    })

    const markdown = (content) => {
      return marked.parse(content)
    }

    return { wiki, markdown }
  },
}
</script>

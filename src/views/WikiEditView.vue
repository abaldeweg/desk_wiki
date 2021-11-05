<template>
  <article>
    <b-container size="m">
      <h1>{{ $t('edit_wiki') }}</h1>
    </b-container>

    <b-container size="m" v-if="wiki.state.wiki">
      <router-link
        :to="{ name: 'wiki.show', params: { id: wiki.state.wiki.id } }"
      >
        {{ $t('show') }}
      </router-link>
    </b-container>

    <b-container size="m" v-if="wiki.state.wiki">
      <b-form @submit.prevent="wiki.update()">
        <b-form-group>
          <b-form-item>
            <b-form-label for="title">{{ $t('title') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input v-model="wiki.state.wiki.title" />
          </b-form-item>
        </b-form-group>

        <b-form-group>
          <b-form-item>
            <b-form-label for="body">{{ $t('body') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-textarea v-model="wiki.state.wiki.body" rows="25" />
          </b-form-item>
        </b-form-group>

        <b-form-group buttons>
          <b-form-item>
            <b-button design="primary">{{ $t('save') }}</b-button>
          </b-form-item>
        </b-form-group>
      </b-form>
    </b-container>
  </article>
</template>

<script>
import useWiki from '@/composables/useWiki'
import { onMounted, toRefs } from '@vue/composition-api'

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

    return { wiki }
  },
}
</script>

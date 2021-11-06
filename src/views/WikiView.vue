<template>
  <article>
    <b-container size="m">
      <h1>{{ $t('wikis') }}</h1>
    </b-container>

    <b-container size="m">
      <b-form @submit.prevent="create()">
        <b-form-group>
          <b-form-item>
            <b-form-label for="title" hidden>{{ $t('title') }}</b-form-label>
          </b-form-item>
          <b-form-item>
            <b-form-input
              :placeholder="$t('add_new_wiki')"
              v-model="state.title"
            />
          </b-form-item>
        </b-form-group>
      </b-form>
    </b-container>

    <b-container size="m">
      <b-list
        v-for="item in wiki.state.wikis"
        :key="item.id"
        :route="{ name: 'wiki.show', params: { id: item.id } }"
        divider
      >
        <template #title>{{ item.title }}</template>
        <template #options>
          <b-dropdown>
            <template #selector>
              <b-icon type="meatballs" />
            </template>
            <b-dropdown-item
              icon="pencil"
              @click.prevent="
                $router.push({ name: 'wiki.edit', params: { id: item.id } })
              "
            >
              {{ $t('edit') }}
            </b-dropdown-item>
            <b-dropdown-item icon="bin" @click.prevent="wiki.remove(item.id)">
              {{ $t('remove') }}
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-list>
    </b-container>
  </article>
</template>

<script>
import useWiki from '@/composables/useWiki'
import { reactive } from '@vue/composition-api'

export default {
  name: 'wiki-view',
  head: {
    title: 'Wiki',
  },
  setup() {
    const state = reactive({
      title: '',
    })

    const create = () => {
      wiki.create({ title: state.title, body: '# ' + state.title }).then(() => {
        state.title = ''
      })
    }

    const wiki = useWiki()

    return { state, wiki, create }
  },
}
</script>

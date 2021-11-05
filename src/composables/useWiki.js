import api from '@/api/wiki'
import { onMounted, reactive } from '@vue/composition-api'

export default function useWiki() {
  const state = reactive({
    wikis: null,
    wiki: null,
  })

  const list = () => {
    return api.list().then((response) => {
      state.wikis = response.data
    })
  }

  onMounted(list)

  const create = (title) => {
    return api.create({ title }).then(() => {
      list()
    })
  }

  const show = (id) => {
    return api.show(id).then((response) => {
      state.wiki = response.data
    })
  }

  const update = () => {
    return api
      .update(state.wiki.id, {
        title: state.wiki.title,
        body: state.wiki.body,
      })
      .then(() => {
        list()
      })
  }

  const remove = (id) => {
    return api.remove(id).then(() => {
      list()
    })
  }

  return { state, list, create, show, update, remove }
}

<template>
  <nuxt-child />
</template>

<script>
export default {
  async middleware ({ params, store, route, redirect }) {
    if (route.name === 'project') { return redirect('/') }
    return await store.dispatch('getCurrentProject', params)
  },
  validate ({ store }) {
    return !!store.state.current.project
  }
}
</script>
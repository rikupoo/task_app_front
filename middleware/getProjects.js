export default async ({ $auth, store, $axios }) => {
  // ログイン済みかつ、プロジェクト一覧が存在しないとき
  if ($auth.loggedIn && !store.state.projects.length) {
    await $axios.$get('/api/v1/projects')
      .then(response => store.dispatch('getProjects', response))
  }
}
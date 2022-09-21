<template>
  <v-app>
    <bef-login-app-bar />
    <v-main>
      <nuxt />
    </v-main>
    <bef-login-footer />
  </v-app>
</template>

<script>
import befLoginAppBar from '~/components/beforeLogin/befLoginAppBar'
import befLoginFooter from '~/components/beforeLogin/befLoginFooter'

export default {
  middleware: 'loggedInIsRedirects',
  components: {
    befLoginAppBar,
    befLoginFooter
  },
}
</script>

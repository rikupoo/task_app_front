<template>
  <v-app-bar
    app
    :height="appBarHeight"
    color="white"
  >
    <nuxt-link
      to="/"
      class="text-decoration-none"
    >
      <app-logo />
    </nuxt-link>

    <app-title
      class="hidden-mobile-and-down"
    />

    <v-spacer />

    <signup-link />
    <login-link />
  </v-app-bar>
</template>

<script>
import appLogo from '~/components/ui/appLogo'
import loginLink from '~/components/beforeLogin/loginLink'
import signupLink from '~/components/beforeLogin/signupLink'
import appTitle from '~/components/ui/appTitle'

export default {
  components: {
    appLogo,
    signupLink,
    loginLink,
    appTitle
  },
  data ({ $store }) {
    return {
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  }
}
</script>
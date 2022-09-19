<template>
  <bef-login-form-card>
    <template
      #form-card-content
    >
      <v-form
      v-model="isValid">
        <user-form-name />
        <user-form-email />
        <user-form-password />
      </v-form>
      <v-btn
        :disabled="!isValid"
        block
        color="myblue"
        class="white--text"
      >
        登録する
      </v-btn>
    </template>
  </bef-login-form-card>
</template>

<script>
import befLoginFormCard from '~/components/beforeLogin/befLoginFormCard'
import userFormEmail from '~/components/user/userFormEmail'
import userFormName from '~/components/user/userFormName'
import userFormPassword from '~/components/user/userFormPassword'

export default {
  components:{
    userFormEmail,
    userFormName,
    userFormPassword,
    befLoginFormCard
  },
  layout: 'beforeLogin',
  data () {
    return {
      isValid: false
    }
  }
}
</script>
<template>
  <bef-login-form-card>
    <template
      #form-card-content
    >
      <v-form
      v-model="isValid">
      <user-form-name
        :name.sync="params.user.name"
      />
      <!-- :email.sync 追加 -->
      <user-form-email
        :email.sync="params.user.email"
      />
      <!-- :password.sync 追加 -->
      <user-form-password
        :password.sync="params.user.password"
      />
      </v-form>
      <v-btn
        :disabled="!isValid"
        block
        color="myblue"
        class="white--text"
      >
        登録する
      </v-btn>
      <v-card-text>
      {{ params }}
    </v-card-text>
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
      isValid: false,
      params: { user: { name: '', email: '', password: '' } }
    }
  }
}
</script>
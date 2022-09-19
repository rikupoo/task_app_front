<template>
  <bef-login-form-card>
    <template
      #form-card-content
    >
      <v-form
      ref="form"
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
        :disabled="!isValid || loading"
        :loading="loading"
        block
        color="myblue"
        class="white--text"
        @click="signup"
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
      loading: false,
      params: { user: { name: '', email: '', password: '' } }
    }
  },
  methods: {
    signup () {
      this.loading = true
      setTimeout(() => {
        this.formReset()
        this.loading = false
      }, 1500)
    },
    formReset () {
      this.$refs.form.reset()
      this.params = { user: { name: '', email: '', password: '' } }
    }
  }
}
</script>
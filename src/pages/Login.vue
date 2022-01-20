<template>
  <header></header>
  <base-dialog :show="!!error" title="An error occured" @close="handleError">
        <p>{{ error }}</p>
      </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
        <p>Authenticating...</p>
    </base-dialog>
  <section>
    <form @submit.prevent="submitForm">
        <p v-if="!formIsValid" class="error">
          Please enter valid email address and password (must be at least 6
          characters long)
        </p>
        <div>
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <base-button>{{ submitButtonCaption }}</base-button>
        <span @click="switchAuthMode" class="switchmode">{{
          swithModeButtonCaption
        }}</span>
    </form>
  </section>
</template>

<script>
import BaseDialog from '../ui/BaseDialog.vue'

export default {
    components: {BaseDialog},
    data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    swithModeButtonCaption() {
      if (this.mode !== 'login') {
        return 'Login instead';
      } else {
        return 'Signup instead';
      }
    },
  },
  methods: {
    async submitForm() {
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password
      }

      try {
        if (this.mode == 'login') {
          await this.$store.dispatch('login', actionPayload)
        } else {
          await this.$store.dispatch('signup', actionPayload);
        }
        const redirectUrl = '/main' ;
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error || 'Failed to authenticate, please try again.';
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    handleError() {
        this.error = null
    }
  },
}
</script>

<style scoped>
header{
    background-color: green;
    width: 100%;
    height: 40px;
}

div{
    padding: 10px;
    text-align: left
}

form{
    margin: auto;
    text-align: center;
    width: 500px;
}

h2 {
    color: white;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  border-radius: 3px;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color: white;
}

section{
    background-image: url('https://dynamicassets.basf.com/is/image/basf/padi-malaysia:33x10?fmt=webp&fit=crop%2C1&wid=1920&hei=582');
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    padding: 10px;
}

.error{
    color: red;
    font-size: 12px;
}

.switchmode{
  color: white;
  cursor: pointer;
  text-decoration: underline;
  margin: 0 0.5rem;
}
</style>
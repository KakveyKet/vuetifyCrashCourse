<template>
  <v-container fluid
    ><v-overlay :model-value="isLoading" class="justify-center align-center">
      <v-progress-circular v-if="isLoading" indeterminate color="white"></v-progress-circular>
    </v-overlay>
    <v-row class="justify-center">
      <v-col cols="5">
        <v-card class="pa-5 mx-auto">
          <v-card-title> Login Here </v-card-title>
          <v-card-item>
            <v-form fast-fail @submit.prevent="submit">
              <v-text-field
              :rules="[rules.required, rules.email]"
                prepend-inner-icon="mdi-mail"
                variant="solo"
                v-model="form.email"
                label="Email"
                clearable
              ></v-text-field>
              <v-text-field
                type="password"
                variant="solo"
                prepend-inner-icon="mdi-key"
                v-model="form.password"
                label="Password"
                clearable
              ></v-text-field>
              <v-checkbox
                v-model="form.remember"
                label="Remember Me"
              ></v-checkbox>

              <v-btn variant="elevated" type="submit" color="red" block class="mt-2">
                <span>Submit</span>
              </v-btn>
            </v-form>
          </v-card-item>
          <v-card-action>
            <div class="mx-4">
              <v-btn block to="/register"> Register </v-btn>
            </div>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Form {
  email: string;
  password: string;
  remember: boolean;
}

const form = ref<Form>({
  email: "",
  password: "",
  remember: false,
});

const isLoading = ref(false);

function submit() {
  if(form.value.email == ""){
    return
  }
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    alert(JSON.stringify(form.value));
  }, 3000);
}
const rules = {

          required: (value:any) => !!value || 'Required.',
          counter: (value:any) => value.length <= 20 || 'Max 20 characters',
          email: (value: any) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
}
</script>

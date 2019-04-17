<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="newWifiData.name"
                label="名前"
                v-bind:counter="20"
                v-bind:rules="nameRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="newWifiData.ssid"
                label="SSID"
                v-bind:rules="inputRules"
                required
              ></v-text-field>
              <v-text-field
                v-model="newWifiData.passwd"
                v-bind:append-icon="passwdShow ? 'visibility' : 'visibility_off'"
                v-bind:type="passwdShow ? 'text' : 'password'"
                label="パスワード"
                v-bind:rules="inputRules"
                required
                v-on:click:append="passwdShow = !passwdShow"
              ></v-text-field>
              <v-select
                v-bind:items="types"
                v-bind:value="newWifiData.type"
                label="暗号化方式"
                v-bind:rules="inputRules"
                required
              ></v-select>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-dialog v-model="dialog" width="300">
              <template v-slot:activator="{ on }">
                <v-btn flat v-bind:disabled="!valid" color="info" v-on:click="addWifi" v-on="on">追加</v-btn>
              </template>

              <v-card>
                <v-card-title class="headline" primary-title>Wi-Fiを追加しました</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" flat v-on:click="goBackHome">閉じる</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import router from '../router'

export default {
  data: function () {
    return {
      passwdShow: false,
      types: [
        'WPA',
        'WEP'
      ],
      newWifiData: {
        name: '',
        ssid: '',
        passwd: '',
        type: 'WPA'
      },
      valid: true,
      nameRules: [
        v => !!v || '入力してください',
        v => v.length <= 20 || '20文字以内で入力してください'
      ],
      inputRules: [
        v => !!v || '入力してください'
      ],
      dialog: false
    }
  },
  methods: {
    addWifi: function () {
      this.$emit('add-wifi-event', this.newWifiData)
    },
    goBackHome: function () {
      this.dialog = false
      router.push('/')
    }
  }
}
</script>

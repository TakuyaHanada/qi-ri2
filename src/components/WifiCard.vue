<template>
  <v-card>
    <v-card-media>
      <qriously class="qr" v-bind:value="qrValue" v-bind:size="150" align-end/>
    </v-card-media>
    <v-card-text>
      <v-text-field v-model="wifiData.ssid" label="SSID" readonly></v-text-field>
      <v-text-field
        v-model="wifiData.passwd"
        v-bind:append-icon="passwdShow ? 'visibility' : 'visibility_off'"
        v-bind:type="passwdShow ? 'text' : 'password'"
        label="パスワード"
        readonly
        v-on:click:append="passwdShow = !passwdShow"
      ></v-text-field>
      <v-select v-bind:items="types" v-bind:value="wifiData.type" label="暗号化方式" readonly></v-select>
    </v-card-text>
    <v-card-actions>
      <v-dialog v-model="dialog" width="300">
        <template v-slot:activator="{ on }">
          <v-btn flat color="error" v-on="on">削除</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline" primary-title>本当に削除しますか？</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat v-on:click="dialog = false">キャンセル</v-btn>
            <v-btn color="error" flat v-on:click="removeWifi">削除</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
// import router from '../router'

export default {
  data: function () {
    return {
      passwdShow: false,
      types: [
        'WPA',
        'WEP'
      ],
      dialog: false
    }
  },
  props: {
    wifiData: Object,
    index: Number
  },
  methods: {
    removeWifi: function () {
      this.dialog = false
      this.$emit('remove-wifi-event', this.index)
    }
  },
  computed: {
    qrValue: function () {
      let wifi = this.wifiData
      return 'WIFI:S:' + wifi.ssid + ';T:' + wifi.type + ';P:' + wifi.passwd + ';;'
    }
  }
}
</script>

<style lang="scss">
.qr {
  text-align: center;
}
</style>

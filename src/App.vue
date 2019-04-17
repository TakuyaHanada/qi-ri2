<template>
  <v-app id="inspire">
    <Header v-bind:menus="menus"></Header>
    <router-view
      v-bind:wifiDatas="wifiDatas"
      v-on:add-wifi-event="addWifiToLocalStorage"
      v-on:remove-wifi-event="removeWifiFromLocalStorage"
    ></router-view>
    <NewButton></NewButton>
  </v-app>
</template>

<script>
import Header from './components/Header'
import NewButton from './components/NewButton'

export default {
  name: 'App',
  components: {
    Header,
    NewButton
  },
  created: function () {
    let items = localStorage.getItem('wifiDatas')
    let wifiDatas = JSON.parse(items)
    if (wifiDatas != null) {
      this.wifiDatas = wifiDatas
    } else {
      this.wifiDatas = []
    }
  },
  data: function () {
    return {
      menus: [
        {
          icon: 'home',
          title: 'ホーム',
          path: '/'
        },
        {
          icon: 'add',
          title: 'Wi-Fiを追加',
          path: '/new'
        },
        {
          icon: 'system_update',
          title: 'インストール方法',
          path: '/install'
        },
        {
          icon: 'settings',
          title: '設定',
          path: '/settings'
        }
      ],
      wifiDatas: [
        {
          name: 'sample-name',
          ssid: 'sample-ssid',
          passwd: 'sample-password',
          type: 'WPA'
        },
        {
          name: 'sample-name2',
          ssid: 'sample-ssid2',
          passwd: 'sample-password2',
          type: 'WEP'
        }
      ]
    }
  },
  methods: {
    addWifiToLocalStorage: function (newWifiData) {
      this.wifiDatas.push(newWifiData)
      let wifiDatasStr = JSON.stringify(this.wifiDatas)
      localStorage.setItem('wifiDatas', wifiDatasStr)
    },
    removeWifiFromLocalStorage: function (index) {
      this.wifiDatas.splice(index, 1)
      let wifiDatasStr = JSON.stringify(this.wifiDatas)
      localStorage.setItem('wifiDatas', wifiDatasStr)
    }
  }
}
</script>

<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <!-- データがない場合 -->
        <v-card v-if="noDatas">
          <v-card-title>登録しているWi-Fiがありません</v-card-title>
        </v-card>
        <!-- ある場合 -->
        <v-expansion-panel v-else popout>
          <v-expansion-panel-content v-for="(wifiData, i) in wifiDatas" v-bind:key="i">
            <template v-slot:header>
              <div>{{wifiData.name}}</div>
            </template>

            <WifiCard
              v-bind:wifiData="wifiData"
              v-bind:index="i"
              v-on:remove-wifi-event="pipeRemoveEvent"
            ></WifiCard>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WifiCard from './WifiCard'

export default {
  name: 'Home',
  components: {
    WifiCard
  },
  props: {
    wifiDatas: Array
  },
  methods: {
    pipeRemoveEvent: function (index) {
      this.$emit('remove-wifi-event', index)
    }
  },
  computed: {
    noDatas: function () {
      if (this.wifiDatas.length === 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

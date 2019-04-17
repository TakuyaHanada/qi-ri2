<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-expansion-panel>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>iPhoneの方</div>
            </template>
            <v-card>
              <v-card-text>
                <ol>
                  <li>以下のサイトにアクセス</li>
                  <a
                    href="https://takuyahanada.github.io/qi-ri2/dist/index.html"
                  >https://takuyahanada.github.io/qi-ri2/dist/index.html</a>
                  <li class="pt-3">以下の動画のようにインストール</li>
                  <img class="install-img" src="../assets/IMG_3821.png" alt="iphone">
                </ol>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>Androidの方</div>
            </template>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.install-img {
  width: 100%;
  text-align: center;
}
</style>

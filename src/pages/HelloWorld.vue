<template>
  <div class="hello-world">
    <h1>Hello, World!</h1>
    <p>Quasar v{{ $q.version }}</p>
  </div>

  <div class="q-pa-md example-row-all-breakpoints">
    <div class="row">
      <div class="col">
        <!--First Card-->
        <q-card dark bordered class="bg-grey-9 my-card">
          <q-card-section>
            <div class="text-h6">scss</div>
            <div class="text-subtitle2">
              <pre><code>
.hello-world {
  text-align: center;
  margin-top: 50px;
  }
.my-card {
  width: 100%;
  max-width: 250px;
  }
            </code></pre>
            </div>
          </q-card-section>

          <q-separator dark inset />
        </q-card>
      </div>
      <div class="col">
        <!--Second Card-->
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6">sass</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <pre v-pre><code>
.hello-world
  text-align: center
  margin-top: 50px

.my-card
  width: 100%
  max-width: 250px
      </code></pre>
          </q-card-section>

          <q-separator inset />

          <q-card-section>q-separator inset / : 空間を分ける線 </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card class="my-card">
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/T5yLr2q7zX0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <q-card-section>
            <div class="text-h6">KOREC Cafe</div>
            <div class="text-subtitle2">by ?</div>
          </q-card-section>

          <q-card-section class="q-pt-none"> 動画 </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-uploader
          url="http://localhost:4444/upload"
          label="Upload files"
          color="purple"
          square
          flat
          bordered
          style="max-width: 300px"
        />
        <div class="col-4">
        <q-img
          src="https://picsum.photos/500/300"
          :ratio="1"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  setup() {
    // goQCard
    function goQCard() {
      window.location.href = "https://quasar.dev/vue-components/card";
    }

    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      goQCard,
    };
  },
};
</script>

<style lang="sass" scoped>
.hello-world
  text-align: center
  margin-top: 50px

.my-card
  width: 100%
  max-width: 300px
  height: 350px

.video-container
  position: relative
  padding-bottom: 56.25%
  height: 0
  overflow: hidden

.video-container iframe
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

.example-row-all-breakpoints
  .row > div
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
  .row + .row
    margin-top: 1rem
</style>

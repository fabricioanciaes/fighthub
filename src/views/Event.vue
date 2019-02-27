<template>
  <div class="event-page page">
    <div class="container error-wrapper">
      <div v-if="loading"><VLoader disclaimer="true" /></div>
      <VError v-if="error" v-bind:error="this.errorMsg" />
    </div>
    <div v-if="this.error == false && this.loading == false">
      <section
        :class="['hero', event.imgUrl != '' ? 'has-img' : '']"
        :style="{ backgroundImage: 'url(' + event.imgUrl + ')' }"
      >
        <div class="container">
          <event-type :eventType="event.tipoEvento" />
          <h1>{{ this.event.name }}</h1>

          <ul class="games">
            <li v-for="(game, index) in games" :key="index">{{ game }}</li>
          </ul>
          <h4>{{ this.event.address }}</h4>
          <h6>
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            {{ this.event.state | state }}
          </h6>
          <a
            class="inscricao"
            v-if="this.event.inscricao"
            :href="this.event.inscricao"
          >
            <VButton class="light lg">Inscreva-se</VButton>
          </a>
        </div>
      </section>
      <div class="container single-event">
        <div class="info">
          <div v-if="this.event.links !== ''">
            <h2>Links Importantes:</h2>
            <ul class="links">
              <li v-for="link in links" :key="link.index">
                <a :href="link">
                  <VButton class="accent"
                    >{{ link.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "") }}
                  </VButton>
                </a>
              </li>
            </ul>
          </div>

          <div v-if="this.event.stream !== ''">
            <h2>Streams:</h2>
            <ul class="streams">
              <li v-for="stream in streams" :key="stream.index">
                <a :href="stream">
                  <VButton class="twitch"
                    ><font-awesome-icon :icon="['fas', 'play']" />
                    {{ stream.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "") }}
                  </VButton>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <vue-markdown class="markdown">{{
          this.event.desc.replace(/"/g, "")
        }}</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import VLoader from "@/components/VLoader.vue";
import VError from "@/components/VError.vue";
import VButton from "@/components/VButton.vue";
import EventType from "@/components/EventType.vue";

export default {
  name: "event",
  components: { VueMarkdown, VLoader, VError, VButton, EventType },
  data: function() {
    return {
      id: this.$route.params.id,
      event: {},
      loading: false,
      error: false,
      errorMsg: "",
      links: "",
      streams: "",
      games: ""
    };
  },
  methods: {
    handleErrors: function(response) {
      if (!response.ok) {
        this.errorMsg = response.statusText;
        throw Error("Erro ao pegar informações do servidor: ");
      }
      return response;
    },
    fetchEvent: function() {
      this.loading = true;
      fetch("http://fighthub-api.herokuapp.com/events?id=" + this.id)
        .then(response => this.handleErrors(response))
        .then(response => response.json())
        .then(response => {
          this.event = response[0];
          this.loading = false;
          this.error = false;

          this.streams = this.event.stream.split(",").map(item => item.trim());
          this.links = this.event.links.split(",").map(item => item.trim());
          this.games = this.event.games.split(",").map(item => item.trim());
        })
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    }
  },
  mounted() {
    this.fetchEvent();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

.hero {
  background-color: $accent;
  color: color-contrast($accent, $dark, $light);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: $spacer * 2;
  padding-bottom: $spacer * 2;

  min-height: 25vh;
  margin-bottom: $spacer * 2;
}

.hero.has-img {
  color: $light;
  background-color: $light;
  color: $light;
}

.hero .container {
  z-index: 2;
  position: relative;
  text-align: center;

  * {
    font-weight: 100;
  }

  h1 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1rem;
  }

  h6 {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.6rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    h6 {
      font-size: 1rem;
    }
  }
}

.hero.has-img:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}

.games {
  list-style: none;
  display: flex;
  justify-content: center;
  align-content: center;
}

.games li {
  $gamebg: color-contrast($accent, $dark, $light);
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background-color: $gamebg;
  color: color-contrast($gamebg, $dark, $light);
  font-weight: 600 !important;
}

.info {
  margin-bottom: $spacer * 4;

  h2 {
    margin-bottom: $spacer/2;
    margin-top: $spacer * 2;
  }
}
.streams,
.links {
  list-style: none;
  li {
    margin-bottom: $spacer/2;
  }

  button {
    max-width: calc(100% - #{$spacer});
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.hero .inscricao {
  display: block;
  margin-top: $spacer;
}

.hero .event-type {
  margin-bottom: $spacer/2;
}
</style>

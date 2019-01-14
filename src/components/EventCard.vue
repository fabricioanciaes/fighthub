<script>
import isWithinInterval from "date-fns/isWithinInterval";
import formatRelative from "date-fns/formatRelative";
import { ptBR } from "date-fns/locale";

import VButton from "@/components/VButton.vue";

export default {
  name: "EventCard",
  props: ["event"],
  data: function() {
    return {
      streams: this.event.stream.split(",").map(item => item.trim()),
      links: this.event.links.split(",").map(item => item.trim()),
      games: this.event.games.split(",").map(item => item.trim()),
      live: "",
      dateString: "",
      streamUrl: ""
    };
  },
  components: {
    VButton
  },
  methods: {
    isLive: function() {
      let isLive = isWithinInterval(new Date(Date.now()), {
        start: new Date(this.event.dateStart),
        end: new Date(this.event.dateEnd)
      });

      isLive ? (this.live = true) : (this.live = false);
    },

    dateFormat: function() {
      if (this.live) {
        return (this.dateString =
          "Termina " +
          formatRelative(new Date(this.event.dateEnd), new Date(Date.now()), {
            locale: ptBR
          }));
      }
      return (this.dateString = formatRelative(
        new Date(this.event.dateStart),
        new Date(Date.now()),
        { locale: ptBR }
      ));
    },

    handleStreams: function() {
      function parseUrl(url) {
        var a = document.createElement("a");
        a.href = url;
        return a;
      }

      let multistream = this.streams.reduce((result, url) => {
        if (url.includes("twitch.tv")) {
          result.push(parseUrl(url).pathname);
        }
        return result;
      }, []);

      if (this.streams.length == 1) {
        this.streamUrl = this.streams[0];
      }

      if (multistream.length > 1) {
        this.streamUrl = "http://multitwitch.tv" + multistream.join("");
      }
    }
  },
  mounted: function() {
    this.isLive();
    this.dateFormat();
    this.handleStreams();
  }
};
</script>

<template>
  <div class="event">
    <div class="title">
      <h2>{{ event.name }}</h2>
      <p>
        <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
        {{ event.state | state }}
      </p>
      <p class="address">{{ event.address }}</p>
    </div>
    <div class="games">
      <span v-for="(game, index) in games" :key="index">{{ game }}</span>
    </div>
    <div class="date">
      <span v-if="this.live" class="live">Em progresso</span>
      <span>
        <font-awesome-icon :icon="['far', 'calendar']" />
        {{ this.dateString }}
      </span>
    </div>
    <div class="controls">
      <router-link :to="'/event/' + event._id">
        <VButton class="accent lg"
          ><font-awesome-icon :icon="['fas', 'plus']" /> Ver Mais</VButton
        >
      </router-link>
      <a v-if="this.streamUrl !== ''" :href="this.streamUrl">
        <VButton class="twitch lg"
          ><font-awesome-icon :icon="['fas', 'play']" />
          {{ this.streams.length > 1 ? "Multitwitch" : "Stream" }}</VButton
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

$event-bg: $cardbg;

.event {
  display: flex;
  flex-direction: column;
  background-color: $event-bg;
  color: color-contrast($event-bg, opacify($dark, 1), opacify($light, 1));
  border-radius: 0.5rem;
  overflow: hidden;
  @include shadow(21);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  justify-content: flex-start;
  align-items: stretch;
}

.event .games,
.event .title,
.event .date {
  margin: $spacer/1.5 $spacer;
}

.event .controls {
  padding: $spacer/1.5 $spacer;
}

.event div {
  z-index: 2;
}

.event.has-img:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $event-bg;
  opacity: 0.75;
}

.event .title {
  border-bottom: 1px solid
    transparentize(color-contrast($event-bg, $dark, $light), 0.6);
  padding-bottom: $spacer/2;
}

.event .title h2 {
  margin-bottom: $spacer/2;
}

.event .games {
  $games: color-contrast($cardbg, $dark, $light);
  flex-grow: 1;
  display: flex;
  align-items: flex-start;

  span {
    padding: $spacer/8 $spacer/2;
    background-color: $games;
    color: color-contrast($games, opacify($dark, 1), opacify($light, 1));
    border-radius: 0.5rem;
    margin-right: $spacer/2;
  }
}

.event .date {
  span {
    display: block;
  }
}

.event .controls {
  justify-self: flex-end;
  align-self: stretch;
  display: grid;
  grid-gap: $spacer/2;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding-bottom: $spacer;

  button {
    display: block;
    width: 100%;
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
  }
}

.event .live {
  background-color: $success;
  color: color-contrast($success, $dark, $light);
  padding: $spacer/8 $spacer/2;
  margin-bottom: $spacer/2;
  display: inline-block !important;
  border-radius: 0.25rem;
}

.event .address {
  font-size: 0.8rem;
}
</style>

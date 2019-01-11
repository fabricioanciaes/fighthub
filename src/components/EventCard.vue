<script>
const dateFns = require("date-fns");
import { ptBR } from "date-fns/locale";

console.log(dateFns);

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
      dateString: ""
    };
  },
  components: {
    VButton
  },
  methods: {
    isLive: function() {
      let isLive = dateFns.isWithinInterval(new Date(Date.now()), {
        start: new Date(this.event.dateStart),
        end: new Date(this.event.dateEnd)
      });

      isLive ? (this.live = true) : (this.live = false);
    },
    dateFormat: function() {
      if (this.live) {
        return (this.dateString =
          "Termina " +
          dateFns.formatRelative(
            new Date(this.event.dateEnd),
            new Date(Date.now()),
            { locale: ptBR }
          ));
      }
      return (this.dateString =
        "Começa " +
        dateFns.formatRelative(
          new Date(this.event.dateStart),
          new Date(Date.now()),
          { locale: ptBR }
        ));
    }
  },
  mounted: function() {
    this.isLive();
    this.dateFormat();
  }
};
</script>

<template>
  <div
    v-bind:class="['event', event.imgUrl !== '' ? 'has-img' : '']"
    v-bind:style="{ backgroundImage: 'url(' + event.imgUrl + ')' }"
  >
    <div class="title">
      <h2>{{ event.name }}</h2>
      <p>{{ event.address }}</p>
    </div>
    <div class="games">
      <span v-for="(game, index) in games" :key="index">{{ game }}</span>
    </div>
    <div class="date">
      <span>
        <font-awesome-icon :icon="['far', 'calendar']" />
        {{ this.dateString }}
      </span>
      <span v-if="this.live" class="live">Em progresso</span>
    </div>
    <div class="controls">
      <router-link :to="'/sobre?id=' + event.id">
        <VButton class="outline light lg">Ver Mais</VButton>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";

$event-bg: $bg1;

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
  justify-content: space-between;
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
  $games: $light;

  display: flex;

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
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.event .live {
  background-color: $success;
  color: color-contrast($success, $dark, $light);
  padding: $spacer/8 $spacer/2;
  margin-top: $spacer/2;
  display: inline-block !important;
  border-radius: 0.25rem;
}
</style>

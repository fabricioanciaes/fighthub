import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
import { faCrown } from "@fortawesome/free-solid-svg-icons/faCrown";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";

library.add(
  faCalendar,
  faMapMarkerAlt,
  faPlay,
  faPlus,
  faWifi,
  faCrown,
  faMapMarkedAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon); // registered globally

import "vuetify/styles";

import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

export default createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: true,
        colors: {
          primary: colors.blue.base,
          secondary: colors.lightBlue.base,
          error: "#eb5757",
          success: "#549920",
          background: "#212121",
        },
      },
    },
  },
  display: {
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 0,
      sm: 320,
      md: 676,
      lg: 1264,
      xl: 1280,
    },
  },
});

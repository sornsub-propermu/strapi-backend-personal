import Logo from "./extensions/Mark-1.png";
import LogoFav from "./extensions/favicon.ico";

export default {
  config: {
    locales: ["th"],
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Logo,
    },
    menu: {
      logo: Logo,
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap() {
    // console.log(app);
  },
};

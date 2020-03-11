import showModal from "discourse/lib/show-modal";
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "register-command-palette",

  initialize(container) {
    if (!container.lookup("site-settings:main").command_palette_enabled) {
      return;
    }
    withPluginApi("0.8.39", api => api.addKeyboardShortcut("ctrl + p", (event) => {
      event.preventDefault();
      showModal("command-palette", { title: "command_palette.title" });
    }));
  },

  unregister(registration) {}
};

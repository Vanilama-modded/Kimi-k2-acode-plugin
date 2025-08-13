import { get, set } from "./src/lib/storage.js";

const PLUGIN_ID = "com.vanilama.kimik2";
const CHAT_HTML = acode.require("file").join(acode.require("PLUGIN_DIR"), PLUGIN_ID, "src/ui/chat.html");

window.acode?.ready?.(() => {
  // Add sidebar icon
  const icon = acode.require("sidebar").add("Kimi", "src/assets/icon.png");
  icon.on("click", () => {
    acode.require("window").open(CHAT_HTML, {
      title: "Kimi k2",
      width: 360,
      height: 480,
      resizable: true
    });
  });

  // Add settings page
  acode.require("settings").add("Kimi k2", [
    {
      key: "kimi_apiKey",
      name: "API Key",
      type: "text",
      value: get("apiKey") ?? "",
      onchange: (v) => set("apiKey", v)
    }
  ]);
});

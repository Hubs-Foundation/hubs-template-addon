import { ADDON_ID } from "./consts";
import { App, PermissionE, SystemOrderE, registerAddon } from "hubs";
import { TemplatePrefab } from "./prefab";
import { chatCommand } from "./chat-command";
import { networkedTemplateSystem, templateSystem } from "./systems";
import { templateInflator } from "./inflator";
import { NetworkedTemplateSchema } from "./template-network-schema";
import { TemplateComponent } from "./components";

function onReady(app: App, config?: JSON) {
  console.log("Template add-on ready", JSON.stringify(config));
}

registerAddon(ADDON_ID, {
  name: "Hubs Template Add-on",
  description:
    "Template addon to help get started with hubs add-ons development",
  onReady,
  prefab: {
    id: "template-addon-prefab",
    config: {
      permission: PermissionE.SPAWN_AND_MOVE_MEDIA,
      template: TemplatePrefab,
    },
  },
  chatCommand: { id: "template-addon", command: chatCommand },
  system: [
    { system: templateSystem, order: SystemOrderE.PostPhysics },
    { system: networkedTemplateSystem, order: SystemOrderE.PostPhysics },
  ],
  inflator: { jsx: { id: "template", inflator: templateInflator } },
  networkSchema: {
    component: TemplateComponent,
    schema: NetworkedTemplateSchema,
  },
});

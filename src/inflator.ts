import { addComponent } from "bitecs";
import { EntityID, ComponentDataT, HubsWorld } from "hubs";
import { TemplateComponent } from "./components";

export type TemplateParams = {
  color?: number;
};

export function templateInflator(
  world: HubsWorld,
  eid: EntityID,
  componentProps?: ComponentDataT
) {
  addComponent(world, TemplateComponent, eid);
  if (componentProps?.color) {
    TemplateComponent.color[eid] = componentProps.color;
  } else {
    TemplateComponent.color[eid] = Math.random() * 0xffffff;
  }

  return eid;
}

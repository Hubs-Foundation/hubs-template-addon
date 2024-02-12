import { defineQuery, enterQuery, exitQuery, hasComponent } from "bitecs";
import { App, EntityID, Owned } from "hubs";
import { NetworkedTemplateComponent, TemplateComponent } from "./components";

const templateQuery = defineQuery([TemplateComponent]);
const templateEnterQuery = enterQuery(templateQuery);
const templateExitQuery = exitQuery(templateQuery);
export function templateSystem(app: App) {
  templateExitQuery(app.world).forEach((eid: EntityID) => {
    console.log(`Template entity deleted: ${eid}`);
  });
  templateEnterQuery(app.world).forEach((eid: EntityID) => {
    console.log(`Template entity created: ${eid}`);
  });
  templateQuery(app.world).forEach((eid: EntityID) => {
    console.log(`Template entity executing: ${eid}`);
  });
}

const networkedTemplateQuery = defineQuery([
  TemplateComponent,
  NetworkedTemplateComponent,
]);
export function networkedTemplateSystem(app: App) {
  networkedTemplateQuery(app.world).forEach((eid: EntityID) => {
    // If I own the entity I'm responsible for updating the networked component
    if (hasComponent(app.world, Owned, eid)) {
      NetworkedTemplateComponent.color[eid] = TemplateComponent.color[eid];
    } else {
      if (
        TemplateComponent.color[eid] !== NetworkedTemplateComponent.color[eid]
      ) {
        TemplateComponent.color[eid] = NetworkedTemplateComponent.color[eid];
        console.log(
          `Network update received for the template component in entity ${eid}`
        );
      }
    }
  });
}

import { App, anyEntityWith, AvatarPOVNode, createNetworkedEntity } from "hubs";
import { Vector3 } from "three";

export function chatCommand(app: App) {
  const avatarEid = anyEntityWith(app.world, AvatarPOVNode)!;
  const avatarPov = app.world.eid2obj.get(avatarEid)!;
  const eid = createNetworkedEntity(app.world, "template-addon-prefab", {});
  const obj = app.world.eid2obj.get(eid)!;
  obj.position.copy(avatarPov.localToWorld(new Vector3(0, 0, -1.5)));
  obj.lookAt(avatarPov.getWorldPosition(new Vector3()));
}

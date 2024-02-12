/** @jsx createElementEntity */
import { BoxBufferGeometry, Mesh,  MeshStandardMaterial } from "three";
import { COLLISION_LAYERS, Fit, createElementEntity, Shape } from "hubs";

export function TemplatePrefab() {
  return (
    <entity
      name="Template Add-on"
      networked
      networkedTransform
      cursorRaycastable
      remoteHoverTarget
      handCollisionTarget
      offersRemoteConstraint
      offersHandConstraint
      floatyObject
      destroyAtExtremeDistance
      holdable
      rigidbody={{
        gravity: -9.8,
        collisionGroup: COLLISION_LAYERS.INTERACTABLES,
        collisionMask:
          COLLISION_LAYERS.HANDS |
          COLLISION_LAYERS.ENVIRONMENT |
          COLLISION_LAYERS.INTERACTABLES |
          COLLISION_LAYERS.AVATAR
      }}
      physicsShape={{ fit: Fit.MANUAL, type: Shape.BOX, halfExtents: [0.5, 0.5, 0.5] }}
      object3D={new Mesh(new BoxBufferGeometry(), new MeshStandardMaterial())}
      deletable
      hoverableVisuals
    >
      <entity template /* {{ color: 0xFFFFFF }} */ position={[0, 1, 0]} />
    </entity>
  );
}

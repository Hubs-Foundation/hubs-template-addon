import {
  EntityID,
  MigrationFn,
  NetworkSchema,
  StoredComponent,
  defineNetworkSchema,
  deserializerWithMigrations,
  read,
  write,
} from "hubs";
import { NetworkedTemplateComponent } from "./components";

const migrations = new Map<EntityID, MigrationFn>();

function apply(eid: EntityID, { version, data }: StoredComponent) {
  if (version !== 1) return false;

  const { color }: { color: number } = data;
  write(NetworkedTemplateComponent.color, eid, color);
  return true;
}

const runtimeSerde = defineNetworkSchema(NetworkedTemplateComponent);
export const NetworkedTemplateSchema: NetworkSchema = {
  componentName: "networked-template",
  serialize: runtimeSerde.serialize,
  deserialize: runtimeSerde.deserialize,
  serializeForStorage: function serializeForStorage(eid: EntityID) {
    return {
      version: 1,
      data: {
        color: read(NetworkedTemplateComponent.color, eid),
      },
    };
  },
  deserializeFromStorage: deserializerWithMigrations(migrations, apply),
};

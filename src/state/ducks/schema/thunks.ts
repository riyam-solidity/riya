import { schemaService, SchemaQuery } from "@services/schema";
import { AppDispatch } from "@state/store";

const getSchemasThunk =
  ({ inspectionType, inspectionSubType, status }: SchemaQuery) =>
  async (dispatch: AppDispatch) => {
    const schemas = await schemaService
      .getSchemas({ inspectionType, inspectionSubType, status })
      .catch((err) => console.log({ getCheckpointsThunk: err }));
    if (!schemas) return;
    return schemas;
  };

export default { getSchemasThunk };

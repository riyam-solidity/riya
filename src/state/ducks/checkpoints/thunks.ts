import {checkpointService, checkpointsQuery} from "@services/checkpoints";
import { AppDispatch } from "@state/store";

const getCheckpointsThunk =
  (keys: checkpointsQuery) =>
  async (dispatch: AppDispatch) => {
    const checkpointsData = await checkpointService
      .getCheckpoints(keys)
      .catch((err) => console.log({ getCheckpointsThunk: err }));
    if (!checkpointsData) return;
    return checkpointsData;
  };

export default { getCheckpointsThunk };

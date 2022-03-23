import {
  WORKSHOP_QA,
  WORKSHOP_QA_L1,
  WORKSHOP_QA_L2,
  WORKSHOP_QA_L3,
  NO_GO,
  ADDITIONAL_ESTIMATE,
} from "@constants/route-constant";
import { getUserConfig } from "@utils/localstorage";
import {
  WORKSHOP_QA_LISTING,
  WORKSHOP_QA_L1_LISTING,
  WORKSHOP_QA_L2_LISTING,
  WORKSHOP_QA_L3_LISTING,
  NOGO_LISTING,
  ADDITIONAL_ESTIMATE_LISTING,
} from "@constants/config-constant";

const configData = getUserConfig();
const { permissions } = configData;

export const fetchUserPermissionsFromConfig = (path: string) => {
  let userPermission = {};
  if (!permissions) return;
  switch (path) {
    case WORKSHOP_QA:
      userPermission = permissions[WORKSHOP_QA_LISTING];
      break;
    case WORKSHOP_QA_L1:
      userPermission = permissions[WORKSHOP_QA_L1_LISTING];
      break;
    case WORKSHOP_QA_L2:
      userPermission = permissions[WORKSHOP_QA_L2_LISTING];
      break;
    case WORKSHOP_QA_L3:
      userPermission = permissions[WORKSHOP_QA_L3_LISTING];
      break;
    case NO_GO:
      userPermission = permissions[NOGO_LISTING];
      break;
    case ADDITIONAL_ESTIMATE:
      userPermission = permissions[ADDITIONAL_ESTIMATE_LISTING];
      break;
    case ADDITIONAL_ESTIMATE:
      userPermission = permissions["additional-estimate-listing"];
      break;
    default:
      return;
  }
  return userPermission;
};

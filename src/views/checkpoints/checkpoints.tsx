import { FC, useEffect, useState } from "react";
import styles from "./styles/checkpoints.module.css";
import { CheckPoint } from "./checkpoint";
import { CheckpointType } from "types/dashboard";

const { checkPointsWrapper } = styles;

interface CheckpointsProps {
  getCheckpoints: Function;
}

// const getCheckpointsCard = ({
//   checkpointFormDetails,
//   setCheckpointFormDetails,
// }: {
//   checkpointFormDetails: any;
//   setCheckpointFormDetails: Function;
// }) => {
//   return (
//     <>
//       {checkpointFormDetails.map(
//         (checkpointFormDetail: CheckpointType, index: number) => {
//           return (
//             <div className={checkPointsWrapper}>
//               <ul>
//                 <CheckPoint
//                   checkpointFormDetails={checkpointFormDetails}
//                   formData={checkpointFormDetail}
//                   setCheckpointFormDetails={setCheckpointFormDetails}
//                   serialNumber={index}
//                 />
//               </ul>
//             </div>
//           );
//         }
//       )}
//     </>
//   );
// };

export const CheckPoints: FC<CheckpointsProps> = ({ getCheckpoints }) => {
  const [checkpointFormDetails, setCheckpointFormDetails] = useState<any>([]);

  useEffect(() => {
    getCheckpoints({}).then((response: Array<CheckpointType>) =>
      setCheckpointFormDetails(response)
    );
  }, []);

  return (
    <>
      {checkpointFormDetails &&
        checkpointFormDetails.length &&
        checkpointFormDetails.map(
          (checkpointFormDetail: CheckpointType, index: number) => {
            return (
              <div className={checkPointsWrapper}>
                <ul>
                  <CheckPoint
                    checkpointFormDetails={checkpointFormDetails}
                    formData={checkpointFormDetail}
                    setCheckpointFormDetails={setCheckpointFormDetails}
                    serialNumber={index}
                  />
                </ul>
              </div>
            );
          }
        )}
    </>
  );
};

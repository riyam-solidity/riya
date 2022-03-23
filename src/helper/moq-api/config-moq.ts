export const configMoq = () => {
  let response = {
    device: "PANEL",
    locationTypes: ["SERVICE_CENTER"],
    uiRules: {
      "workshop-qa-listing": {
        title: "Workshop QA",
        rootNode: true,
        search: [
          {
            key: "appointmentId",
            label: "Appointment ID",
          },
          {
            key: "registrationNumber",
            label: "Registration Number",
          },
        ],
        filter: {
          inspectionStatus: [
            {
              key: "inspectionStatus",
              label: "Inspection",
              value: "ESTIMATED,QC_DONE",
            },
            {
              key: "inspectionStatus",
              label: "Diagnostic Estimates",
              value: "DIAGNOSTIC_ESTIMATED",
            },
          ],
          assignedTo: [
            {
              key: "assignTo",
              label: "Me",
              value: "me",
            },
            {
              key: "assignTo",
              label: "Unassigned",
              value: "unassigned",
            },
            {
              key: "assignTo",
              label: "Other",
              value: "others",
            },
          ],
        },
      },
      "workshop-qa-l1-listing": {
        title: "Cost Approval 1",
        rootNode: true,
        search: [
          {
            key: "appointmentId",
            label: "Appointment ID",
          },
          {
            key: "registrationNumber",
            label: "Registration Number",
          },
        ],
        filter: {
          inspectionStatus: [
            {
              key: "inspectionStatus",
              label: "Inspection",
              value: "ESTIMATED,QC_DONE",
            },
            {
              key: "inspectionStatus",
              label: "Diagnostic Estimates",
              value: "DIAGNOSTIC_ESTIMATED",
            },
          ],
          assignedTo: [
            {
              key: "assignTo",
              label: "Me",
              value: "me",
            },
            {
              key: "assignTo",
              label: "Unassigned",
              value: "unassigned",
            },
            {
              key: "assignTo",
              label: "Other",
              value: "others",
            },
          ],
        },
      },
      "workshop-qa-l2-listing": {
        title: "Cost Approval 2",
        rootNode: true,
        search: [
          {
            key: "appointmentId",
            label: "Appointment ID",
          },
          {
            key: "registrationNumber",
            label: "Registration Number",
          },
        ],
        filter: {
          inspectionStatus: [
            {
              key: "inspectionStatus",
              label: "Inspection",
              value: "ESTIMATED,QC_DONE",
            },
            {
              key: "inspectionStatus",
              label: "Diagnostic Estimates",
              value: "DIAGNOSTIC_ESTIMATED",
            },
          ],
          assignedTo: [
            {
              key: "assignTo",
              label: "Me",
              value: "me",
            },
            {
              key: "assignTo",
              label: "Unassigned",
              value: "unassigned",
            },
            {
              key: "assignTo",
              label: "Other",
              value: "others",
            },
          ],
        },
      },
      "workshop-qa-l3-listing": {
        title: "Cost Approval 3",
        rootNode: true,
        search: [
          {
            key: "appointmentId",
            label: "Appointment ID",
          },
          {
            key: "registrationNumber",
            label: "Registration Number",
          },
        ],
        filter: {
          inspectionStatus: [
            {
              key: "inspectionStatus",
              label: "Inspection",
              value: "ESTIMATED,QC_DONE",
            },
            {
              key: "inspectionStatus",
              label: "Diagnostic Estimates",
              value: "DIAGNOSTIC_ESTIMATED",
            },
          ],
          assignedTo: [
            {
              key: "assignTo",
              label: "Me",
              value: "me",
            },
            {
              key: "assignTo",
              label: "Unassigned",
              value: "unassigned",
            },
            {
              key: "assignTo",
              label: "Other",
              value: "others",
            },
          ],
        },
      },
      "workshop-qa-detail": {
        rootNode: false,
        actions: [
          {
            key: "approve",
            label: "Approve",
            criteria: [
              {
                key: "data.checkpoints.#.ok",
                type: "absolute",
                value: ["false"],
              },
              {
                key: "data.qualityChecks.#.status",
                type: "absolute",
                value: ["PENDING", "REJECTED"],
              },
            ],
          },
          {
            key: "reject",
            label: "REJECT",
            criteria: [
              {
                key: "data.qualityChecks.#.status",
                type: "absolute",
                value: ["PENDING", "APPROVED"],
              },
            ],
          },
          {
            key: "edit",
            label: "EDIT",
          },
          {
            key: "noGo",
            label: "NO GO",
            criteria: [
              {
                key: "data.checkpoints.#.ok",
                type: "absolute",
                value: ["false"],
              },
            ],
          },
          {
            key: "nwtbd",
            label: "No Work To Be Done",
            criteria: [
              {
                key: "data.qualityChecks.#.reason",
                type: "absolute",
                value: ["OK"],
              },
              {
                key: "data.estimates.#",
                type: "non_null",
              },
            ],
          },
        ],
      },
      "checkpoint-master": {
        rootNode: false,
        actions: [
          {
            key: "activate",
            label: "Activate",
            criteria: [
              {
                key: "active",
                type: "absolute",
                value: ["false"],
              },
            ],
          },
          {
            key: "deactivate",
            label: "Deactivate",
            criteria: [
              {
                key: "active",
                type: "absolute",
                value: ["true"],
              },
            ],
          },
        ],
      },
      "schema-master": {
        rootNode: false,
        actions: [
          {
            key: "saveAll",
            label: "Save All",
          },
        ],
      },
    },
    permissions: {
      "workshop-qa-listing": {
        read: true,
        action: true,
      },
      "checkpoint-master": {
        read: true,
        action: true,
      },
      "schema-master": {
        read: true,
        action: true,
      },
      "workshop-qa-l1-listing": {
        read: true,
        action: false,
      },
      "workshop-qa-l3-listing": {
        read: true,
        action: false,
      },
      "workshop-qa-detail": {
        read: true,
        action: true,
      },
      "workshop-qa-l2-listing": {
        read: true,
        action: false,
      },
      "yard-listing": {
        read: true,
        action: true,
      },
    },
  };
  return response;
};

export const getDetailMoq = () => {
  const response = {
    make: "make",
    model: "model",
    variant: "variant",
    fuelType: "fuelType",
    inspectedBy: "test@gmail.com",
    locName: "Location name",
    assigned: "",
    assignedTo: "test1@gmail.com",
    appointmentId: "1234567890",
    inspectedAt: "Same as current",
    poolType: "POTENTIAL_NO_GO",
    reviewedBy: "reviewedByuid",
    summary: {
      acceptableImperfections: "1",
      unAcceptableImperfections: "2",
      totalCost: 1000,
      noGo: 3,
      tat: 2,
      current: {
        pending: 267191,
        approved: 2000,
      },
      boughtPrice: 1167120,
    },
    qaComments: {
      comments: "Test comments"
    },
    schema: "IN_CAR_4024_v1",
    gallery: [
      {
        title: "",
        url: "",
      },
    ],
    checkpoints: [
      {
        title: "AC + AC Unit",
        key: "AC + AC Unit",
        choices: [
          {
            choice: "Cooling Coil leakage/blockage",
            info: null,
            acceptable: false,
            other: false,
          },
          {
            choice: "Ac cooling not effective ",
            info: null,
            acceptable: false,
            other: true,
          },
        ],
        noImperfectionChoices: [],
        refurbishmentChoices: [
          {
            refurbishment: "Repair",
            other: false,
          },
          {
            refurbishment: "Replace",
            other: false,
          },
        ],
        images: [
          {
            label:
              "rn_image_picker_lib_temp_fb3a9db8-3057-4aca-838d-8d23f3a3db1a.jpg",
            path: "https://c24-inspections.s3.ap-south-1.amazonaws.com/prod/inspection/IN_CAR_1002172648/CATALOG/AC%20%2B%20AC%20Unit47rn_image_picker_lib_temp_fb3a9db8-3057-4aca-838d-8d23f3a3db1a.jpg.jpg",
          },
          {
            label:
              "rn_image_picker_lib_temp_1fdda30b-465e-440e-be48-e946c062d0f1.jpg",
            path: "https://c24-inspections.s3.ap-south-1.amazonaws.com/prod/inspection/IN_CAR_1002172648/CATALOG/AC%20%2B%20AC%20Unit47rn_image_picker_lib_temp_1fdda30b-465e-440e-be48-e946c062d0f1.jpg.jpg",
          },
        ],
        videos: [
          {
            label: "030fb45f-d2d1-42c2-980a-5a0c97c2f3b8.mp4",
            path: "https://c24-inspections.s3.ap-south-1.amazonaws.com/prod/inspection/IN_CAR_1002172648/CATALOG/AC%20%2B%20AC%20Unit47030fb45f-d2d1-42c2-980a-5a0c97c2f3b8.mp4.mp4",
          },
        ],
        ok: false,
        prepopulated: false,
        additional: false,
        skipped: false,
        revision: 7,
        updatedBy: {
          uid: "suranjan.bag@cars24.com",
          authType: "USER",
        },
        updatedAt: "2021-12-27T13:26:16.009937Z",
      },
    ],
    estimates: {
      "AC + AC Unit": {
        labourCost: 0,
        parts: [
          {
            category: null,
            mappingId: null,
            name: "COOLING COIL",
            cost: 8000,
            labourCost: 5000,
            available: true,
            tat: 0,
          },
          {
            category: null,
            mappingId: null,
            name: "AC GAS",
            cost: 1000,
            labourCost: 0,
            available: true,
            tat: 0,
          },
        ],
        revision: 4,
        invalidated: false,
        updatedBy: {
          uid: "exclusivecarcareggn@gmail.com",
          authType: "USER",
        },
        updatedAt: "2021-12-28T12:10:51.440734Z",
        tat: 0,
      },
    },
    qualitychecks: {
      "AC + AC Unit": {
        comment: "PI submit again with new tools",
        status: "PENDING",
        reason: "OK",
        tag: "NONE",
        revision: 7,
        invalidated: false,
        updateAllowed: false,
      },
    },
    diagnosticQualityChecks: {
      "AC + AC Unit": {
        comment: "PI submit again with new tools",
        status: "PENDING",
        reason: "OK",
        tag: "NONE",
        revision: 7,
        invalidated: false,
        updateAllowed: false,
      },
    },
  };
  return response;
};

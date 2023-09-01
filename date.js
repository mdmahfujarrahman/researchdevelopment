const originalArray = {
    _id: "63f8898449a25072d2cf1519",
    groupName: "Test",
    groupMembers: [
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "147258369852",
            _id: "63f8898449a25072d2cf151a",
        },
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "147258369852",
            _id: "63f889f65d6996a9216f7077",
        },
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "147258369852",
            _id: "63f88a82bae59eb875685179",
        },
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "147258369852",
            _id: "63f88a9db8d6b4d4938e42b7",
        },
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "147258369852",
            _id: "63f88ad7ea545c377ab92953",
        },
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "147258369852",
            _id: "63f88b17582a963782e67511",
        },
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "147258369852",
            _id: "63f88c62a410e42542b048e9",
        },
        {
            userId: "6346dfc8f3c06fc0b478b797",
            phoneNumber: "14725836985",
            _id: "63f88c69a410e42542b048fa",
        },
        {
            userId: "63f8898449a25072d2cf1519",
            phoneNumber: "14725836985",
            _id: "63f88eb20df43a7110b7d1ee",
        },
        {
            userId: "63f8898449a25072d2cf1519",
            phoneNumber: "14725836985",
            _id: "63f88eb50df43a7110b7d203",
        },
        {
            userId: "63f8898449a25072d2cf1519",
            phoneNumber: "14725836985",
            _id: "63f88eb80df43a7110b7d21a",
        },
        {
            userId: "63f8898449a25072d2cf1519",
            phoneNumber: "14725836985",
            _id: "63f88eec4011d6726388a8c5",
        },
        {
            userId: "63f8898449a25072d2cf1519",
            phoneNumber: "1472583698",
            _id: "63f88ef14011d6726388a8e0",
        },
        {
            userId: "63f8898449a25072d2cf1816",
            phoneNumber: "1472583698",
            _id: "63f8906d673a9a7139860f3c",
        },
        {
            userId: "63f8898449a25072d2cf1816",
            phoneNumber: "1472583698",
            _id: "63f89071673a9a7139860f5b",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f891919d9da3af68350f22",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f891949d9da3af68350f45",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f891989d9da3af68350f6a",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f891c431e3cac4fb696df5",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f891c731e3cac4fb696e1e",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f892970ecd1fcc83033166",
        },
        {
            userId: "63f8898449a25072d2cf1891",
            phoneNumber: "1472583698",
            _id: "63f8929d0ecd1fcc830331aa",
        },
        {
            userId: "63f8898449a25072d2cf1891",
            phoneNumber: "1472583698",
            _id: "63f892a00ecd1fcc830331d9",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f893191474d9668dff6971",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f8931e1474d9668dff69a4",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f893419dd849899fe229e8",
        },
        {
            userId: "63f8898449a25072d2cf1896",
            phoneNumber: "1472583698",
            _id: "63f893449dd849899fe22a1f",
        },
        {
            userId: "63f8898449a25072d2cf1741",
            phoneNumber: "1472583698",
            _id: "63f895d055a3f3dc24093015",
        },
        {
            userId: "63f8898449a25072d2cf1741",
            phoneNumber: "1472583698",
            _id: "63f895d355a3f3dc24093050",
        },
        {
            userId: "63f8898449a25072d2cf1741",
            phoneNumber: "1472583698",
            _id: "63f895d655a3f3dc2409308d",
        },
        {
            userId: "63f8898449a25072d2cf1741",
            phoneNumber: "1472583698",
            _id: "63f8962b6f1430c3b303a2f5",
        },
        {
            userId: "63f8898449a25072d2cf1742",
            phoneNumber: "1472583698",
            _id: "63f8970f4fe60a30e34aa1e6",
        },
    ],
    createdAt: "2023-02-24T09:55:16.304Z",
    updatedAt: "2023-02-24T10:53:03.000Z",
    __v: 0,
};

const otherArray = {
    groupId: "63f8898449a25072d2cf1519",
    groupMembers: [
        {
            userId: "63f8898449a25072d2cf1749",
            phoneNumber: "1472583698",
        },
    ],
};

// filter otherArray if userID is not in originalArray and return the result
const result = otherArray.groupMembers.filter((item) => {
    return !originalArray.groupMembers.some((item2) => {
        return item.userId === item2.userId;
    });
});
console.log(result);

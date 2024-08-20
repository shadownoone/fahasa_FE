export const countries = [
    {
        value: "vn",
        label: "Việt Nam",
        states: [
            {
                value: "hn",
                label: "Hà Nội",
                districts: [
                    { value: "hk", label: "Hoàn Kiếm" },
                    { value: "bd", label: "Ba Đình" },
                    // Thêm các huyện khác
                ],
            },
            {
                value: "hcm",
                label: "Hồ Chí Minh",
                districts: [
                    { value: "q1", label: "Quận 1" },
                    { value: "q3", label: "Quận 3" },
                    // Thêm các huyện khác
                ],
            },
            // Thêm các tỉnh/thành phố khác
        ],
    },
    // Thêm các quốc gia khác
];

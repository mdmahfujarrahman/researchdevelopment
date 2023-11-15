const insertionSort = (num) => {
    let k, j;
    for (let i = 1; i < num.length; i++) {
        k = num[i];
        j = i - 1;
        if (num[j]?.lenth > 0) {
            while (j >= 0 && num[j]?.length > k) {
                num[j + 1] = num[j];
                j = j - 1;
            }
        } else {
            while (j >= 0 && num[j] > k) {
                num[j + 1] = num[j];
                j = j - 1;
            }
        }

        num[j + 1] = k;
    }
};

const array = [13, 19, 15, "hello"];

insertionSort(array);
console.log(array);


// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.reduce((arr, currentRow, idx) => {
        currentRow.sort((a, b) => {
            return a - b;
        });

        if (idx % 2 == 1) {
            currentRow = currentRow.reverse();
        }

        arr.push(...currentRow);
        return arr;
    }, []);
}

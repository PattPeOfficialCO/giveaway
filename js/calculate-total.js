function calculateTotalGiftcardAmount(tableElement){
    let first = 0;

    let total = 0;
    // Skip the first row since its a header
    for (let row of tableElement.rows) {
        if (first === 0) {
            first = 1;
            continue;
        }

        // Grab items from the table
        if (row.cells.length === 4) {
            let rowValue = row.cells[3].innerHTML;
            total += Number(rowValue);
        }

    }

    // Assign value to summary row
    document.getElementById("total-giftcard-amount").innerHTML = total;

}

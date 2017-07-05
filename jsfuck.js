function HandlesStuff(inputRecord, savedrecord, income, expenseType, revenue, expense0, expense1, expense2, screenx, screeny, success) {

    var i;
    for (i = 0; i < 100; i++) {
        inputRecord[i] = 0;
    }

    updateCorpDatabase(savedrecord);
    income[0] = income[1] * 4.0 / quarter;

    if (expenseType == 0) {
        profit = revenue - expense[0];
    }
    else if (expenseType == 1) {
        profit = revenue - expense[1];
    }

    else if (expenseType == 2) {
        profit = revenue - expense[2];
    }
}
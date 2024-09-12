// Вложенный массив с кроссвордом
const crosswordData = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'с', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'ц', 'п', 'у', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'к', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'и', ' ', ' ', ' ', ' ', 'в', 'и', 'м', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'р', ' ', ' ', ' ', ' '],
    ['ф', 'у', 'н', 'к', 'ц', 'и', 'я', ' ', ' ', 'н', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'и', ' ', ' ', ' ', ' '],
    ['р', ' ', ' ', 'л', ' ', ' ', ' ', ' ', ' ', 'д', ' ', ' ', ' ', ' ', ' ', ' ', 'н', ' ', ' ', ' ', ' ', ' ', 'п', ' ', ' ', ' ', ' '],
    ['е', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'е', ' ', ' ', ' ', ' ', ' ', ' ', 'а', 'л', 'г', 'о', 'р', 'и', 'т', 'м', ' ', ' ', ' '],
    ['й', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'к', ' ', ' ', ' ', ' ', ' ', ' ', 'с', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['м', 'а', 'с', 'с', 'и', 'в', ' ', 'к', ' ', 'с', ' ', 'т', ' ', ' ', ' ', 'п', 'л', 'а', 'г', 'и', 'н', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'е', ' ', ' ', ' ', 'л', ' ', 'а', ' ', 'е', ' ', ' ', ' ', ' ', 'е', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'р', ' ', ' ', ' ', 'а', ' ', 'ц', ' ', 'с', ' ', ' ', ' ', ' ', 'д', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'в', ' ', 'б', ' ', 'с', ' ', 'и', ' ', 'т', ' ', ' ', 'п', 'р', 'о', 'т', 'о', 'к', 'о', 'л', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'р', 'е', 'к', 'у', 'р', 'с', 'и', 'я', ' ', 'и', ' ', ' ', ' ', ' ', 'в', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'р', ' ', 'л', ' ', ' ', ' ', ' ', ' ', 'р', ' ', ' ', ' ', ' ', 'а', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'е', ' ', 'о', ' ', ' ', 'к', 'о', 'н', 'т', 'е', 'й', 'н', 'е', 'р', 'и', 'з', 'а', 'ц', 'и', 'я', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'в', ' ', 'б', ' ', ' ', ' ', 'в', ' ', ' ', ' ', ' ', 'и', ' ', ' ', ' ', ' ', 'н', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'о', 'т', 'л', 'а', 'д', 'к', 'а', ' ', ' ', ' ', ' ', 'е', ' ', ' ', ' ', ' ', 'т', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'а', ' ', ' ', ' ', 'н', ' ', ' ', ' ', ' ', ' ', 'к', 'о', 'м', 'п', 'и', 'л', 'я', 'ц', 'и', 'я'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'к', ' ', ' ', 'г', 'и', 'т', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'в', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'о', ' ', ' ', ' ', 'е', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'и', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'г', 'р', 'а', 'ф', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'у', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'с', 'у', 'б', 'д', ' ', ' '],
];

// Нумерация слов. Определяем где начинается новое слово.
const wordNumbers = [
    { row: 1, col: 3, number: 1 },
    { row: 3, col: 0, number: 2 },
    { row: 7, col: 0, number: 3 },
    { row: 7, col: 3, number: 4 },
    { row: 11, col: 2, number: 5 },
    { row: 10, col: 5, number: 6 },
    { row: 7, col: 7, number: 7 },
    { row: 2, col: 8, number: 8 },
    { row: 2, col: 9, number: 9 },
    { row: 7, col: 11, number: 10 },
    { row: 13, col: 10, number: 11 },
    { row: 13, col: 7, number: 12 },
    { row: 15, col: 5, number: 13 },
    { row: 17, col: 10, number: 14 },
    { row: 7, col: 15, number: 15 },
    { row: 10, col: 14, number: 16 },
    { row: 4, col: 16, number: 17 },
    { row: 5, col: 16, number: 18 },
    { row: 0, col: 22, number: 19 },
    { row: 13, col: 21, number: 20 },
    { row: 16, col: 17, number: 21 },
    { row: 19, col: 20, number: 22 },
    { row: 21, col: 21, number: 23 },
];

// Функция для создания кроссворда
function createCrossword(crosswordData, wordNumbers) {
    const crossword = document.getElementById('crossword');
    
    // Проходим по каждому ряду массива
    crosswordData.forEach((rowData, rowIndex) => {
        const row = document.createElement('tr');

        // Проходим по каждой ячейке ряда
        rowData.forEach((cellData, colIndex) => {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;

            if (cellData === ' ') {
                // Если это пустая ячейка, делаем её неактивной
                input.classList.add('inactive');
                input.disabled = true;
            } else {
                // Если это активная ячейка
                input.dataset.correctAnswer = cellData.toUpperCase();
                
                // Проверяем, нужно ли добавить номер слова
                const wordNumber = wordNumbers.find(n => n.row === rowIndex && n.col === colIndex);
                if (wordNumber) {
                    const numberLabel = document.createElement('div');
                    numberLabel.classList.add('number');
                    numberLabel.textContent = wordNumber.number;
                    cell.appendChild(numberLabel);
                }
            }

            cell.appendChild(input);
            row.appendChild(cell);
        });

        crossword.appendChild(row);
    });
}

function checkAnswers() {
    const inputs = document.querySelectorAll('input[type="text"]:not(.inactive)');
    let allCorrect = true;

    inputs.forEach(input => {
        const userAnswer = input.value.toUpperCase();
        const correctAnswer = input.dataset.correctAnswer;

        if (userAnswer === correctAnswer) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            allCorrect = false;
        }
    });

    const result = document.getElementById('result');
    if (allCorrect) {
        result.textContent = 'Поздравляем! Все ответы правильные.';
        result.style.color = 'green';
    } else {
        result.textContent = 'Есть ошибки. Попробуйте ещё раз.';
        result.style.color = 'red';
    }
}

createCrossword(crosswordData, wordNumbers);

document.getElementById('check-answers').addEventListener('click', checkAnswers);

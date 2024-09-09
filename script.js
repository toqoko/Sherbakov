document.getElementById('checkAnswers').addEventListener('click', function() {
  let cells = document.querySelectorAll('#crossword input');
  let allCorrect = true;

  cells.forEach(cell => {
      let userAnswer = cell.value.toUpperCase();
      let correctAnswer = cell.getAttribute('data-answer').toUpperCase();

      if (userAnswer === correctAnswer) {
          cell.classList.remove('incorrect');
          cell.classList.add('correct');
      } else {
          cell.classList.remove('correct');
          cell.classList.add('incorrect');
          allCorrect = false;
      }
  });

  let resultText = allCorrect ? 'Поздравляем! Все ответы правильные.' : 'Некоторые ответы неверны, попробуйте снова.';
  document.getElementById('result').textContent = resultText;
});

let cells = document.querySelectorAll('#crossword input');

// Добавляем событие на ввод символа в ячейку
cells.forEach((cell, index) => {
    cell.addEventListener('input', function() {
        if (this.value.length === 1) {
            let direction = this.getAttribute('data-direction');
            if (direction === 'horizontal') {
                // Переход к следующей ячейке по горизонтали
                if (cells[index + 1] && cells[index + 1].getAttribute('data-direction') === 'horizontal') {
                    cells[index + 1].focus();
                }
            } else if (direction === 'vertical') {
                // Переход к следующей ячейке по вертикали
                let nextRowCell = cells[index + 5]; // Переход на клетку ниже (или другую в зависимости от структуры)
                if (nextRowCell && nextRowCell.getAttribute('data-direction') === 'vertical') {
                    nextRowCell.focus();
                }
            }
        }
    });
});

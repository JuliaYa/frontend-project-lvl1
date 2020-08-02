# Brain Games

![CI](https://github.com/JuliaYa/frontend-project-lvl1/workflows/CI/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/18389b4e26149e6cec8b/maintainability)](https://codeclimate.com/github/JuliaYa/frontend-project-lvl1/maintainability)

Проект состоит из нескольких консольных игр, написанных на node.js
Пользователю задается математический вопрос и его задача дать правильный ответ. Если ответ неверен, то игра завершается. Любой некорректный ввод считается ошибкой и равносилен неправильному ответу. Пользователь побеждает, если дает три правильных ответа подряд.

## Пример
```console
$ brain-even

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
```

# Installation

```console
$ make install
```
Запуск любой игры
```console
$ make brain-even
```

## Локальная установка пакета

Из деректории проекта 
```console
$ make publish
$ npm link 
```
После установки игры можно запускать по имени.

## Пример
```console
$ brain-prime
```

# Игра: "Проверка на чётность"
Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

[![asciicast](https://asciinema.org/a/Wqc6zwzlt8KizNZkZ8gQKWqok.svg)](https://asciinema.org/a/Wqc6zwzlt8KizNZkZ8gQKWqok)

# Игра: "Калькулятор"

Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ. Операции, как и числа, выбираются случайным образом.

[![asciicast](https://asciinema.org/a/2XCRLm96YBX6CYNuIpGdGvaKb.svg)](https://asciinema.org/a/2XCRLm96YBX6CYNuIpGdGvaKb)

# Игра "НОД"

Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

[![asciicast](https://asciinema.org/a/dz5dlZqFBwqf5g11EicdcBpBN.svg)](https://asciinema.org/a/dz5dlZqFBwqf5g11EicdcBpBN)

# Игра "Арифметическая прогрессия"

Игроку показывается ряд чисел, образующий арифметическую прогрессию, одно из чисел заменено двумя точками. Игрок должен определить это число. Позиция спрятанного элемента каждый раз выбирается случайным образом.

[![asciicast](https://asciinema.org/a/Agfu1nINKIZjvoi4ZZooXspaR.svg)](https://asciinema.org/a/Agfu1nINKIZjvoi4ZZooXspaR)

# Игра "Простое ли число?"

Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число простое, или no — если нет.

[![asciicast](https://asciinema.org/a/U5aWMXGcAuTaR6XICwJfODKXR.svg)](https://asciinema.org/a/U5aWMXGcAuTaR6XICwJfODKXR)
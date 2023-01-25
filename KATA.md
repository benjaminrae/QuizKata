# Nuestro Quiz

Tenéis que crear un quiz interactivo usando JavaScript.

[CodeSandbox link](https://codesandbox.io/s/isdi-coders-quiz-kata-5pudcn?file=/src/index.js)

0. Pedir el nombre del usuario y comprobar que funciona mediante console.log

```js
const userName = prompt("What's your name?");
```

1. Crear una colección de preguntas y respuestas para el quiz

```js
const questionOne = "What is white and falls from the sky when it snows?";
const answerOne = "snow";
```

3. Pedir las respuestas del usuario a cada pregunta

```js
const userAnswerOne = prompt(questionOne);
```

4. Comprobar las respuestas del usuario, sumar un punto si es correcto

```js
if (userAnswer === answer) {
  points = points + 1;
}
```

5. Muestra un mensaje amigable al usuario con su nombre y el total de puntos acumulados

```js
alert("Well done," ...)
```

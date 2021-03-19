Задача: Необходимо реализовать компонент с методом validate.
Компонент может быть вложен сам в себя.

При вызове метода validate, необходимо что - бы компонент вызывал данный метод у своих детей(только validate-component).

Схематично:

<!-- 1 --> <validate-component>
                <some-component>
        <!-- 2 --> <validate-component></validate-component>
              </some-component>
              <some-component>
       <!-- 3 --> <validate-component>
                      <!-- 4 -->  <validate-component/>
                  </validate-component>
              </some-component>
  <!-- 5 --> <validate-component></validate-component>
          </validate-component>

Вызов метода validate у компонента 1 должен вызвать данный метод у компонентов 2, 3, 5.
Вызов метода у компонента 3 должен вызвать метод у компонента 4.

Вложенность компонентов может быть неограничена.

Задача была выполнена на классах. Реализация находится в компоненте - ValidateComponent.
Для проверки можно запуситить прил и увидеть исполнение. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


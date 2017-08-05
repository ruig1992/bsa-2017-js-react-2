Binary Studio Academy 2017. React JS Task 2
====

### Установка и запуск:

  - склонировать репозиторий `git clone https://github.com/ruig1992/bsa-2017-js-react-2.git`
  - в консоли ввести `npm install` для установки зависимостей проекта
  - для запуска ввести `npm start`, открыть в браузере http://localhost:3000/

***

### Задание:

1. Создать новый репозиторий для этого задания, а не использовать прошлый.  

2. Модифицировать существующее домашнее задание так, чтобы не использовать атрибуты для передачи информации в дочерние компоненты (переменные/функции), a использовать:  
```
   function mapDispatchToProps(dispatch, ownProps) { //... }  
   function mapStateToProps(state) { //... }  
   const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(Component);  
```

в компонентах, которые и инициируют данные `actions`, что в итоге позволит иметь необходимые переменные и методы в `this.props` компонента.  

3. Добавить компонент для фильтрации по имени пользователя, таким образом, что при вводе символов в поле для ввода изменялся список пользователей в уже имеющемся компоненте.  

Например:  

  - Поле ввода: `""`   ->  Список пользователей: _Иванов, Петров, Сидоров_  
  - Поле ввода: `"с"`  ->  Список пользователей: _Сидоров_  

***

### Ссылки:

Презентация - https://docs.google.com/presentation/d/13K9bPa9m_FnOl1LEcgQ8N5-hJl7rR7rm-qV1KXb2AfQ/edit?usp=sharing  

Репозиторий-демо - https://bitbucket.org/oleksandrkovalov/bsa-2016-react-demo-2

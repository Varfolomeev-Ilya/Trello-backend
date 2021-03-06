'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Andrey',
          lastName: 'Andreevich',
          email: 'AndreyAndreevich@mail.ru',
          password: bcrypt.hashSync('1234'),
          dateOfBirth: '01.01.1990',
          aboutMe: 'I am a beginner developer',
          avatar: 'http',
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 'user'
        },
        {
          firstName: 'Ivan',
          lastName: 'Ivanovich',
          email: 'IvanIvanovich@mail.ru',
          password: bcrypt.hashSync('qwerty'),
          dateOfBirth: '01.01.1991',
          aboutMe: 'I am a beginner developer',
          avatar: 'http',
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 'user'
        },
        {
          firstName: 'Sergey',
          lastName: 'Sergeevich',
          email: 'SergeySergeevich@mail.ru',
          password: bcrypt.hashSync('qwerty1234'),
          dateOfBirth: '01.01.1992',
          aboutMe: 'I am a beginner developer',
          avatar: 'http',
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 'user'
        },
        {
          firstName: 'addmin',
          lastName: 'adminovich',
          email: 'admin@admin.com',
          password: bcrypt.hashSync('admin1234'),
          dateOfBirth: '01.01.1992',
          aboutMe: 'I am a beginner developer',
          avatar: 'http',
          createdAt: new Date(),
          updatedAt: new Date(),
          roleId: 'admin'
        },
      ],
    ),
  down: async (queryInterface, Sequelize) => 
    await queryInterface.bulkInsert('Users', null, {}),
};
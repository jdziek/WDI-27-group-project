const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Posts = require('../models/post');


User.collection.drop();
Posts.collection.drop();

User
.create([{
  firstName: 'Simon',
  lastName: 'Amor',
  image: 'images/simon.jpg',
  username: 'SimonAmor',
  email: 'simonrramor@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  postcode: 'ch7 6ad',
  travelDistance: '10',
  jobTitle: 'Developer',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.'
},{
  firstName: 'James',
  lastName: 'Clarke',
  image: 'images/james.jpg',
  username: 'JamesClarke ',
  email: 'james@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  postcode: 'ch7 6ad',
  travelDistance: '10',
  jobTitle: 'Developer',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.'
},{
  firstName: 'Jakub ',
  lastName: 'Dziekan',
  image: 'images/jakub.jpg',
  username: 'Jakub Dziekan',
  email: 'Jakub@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  postcode: 'ch7 6ad',
  travelDistance: '10',
  jobTitle: 'Developer',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.'

}])
.then((users) => {
  console.log(`${users.length} users created`);
  return Posts
  .create([{
    postType: 'Teaching',
    title: 'Teaching Design next Thursday Lunch',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: 1230,
    image: 'an Image',
    createdBy: users[0]
  },{
    postType: 'Teaching',
    title: 'Teaching Design next Thursday Lunch',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: 1230,
    image: 'an Image',
    createdBy: users[0]
  },{
    postType: 'Learning',
    title: 'Want to Learn about Stocks Monday Night',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: 1915,
    image: 'an Image',
    createdBy: users[0]
  },{
    postType: 'Learning',
    title: 'Want to Learn about Stocks Monday Night',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: 1915,
    image: 'an Image',
    createdBy: users[0]
  },{
    postType: 'Learning',
    title: 'Want to Learn about Stocks Monday Night',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: 1915,
    image: 'an Image',
    createdBy: users[0]
  },{
    postType: 'Learning',
    title: 'Want to Learn about Stocks Monday Night',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: 1915,
    image: 'an Image',
    createdBy: users[0]
  }])
  .then((posts) => {
    console.log(`${posts.length} groups created`);
  });
})
.catch((err) => console.log(err))
.finally(() => mongoose.connection.close());

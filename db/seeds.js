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
  jobTitle: 'Developer',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.'

}])
.then((users) => {
  console.log(`${users.length} users created`);
  return Posts
  .create([{
    postType: 'Teaching',
    title: 'Spanish looking to practise english',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: '12:30pm',
    coordinates: { lat: 52.5221596, lng: -0.0521308 },
    createdBy: users[1]
  },{
    postType: 'Teaching',
    title: 'Need to tell people about my cats ',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: '12:40pm',
    coordinates: { lat: 51.7221596, lng: -0.0521308 },
    createdBy: users[1]
  },{
    postType: 'Learning',
    title: 'Want to Learn about Stocks Monday Night',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: '19:15pm',
    coordinates: { lat: 51.5221596, lng: -0.1521308 },
    createdBy: users[0]
  },{
    postType: 'Learning',
    title: 'Need to learn about UK tax laws',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: '19:15pm',
    image: 'an Image',
    coordinates: { lat: 51.5221596, lng: -0.0521308 },
    createdBy: users[1]
  },{
    postType: 'Learning',
    title: 'Want to Learn about Stocks Monday Night',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Somewhere',
    date: '12/12/2018',
    time: '19:15',
    coordinates: { lat: 50.5221596, lng: -0.1521308 },
    createdBy: users[2]
  },{
    postType: 'Teaching',
    title: 'I am a farmer and would love share my knowledge with someone willing to learn',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Sychdyn',
    date: '2017-08/25',
    time: '15:20pm',
    coordinates: { lat: 53.1886749, lng: -3.1317736999999397 },
    createdBy: users[0]
  },{
    postType: 'Learning',
    title: 'Want to Learn about Stocks Monday Night',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Sychdyn',
    date: '2018-12-12',
    time: '19:15pm',
    coordinates: { lat: 51.5221596, lng: -0.0521308 },
    createdBy: users[3]
  },{
    postType: 'Teaching',
    title: 'I love cooking, I want to share this passion of mine!',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Sydney',
    date: '2017-06-09',
    time: '19:15pm',
    coordinates: { lat: -33.8688197, lng: 151.20929550000005 },
    createdBy: users[0]
  },{
    postType: 'Teaching',
    title: 'I would love to speak to someone interested in surfing',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Bali',
    date: '2017-12-12',
    time: '13:00pm',
    coordinates: { lat: -8.6478175, lng: 115.13851920000002 },
    createdBy: users[1]
  },{
    postType: 'Teaching',
    title: 'If anyone wants to learn about otters I love them (a bit too much)',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'London',
    date: '2017-02-11',
    time: '19:15pm',
    coordinates: { lat: 51.5221596, lng: -0.0521308 },
    createdBy: users[0]
  },{
    postType: 'Learning',
    title: 'If anyone can teach me about fashion would love to learn!',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Paris',
    date: '2017-08-10',
    time: '14:00pm',
    coordinates: { lat: 48.856614, lng: -2.3522219000000177 },
    createdBy: users[3]
  },{
    postType: 'Learning',
    title: 'I really want to learn more about property investment',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Hong Kong',
    date: '2017-07-19',
    time: '20:00pm',
    coordinates: { lat: 22.39642, lng: 114.10949700000003 },
    createdBy: users[1]
  },{
    postType: 'Learning',
    title: 'I would love to find out how Crystal Palace FC are so good!',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit pharetra mauris et fringilla. Aenean ut nibh porta, lacinia ex vel, facilisis leo. Sed feugiat imperdiet nibh, eget sagittis diam tincidunt at. Curabitur id diam eget dolor vestibulum aliquam vel efficitur nibh. Maecenas porttitor tincidunt commodo. Morbi tincidunt viverra sodales. Nulla gravida augue lacus, quis interdum est auctor nec.',
    location: 'Croydon',
    date: '2017-07-28',
    time: '09:30am',
    coordinates: { lat: 51.376165, lng: -0.09823400000004767 },
    createdBy: users[0]
  }])
  .then((posts) => {
    console.log(`${posts.length} posts created`);
  });
})
.catch((err) => console.log(err))
.finally(() => mongoose.connection.close());

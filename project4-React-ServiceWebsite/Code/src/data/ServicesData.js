import hospital from '../img/hospital1.jpg';
import drive from '../img/drive1.jpg';
import home from '../img/home3.jpg';

const ServicesData = [
  {
    _id: '1',
    slug: 'hospital',
    image: hospital,
    alt: 'hospital',
    header: 'By Hospital',
    text: 'Make the test at your local hospital.',
    link: '',
    isButton: false,
    buttonText: 'Book Now',
  },
  {
    _id: '2',
    slug: 'driveThrough',
    image: drive,
    alt: 'Drive Through',
    header: 'Drive Through',
    text: 'Make the test in your car at the go.',
    link: '',
    isButton: false,
    buttonText: 'Book Now',
  },
  {
    _id: '3',
    slug: 'atHome',
    image: home,
    alt: 'At Home',
    header: 'At Home',
    text: 'Stay safe, stay at home, we will pay you a visit.',
    link: '',
    isButton: false,
    buttonText: 'Book Now',
  },
];

export default ServicesData;

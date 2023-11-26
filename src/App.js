
import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "Trending",
      "imageUrl": '/img/rocket-gog.jpg'
    },
    {
      "id": 2,
      "title": "Best Selling",
      "imageUrl": "/img/mandolorian.jpg"
    },
    {
      "id": 3,
      "title": "Rare",
      "imageUrl": "/img/spiderman.jpg"
    },
    {
      "id": 4,
      "title": "Collection",
      "imageUrl": "/img/collection.jpg"
    },
    {
      "id": 5,
      "title": "View All",
      "imageUrl": "/img/jake.png"
    }
  ]

  return (
    //Trending
    <Directory categories={categories} />
  );
}

export default App;

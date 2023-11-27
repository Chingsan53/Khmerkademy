import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {

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
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div>

    );
}

export default Home;

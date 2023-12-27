import { Outlet } from "react-router-dom";
// import { getCategoriesAndDocuments } from "../components/utils/firebase/firebase.utils.js";
import { useEffect, useState } from "react";
import "./home.styles.scss";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hello",
      translation: "សួរស្តី",
    },
    {
      id: 2,
      title: "How are you?",
      translation: "តើអ្នកសុខសប្បាយទេ?",
    },
    {
      id: 3,
      title: "What is your name?",
      translation: "តើអ្នកឈ្មោះអី្វ?",
    },
    {
      id: 4,
      title: "How old are you?",
      translation: "តើអ្នកអាយុប៉ុន្មានហើយ?",
    },
    {
      id: 5,
      title: "See you again soon.",
      translation: "ជួបគ្នាពេលក្រោយ",
    },
  ];

  //   const [categories, setCategories] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await firestore
  //           .collection("your-collection-name")
  //           .get();
  //         const data = response.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));
  //         setCategories(data);
  //       } catch (error) {
  //         console.error("Error fetching data: ", error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className="container">
      <ul className="list">
        {categories.map((category) => (
          <li className="list-item" key={category.id}>
            <span className="title">{category.title}</span>
            <span className="translation">{category.translation}</span>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showType, setShowType] = useState("table");

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://book-store-backend-hwea.onrender.com/books")
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-4">
            <div className="flex justify-center items-center gap-x-4">
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ${showType === "table" ? "bg-blue-700" : ""}`}
                    onClick={() => setShowType("table")}
                >
                    Table
                </button>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded ${showType === "card" ? "bg-blue-700" : ""}`}
                    onClick={() => setShowType("card")}
                >
                    Card
                </button>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Books</h1>
                <Link to="/books/create" className="flex items-center">
                    <MdOutlineAddBox className="text-blue-800 text-4xl" />
                    <span className="ml-2">Add Book</span>
                </Link>
            </div>
            {loading ? (<Spinner />) : showType === "table" ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
        </div>
    );
};

export default Home;

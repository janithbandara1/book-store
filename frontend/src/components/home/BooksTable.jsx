import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
    return (
        <table className="w-full border-separate border-spacing-2">
            <thead>
                <tr>
                    <th className="border border-slate-600 rounded-md p-2">No</th>
                    <th className="border border-slate-600 rounded-md p-2">Title</th>
                    <th className="border border-slate-600 rounded-md p-2 max-md:hidden">Author</th>
                    <th className="border border-slate-600 rounded-md p-2 max-md:hidden">Publish Year</th>
                    <th className="border border-slate-600 rounded-md p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className="h-8">
                        <td className="border border-slate-600 rounded-md text-center p-2">
                            {index + 1}
                        </td>
                        <td className="border border-slate-600 rounded-md text-center p-2">
                            {book.title}
                        </td>
                        <td className="border border-slate-600 rounded-md text-center max-md:hidden p-2">
                            {book.author}
                        </td>
                        <td className="border border-slate-600 rounded-md text-center max-md:hidden p-2">
                            {book.publishYear}
                        </td>
                        <td className="border border-slate-600 rounded-md text-center p-2">
                            <div className="flex justify-center items-center space-x-2">
                                <Link to={`/books/details/${book._id}`} aria-label="View Details">
                                    <BsInfoCircle className="text-blue-600 text-2xl hover:text-black" />
                                </Link>
                                <Link to={`/books/edit/${book._id}`} aria-label="Edit Book">
                                    <AiOutlineEdit className="text-yellow-600 text-2xl hover:text-black" />
                                </Link>
                                <Link to={`/books/delete/${book._id}`} aria-label="Delete Book">
                                    <MdOutlineDelete className="text-red-600 text-2xl hover:text-black" />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BooksTable;
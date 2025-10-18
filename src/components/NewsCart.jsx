import { FaEye, FaStar } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { MdIosShare } from "react-icons/md";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md mr-3 ml-3">
      {/* Author & Top Section */}
      <div className="flex bg-base-200 items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
         <div className="">
             <button className="btn btn-ghost btn-sm"><IoBookmarksOutline size={20} /></button>
        <button className="btn btn-ghost btn-sm"><MdIosShare size={20} /></button>
         </div>
      
      </div>

      {/* Image */}
      <figure>
        <img src={thumbnail_url} alt="thumbnail" className="w-full h-52 object-cover" />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg">{title}</h2>
        <p className="text-sm text-gray-600">
          {details.slice(0, 120)}...
          <span className="text-blue-600 cursor-pointer"> Read More</span>
        </p>

        {/* Footer Info */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t">
          <div className="flex items-center gap-1 text-orange-500">
            <FaStar /> <span className="font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye /> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

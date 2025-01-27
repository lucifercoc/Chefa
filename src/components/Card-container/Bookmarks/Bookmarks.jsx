import { useState } from "react";
import Cooklist from "../Cooklist/Cooklist";

const Bookmarks = ({ wantToCook, cooking }) => {
  const [cookingItem, setCookingItem] = useState([]);

  const handleCookingItem = (item) => {
    const newCookItem = [...cookingItem, item];
    setCookingItem(newCookItem);
  };

  console.log(cooking); // Check if cooking data is being passed correctly

  if (!Array.isArray(wantToCook)) return null;

  return (
    <div className="p-4 border rounded-md shadow-md">
      <div className="mb-16">
        <div>
          <h2 className="text-lg font-bold mb-4 text-center">Want to Cook: </h2>
          <div className="text-gray-500">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {wantToCook.map((bookmark) => (
                  <tr key={bookmark.id}>
                    <td>{bookmark.id}</td>
                    <td>{bookmark.title}</td>
                    <td>{bookmark.details.time}</td>
                    <td>{bookmark.details.calories}</td>
                    <td>
                      <button
                        onClick={() => handleCookingItem(bookmark)} // Pass the specific bookmark
                        className="btn btn-active btn-accent bg-green-400 text-black font-bold hover:bg-green-700 transition rounded-full"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Cooklist cookingItem={cookingItem} cooking={cooking} />
    </div>
  );
};

export default Bookmarks;

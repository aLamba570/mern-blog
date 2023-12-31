
import { MdDelete } from "react-icons/md";

const Comments = () => {
  return (
    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-600">@ElifCoder</h3>
        <div className="flex justify-center items-center space-x-4">
          <p>1 june 1223</p>
          <p>20:25</p>
          
            <div className="flex items-center justify-center space-x-2">
              <p
                className="cursor-pointer"
                
              >
                <MdDelete />
              </p>
            </div>
         
        </div>
      </div>
      <p className="px-4 mt-2">Comments</p>
    </div>
  );
};

export default Comments;

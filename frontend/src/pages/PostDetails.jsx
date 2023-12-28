import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import mine from "../components/mine.jpg";

const PostDetails = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text 2x1 font-bold text-black md:text-3x1">
            {" "}
            10 Best Programming Languages to Learn in 2021
          </h1>

          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 md:mt-2">
          <p>@elifcoder</p>
          <div className="flex space-x-2">
            <p>Aug 2, 2021</p>
            <p>7 min read</p>
          </div>
        </div>

        <img src={mine} alt=" " className="h-[400px] w-full object-cover" />
        <p className="mx-auto mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
            <h3 className="mt-4 mb-6 font-semibold">Comments:</h3>
            {/* comments */}

            <div className="px-2 py-2 bg-gray-200 rounded-lg mt-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-600"> @elifcoder </h3>
                    <div className="flex justify-center items-center space-x-4 ">
                        <p className="text-gray-500">20/12/2023</p>
                        <p className="text-gray-500">20:45</p>

                        <div className="flex items-center justify-center space-x-2">
                            <p><BiEdit/></p>
                            <p><MdDelete/></p>
                        </div>
                    </div>
                </div>

                <p className="px-4 mt-2">Nice Information</p>
            </div>

            {/* comments */}

            <div className="px-2 py-2 bg-gray-200 rounded-lg mt-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-600"> @elifcoder </h3>
                    <div className="flex justify-center items-center space-x-4 ">
                        <p className="text-gray-500">20/12/2023</p>
                        <p className="text-gray-500">20:45</p>

                        <div className="flex items-center justify-center space-x-2">
                            <p><BiEdit/></p>
                            <p><MdDelete/></p>
                        </div>
                    </div>
                </div>

                <p className="px-4 mt-2">Nice Information</p>
            </div>
        </div>

        {/* write comment */}

        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input  type="text" placeholder="Write a comment" className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"/>
          <button  className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>
         </div>

      </div>
      <Footer />
    </>
  );
};

export default PostDetails;

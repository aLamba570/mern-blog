import mine from "./mine.jpg"

const HomePost = () => {
    return (
        <>
        
        <div className="w-full flex mt-8 space-x-4">
            {/* left */}
            <div className="w-[35%] h-[200px] flex justify-center items-center">
                <img src = {mine} alt = " " className="h-full w-full object-cover"/>
            </div>

            {/* right */}
            <div className="flex flex-col w-[65%]">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2x1">
                    10 Best Programming Languages to Learn in 2021
                </h1>

                <div className="flex mb-2 text-sm font-semibold text-gray-500 space-x-4 tems-center justify-between md:mb-4">
                    <p>@elifcoder</p>
                    <div className="flex space-x-2">
                        <p>Aug 2, 2021</p>
                        <p>7 min read</p>
                    </div>
                </div>
                <p className="text-sm md:text-lg"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod debitis quaerat animi, sunt adipisci, blanditiis numquam doloremque vero nihil perspiciatis earum dolore voluptatem expedita tenetur amet officiis harum! Illo!</p>
            </div>

        </div>
        </>
        
            
    );
}

export default HomePost;
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="bg-black text-white w-screen h-screen overflow-x-hidden">

        <div className="flex flex-wrap justify-center items-center p-4 m-4 content-center ">
            <h1 className="font-extrabold text-8xl content-center">REINVENT WHAT YOUR </h1>
                <h1 className="font-extrabold text-8xl content-center">BUSINESS COULD BE</h1>
        </div>

        <div className="flex flex-wrap justify-center items-center p-4 m-4 content-center">
            <h6 className="font-bold text-xl">Let there be change</h6>
            <div className=" m-3 w-5 h-5 bg-purple-600">
                <div className="cursor-pointer items-center"> { ` > `} </div>
            </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-4 gap-4 grid-flow-row justify-center justify-items-center border-white">
            <div className="border-solid border-white-300">
              <Image 
                  src="https://source.unsplash.com/random"
                  alt="images"
                  className="p-4 m-4"
                  width={500}
                  height={500}
                ></Image>
            </div>
            <div>
            <Image 
                  src="https://source.unsplash.com/random"
                  alt="images"
                  className="p-4 m-4"
                  width={500}
                  height={500}
                ></Image>
            </div>
            <div>
            <Image 
                  src="https://source.unsplash.com/random"
                  alt="images"
                  className="p-4 m-4"
                  width={500}
                  height={500}
                ></Image>
            </div>
            <div>
            <Image 
                  src="https://source.unsplash.com/random"
                  alt="images"
                  className="p-4 m-4"
                  width={500}
                  height={500}
                ></Image>
            </div>
        </div>



    </div>
  )
}

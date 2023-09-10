
const SkeletonLoader = () => {
  return (
    <div className='bg-gray-600 h-[4rem] flex items-center gap-4 p-3 animate-pulse'>
        <div className=" bg-gray-300 w-[25%] h-[2rem]"></div>
        <div className=" bg-gray-300 w-[25%] h-[2rem]"></div>
        <div className=" bg-gray-300 w-[25%] h-[2rem]"></div>
        <div className=" bg-gray-300 w-[25%] h-[2rem]"></div>
    </div>
  )
}

export default SkeletonLoader
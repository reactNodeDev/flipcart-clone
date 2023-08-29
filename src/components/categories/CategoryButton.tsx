interface ICategoryButton {
    name : string
}

const CategoryButton = ({name}:ICategoryButton) => {
  return (
    <button className={`py-4 pr-4 p-2  border-2 border-b-slate-300 w-auto min-w-[3rem] col-span-6 lg:col-span-3 drop-shadow-lg shadow-inner content-center`}>
        <p className='text-xs font-semibold'>
        {name}
        </p>
    </button>
  )
}

export default CategoryButton
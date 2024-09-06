export default function Button({ children }){
    return(
        <a href="#" className='font-extrabold h-[45px] w-[330px]  sm:w-[420px] sm:h-[60px] flex justify-center items-center border-solid border-[1px] border-[#334029] rounded-[5px] text-[#161C12] text-[14px] sm:text-[20px]'>
            { children }
        </a>
    )
}
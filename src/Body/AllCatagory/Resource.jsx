import serviceimg from '../../../img/service.png'
export default function Resource() {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>রিসোর্স </h2>
        <div className='flex flex-wrap gap-5 items-center ' >
            <img className='w-auto h-32' src={serviceimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> গ্রন্থগার </a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>  রিসার্চ সেল </a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> প্রতিষ্ঠানের ল্যব সমূহ </a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> খেলার মাঠ </a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span>সহপাঠক্রম সংক্রান্ত কার্যক্রম </a></li>
                 
                
            </ul>
        </div>
    </div>
  )
}

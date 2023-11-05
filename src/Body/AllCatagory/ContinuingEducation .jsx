import Integrityimg from '../../../img/Integrity.png'

export default function ContinuingEducation () {
  return (
    <div className='bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full'>
        <h2 className=' font-semibold'>চলমান শিক্ষা কার্যক্রম  </h2>
        <div className='flex  gap-5 items-center ' >
            <img className='w-24 h-32' src={Integrityimg} alt="Academicimg" />
            <ul className='text-slate-500 text-[13px] px-3'>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> ৪ বছর মেয়াদী ডিপ্লোমা ইন ইঞ্জিনিয়ারিং এর টেকনোলজী সমূহ  </a></li>
                <li className='flex items-center'><a href="#"><span className=" text-xl pr-1">▸</span> শর্ট কোর্স সমূহ  </a></li>
            </ul>
        </div>
    </div>
  )
}

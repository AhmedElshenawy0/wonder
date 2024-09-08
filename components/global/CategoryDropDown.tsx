import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const CategoryDropDown = ({ openCategory }: any) => {
  return (
    openCategory && (
      <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center  lg:h-[3.5rem]">
        <li>
          <Link className="flex justify-between text-[20px]" href="/">
            <small> المنتجات </small>
            <IoIosArrowBack className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link href="/" className="flex justify-between text-[20px]">
            <small>العروض والتخفيضات </small>
            <IoIosArrowBack className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link href="#" className="py-2 flex justify-between  text-[20px]">
            <small>الأسئلة الشائعة</small>
            <IoIosArrowBack className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link href="#" className="py-2 flex justify-between  text-[20px]">
            <small>المدونة</small>
            <IoIosArrowBack className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link href="#" className="py-2 flex justify-between  text-[20px]">
            <small>إتصل بنا</small>
            <IoIosArrowBack className="lg:hidden" />
          </Link>
        </li>
      </ul>
    )
  );
};

export default CategoryDropDown;

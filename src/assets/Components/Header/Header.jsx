import profile from "../../images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center mx-[20px] lg:mx-[150px] mt-[30px] lg:mt-[45px] border-b-2 border-gray-200 pb-5 md:pb-8">
            <h1 className='text-2xl md:text-4xl font-semibold text-center'>Knowledge Cafe</h1>
            <img src={profile} alt="" className="border-2 border-blue-700 rounded-full w-[60px]"/>
        </div>
    );
};

export default Header;
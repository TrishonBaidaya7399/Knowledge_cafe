import profile from "../../images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center mx-[200px] mt-[52px] border-b-2 border-gray-200 pb-8">
            <h1 className='text-4xl font-semibold text-center'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
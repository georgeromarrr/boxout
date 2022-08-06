import { useContext } from "react";
import { Link } from 'react-router-dom';

import { UserContext } from "../../context/UserContext";

const Navbar = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="container grid grid-cols-3 py-6 mx-auto">
            <div className="flex flex-row gap-8">
                <Link to="/shop">Shop</Link> 
                <Link to='/'>About</Link>
                <Link to='/'>Reviews</Link>
            </div>
            <div className="text-center">
                <h1 className="text-2xl uppercase font-semibold tracking-widest"><Link to="/">Boxout</Link></h1>
            </div>
            <div className="flex flex-row gap-8 place-content-end">
                <Link to='/wishlist'>
                    <WishlistSvg />
                </Link>
                <Link to='/'>
                    <SearchSvg />
                </Link>
                <Link to="/cart">
                    <CartSvg />
                </Link>
                <Link to={ user ? "/profile" : "/login"} className="flex flex-row gap-2 w-max">
                    <ProfileSvg /> { user ? <div>{user.first_name}</div> : ''}
                </Link>
            </div>
        </div>
    )
};
export default Navbar;

const WishlistSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    )
}

const SearchSvg = () => {
    return (      
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    )
}

const CartSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    )
}

const ProfileSvg = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    )
}
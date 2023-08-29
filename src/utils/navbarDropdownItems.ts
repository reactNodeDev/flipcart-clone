import { IDropdownMenuItem } from ".";
import { GoPerson } from 'react-icons/go'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { BiPackage } from 'react-icons/bi'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { AiOutlineHeart, AiOutlineTag, AiOutlineStar, AiOutlineGift, AiOutlineBell, AiOutlineLogout,AiOutlineStock, AiOutlineDownload } from 'react-icons/ai'

export const navbarDropdownItems : IDropdownMenuItem[] = [
    {Icon:GoPerson, text:'My Profile'},
    {Icon:BsFillLightningChargeFill, text:'Supercoin Zone'},
    {Icon:AiOutlineStar, text:'Flipkart Plus Zone'},
    {Icon:BiPackage, text:'Orders'},
    {Icon:AiOutlineHeart, text:'Wishlist'},
    {Icon:AiOutlineTag, text:'Coupons'},
    {Icon:AiOutlineGift, text:'Gift Cards'},
    {Icon:AiOutlineBell, text:'Notifications'},
    {Icon:AiOutlineLogout, text:'Logout'},
]

export const navbarDropdownOptionsItems : IDropdownMenuItem[] = [
    {Icon:AiOutlineBell, text:'Notification Preferences'},
    {Icon:TfiHeadphoneAlt, text:'24x7 Customer Care'},
    {Icon:AiOutlineStock, text:'Advertise'},
    {Icon:AiOutlineDownload, text:'Download App'},
]
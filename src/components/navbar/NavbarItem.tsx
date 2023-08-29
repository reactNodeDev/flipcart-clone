import { IconType } from 'react-icons'

type NavbarItemProps = {
    Icon: IconType,
    ExtraIcon? : IconType,
    text: string,
    onMouseOver? : React.MouseEventHandler<HTMLButtonElement>,
    onMouseOut? : React.MouseEventHandler<HTMLButtonElement>,
    className? : string
}

const NavbarItem = ({ Icon, text, ExtraIcon, onMouseOver, onMouseOut, className }: NavbarItemProps) => {
    return (
        <>
        <button onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={`${className} flex items-center justify-center space-x-1`}>
            <Icon />
            <p>
                {text}
            </p>
            {ExtraIcon ? <ExtraIcon className='transition-all hover:ease-linear duration-300' /> : null}
        </button>
        </>
    )
}

export default NavbarItem
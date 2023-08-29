import { IconType } from 'react-icons'

type NavbarItemProps = {
    Icon: IconType,
    ExtraIcon? : IconType,
    text: string,
    onMouseOver? : React.MouseEventHandler<HTMLButtonElement>,
    onMouseOut? : React.MouseEventHandler<HTMLButtonElement>,
    onClick? : React.MouseEventHandler<HTMLButtonElement>,
    className? : string
}

const NavbarItem = ({ Icon, text, ExtraIcon, onMouseOver, onMouseOut, className, onClick }: NavbarItemProps) => {
    return (
        <>
        <button onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={`${className} flex items-center justify-center space-x-1`}>
            <Icon />
            <p>
                {text}
            </p>
            {ExtraIcon ? <ExtraIcon /> : null}
        </button>
        </>
    )
}

export default NavbarItem
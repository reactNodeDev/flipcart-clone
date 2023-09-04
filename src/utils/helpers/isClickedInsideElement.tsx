const isClickedInsideElement = (e:React.MouseEvent , element : HTMLElement) => {
    const el = element?.getBoundingClientRect()
    return (
        e.clientX > el.left &&
        e.clientX < el.right &&
        e.clientY > el.top &&
        e.clientY < el.bottom
    )
}

export default isClickedInsideElement
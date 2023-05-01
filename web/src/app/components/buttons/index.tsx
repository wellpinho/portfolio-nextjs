import Image from "next/image"
import Link from "next/link"

interface IButton {
    title: string
    bgColor: string
    link: string
    textColor: string
}
export const Button = ({ title, link, bgColor, textColor }: IButton) => {
    return (
        <Link 
            className={`${bgColor} ${textColor} rounded-sm py-2 px-4 mt-4 btn_animated`} 
            href={ link }
        >{ title }</Link>
    )
}

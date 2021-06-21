import style from './Layout.module.css'

interface IProps {
    children: React.ReactNode,
}

export default function Layout({ children }: IProps) {

    return (
        <div className={style.background} >
            <div className={style.container}>
                {children}
            </div>
        </div>
    )
}

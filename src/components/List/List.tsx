import style from './List.module.css';

interface IProps {
    list: string[],
    onClick: Function,
    chartInd: number
}

export default function List({ list, onClick, chartInd }: IProps) {

    return (
        <ul className={style.list}>
            <li
                onClick={() => onClick(-1)}
                className={[style.item, chartInd === -1 ? style.itemActive : ''].join(' ')}>
                all charts
            </li>

            {list.length && list.map((el, ind) =>
            (<li
                className={[style.item, chartInd === ind ? style.itemActive : ''].join(' ')}
                onClick={() => onClick(ind)} key={el}>{el}
            </li>))}
        </ul>
    )
}

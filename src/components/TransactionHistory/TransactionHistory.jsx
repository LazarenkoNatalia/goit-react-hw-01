import styletr from "./TransactionHistory.module.css"
import clsx from "clsx";

export default function TransactionHistory({
   items
}) {
    return (

        <table className={styletr.block}>
            <thead className={styletr.block}>
                <tr className={styletr.stroka}>
                    <th className={styletr.title}>Type</th>
                    <th className={styletr.title}>Amount</th>
                    <th className={styletr.title}>Currency</th>
                </tr>
            </thead>

            <tbody className={styletr.block}>
                {items.map(transaction => {
                    return (
                        <tr key={transaction.id} className={clsx(styletr.rawinfo, styletr.stroka)}>
                            <td className={styletr.tableStroka}> {transaction.type} </td>
                            <td className={styletr.tableStroka}> {transaction.amount} </td>
                            <td className={styletr.tableStroka}> {transaction.currency} </td>
                        </tr>
                    )
                })}
     
   
            </tbody>
        </table>

    )
}
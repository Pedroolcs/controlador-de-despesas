import * as C from './styles'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
    list: Item[];
    setList: (list: Item[]) => void;
    setFilteredList: (list: Item[]) => void;
}

export const TableArea = ({ list, setList, setFilteredList }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                        <TableItem key={index} index={index} item={item} list={list} setList={setList} setFilteredList={setFilteredList}/>
                ))}
            </tbody>
        </C.Table>
    )
}
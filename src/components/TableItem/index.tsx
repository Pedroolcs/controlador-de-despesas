import * as C from './styles'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
    item: Item;
    list: Item[];
    index: any;
    setList: (list: Item[]) => void;
    setFilteredList: (list: Item[]) => void;
}

export const TableItem = ({ item, index, list, setList, setFilteredList }: Props) => {

    const handleRemoveItem = (indexToRemove: number) => {
        const updatedList = list.filter((_, index) => index !== indexToRemove);
        setList(updatedList);
        setFilteredList(updatedList);
    }

    return(
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            <C.ButtonColumn>
                <C.RemoveButton onClick={() => handleRemoveItem(index)}>REMOVER</C.RemoveButton>
            </C.ButtonColumn>
        </C.TableLine>
    )
}
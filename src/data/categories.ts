import { Category } from '../types/Category'

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    leisure: { title: 'Lazer', color: 'red', expense: true },
    water: { title: 'Água', color: 'cyan', expense: true },
    energy: { title: 'Energia', color: 'crimson', expense: true },
    others: { title: 'Outros', color: 'indigo', expense: true }
}
import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data}) => {
    const elements = data.map(item => {
        return (
            // <EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem {...item} />
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
};

export default EmployeesList;
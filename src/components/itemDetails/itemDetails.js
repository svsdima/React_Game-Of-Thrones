import React, {Component} from 'react';
import './itemDetails.scss';
import GotService from '../../services/GoT_service';
import Spinner from '../spinner';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}
export default class ItemDetail extends Component {


    state = {
        item: null
    }

    /* При обновлении компонента вызываем обновление персонажа */
    componentDidMount() {
        this.updateItem();
    }

    /* Проверка на совпадение с предыдущим пропсом */
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    /* Обновление персонажа */
    updateItem() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }


    render() {

        if (!this.state.item) {
            return <span className="select-error">Пожалуйста выберите персонажа</span>
        }

        const {item} = this.state;
        const {name} = item;

        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}
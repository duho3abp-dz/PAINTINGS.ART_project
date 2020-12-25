'use strict';

const calculator = ({
    selectsIdentifier
}) => {
    const selects = document.querySelectorAll(selectsIdentifier);

    if (!selects.length) return;

    let data = {
        size: { value: '', price: 0 },
        material: { value: '', price: 0 },
        options: { value: '', price: 0 },
        total: 0
    };

    const actionData = (id, value) => {
        const price = 0;
        switch (id) {
            case 'size':
                price = !value ? 0 
                    : value === '40x50' ? 500 
                    : value === '50x70' ? 600 
                    : value === '70x70' ? 700 
                    : value === '70x100' ? 900 : 0 ;
                data = { ...data, size: { value, price } };
                break;
            case 'material':
                price = !value ? 0 
                    : value === 'Холст из волокна' ? 300 
                    : value === 'Льняной холст' ? 400 
                    : value === 'Холст из натурального хлопка' ? 500 : 0 ;
                data = { ...data, material: { value, price } };
                break;
            case 'options':
                price = !value ? 0 
                    : value === 'Покрытие арт-гелем' ? 300 
                    : value === 'Экспресс-изготовление' ? 300 
                    : value === 'Доставка готовых работ' ? 300 : 0 ;
                data = { ...data, options: { value, price } };
                break;
            default:
                break;
        }
    };

    const changeEvent = e => {
        const select = e.target;
        const value = select.value;

        actionData(select.id, value);

        // data.total = data.size.price + data.material.price + data.options.price;

        console.log(data);
        // console.log(data.size.price);
    };

    selects.forEach(select => select.addEventListener('change', changeEvent));
};

export default calculator;
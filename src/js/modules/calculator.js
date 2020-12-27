'use strict';

const calculator = ({
    selectsIdentifier,
    totalPriceBlockIdentifier,
    activeTotalPriceBlock,
    promoInputIdentifier,
    promoWord,
    discount
}) => {
    const selects = document.querySelectorAll(selectsIdentifier);
    const totalBlock = document.querySelector(totalPriceBlockIdentifier);
    const input = document.querySelector(promoInputIdentifier);

    if ( !selects.length || !totalBlock || !input ) return;

    let data = {
        size: { value: '', price: 0 },
        material: { value: '', price: 0 },
        options: { value: '', price: 0 },
        promo: false,
        total: 0
    };

    const sumTotal = () => {
        const { size, material, options, promo } = data;
        const sum = +size.price + +material.price + +options.price;
        const total = promo && discount > 0 && discount <= 100
            ? Math.round( sum / 100 * ( 100 - discount) ) : sum ;

        data = { ...data, total };
        displayTotal();
    };

    const actionData = (id, value) => {
        let price = 0;
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

    const displayTotal = () => {
        const { size, material, total } = data;
        totalBlock.textContent = !total ? '' : size.price && material.price ? `${ data.total } ₽` : '';
        
        if ( totalBlock.textContent ) { totalBlock.classList.add( activeTotalPriceBlock ) }
        else totalBlock.classList.remove( activeTotalPriceBlock ) ;
    };

    const changeEvent = e => {
        const select = e.target;
        const value = select.value;

        actionData(select.id, value);
        sumTotal();
    };

    const blurEvent = e => {
        const value = e.target.value;
        data = { ...data, promo: value === promoWord };
        sumTotal();
    };

    selects.forEach(select => select.addEventListener('change', changeEvent));
    input.addEventListener('blur', blurEvent);
};

export default calculator;
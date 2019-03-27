import React from 'react';
import ServiceTableRow from './ServiceTableRow'

export default ({account, data}) => {
    return(
        <div className='serviceTableWrapper'>
            <div className='serviceTableHeader'>
                <span>Услуга</span>
                <span>Стоимость</span>
                <span className={account ? '' : 'hide'}>Необходимые документы</span>
            </div>
            <ServiceTableRow data={data} account={account} />
        </div>
    )
}
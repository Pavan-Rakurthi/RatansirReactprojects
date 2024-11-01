import { useState } from "react";

function PriceDiscount() {
    const bill = 20302;
    
    const [disc, setDisc] = useState(0);
    const [final, setFinal] = useState(bill);
    
    function discountcal(percentage) {
        let discountValue = 0;

        if (percentage > 0) {
            discountValue = (percentage / 100) * bill;
        }
        
        setDisc(discountValue);
        setFinal(bill - discountValue);
    }

    return (
        <>
            <h1>Bill Section</h1>
            <h2>Product Bill: ${bill}</h2>
            <h3>Discount Price: ${disc.toFixed(2)}</h3>
            <h4>Final Bill: ${final.toFixed(2)}</h4>

            <button onClick={() => discountcal(10)}>10% Discount</button>
            <button onClick={() => discountcal(20)}>20% Discount</button>
            <button onClick={() => discountcal(30)}>30% Discount</button>
            <button onClick={() => discountcal(0)}>No Discount</button>
        </>
    );
}

export default PriceDiscount;
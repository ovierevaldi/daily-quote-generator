import { useEffect, useState } from "react"
import QuoteGenerator from "../../providers/quote-generator";

const Quotes = () => {
    const [currentQuotes, setCurrentQuotes] = useState('');

    useEffect(() => {

        setCurrentQuotes(QuoteGenerator.generateQuote())

    }, [currentQuotes])

    return (
        <div className="flex flex-col">
            <p className='bg-black/30 rounded-lg'>
                {currentQuotes};                            
            </p>
            <button>Regenerate</button>
        </div>
    )
}

export default Quotes
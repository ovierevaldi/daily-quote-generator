import { useEffect, useState } from "react"
import QuoteGenerator from "../../providers/quote-generator";

const Quotes = () => {
    const [currentQuotes, setCurrentQuotes] = useState('');
    useEffect(() => {

        setCurrentQuotes(QuoteGenerator.generateQuote())

    }, [currentQuotes])

    return (
        <div className="max-w-md space-y-8">
            <p className='bg-black/30 rounded-lg text-center p-8 text-lg' style={{whiteSpace: 'pre-wrap'}}>
                {currentQuotes}                          
            </p>
            <div className="flex justify-center">
                <button className="bg-white p-3 rounded-lg">Regenerate</button>
            </div>
        </div>
    )
}

export default Quotes
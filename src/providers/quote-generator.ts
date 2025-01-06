class QuoteGenratorClass {

    listQuotes: string[];

    constructor(){
        this.listQuotes = [
            'Kesuksesan adalah hasil dari kerja keras, doa, dan keberanian untuk terus mencoba meski gagal berulang kali.',
            'Hidup bukan tentang menunggu badai berlalu, tapi tentang belajar menari di tengah hujan.',
            'Jangan takut melangkah, karena setiap langkah kecil membawa kita lebih dekat pada impian besar.',
            'Kegagalan adalah kesempatan untuk memulai lagi, kali ini dengan lebih cerdas.',
            'Bahagia itu sederhana, cukup dengan bersyukur atas apa yang kita miliki hari ini.'
        ]
    };
    
    generateQuote(){
        const index = Math.floor(Math.random() * this.listQuotes.length);
        return this.listQuotes[index];
    };
};

const QuoteGenerator = new QuoteGenratorClass();

export default QuoteGenerator;
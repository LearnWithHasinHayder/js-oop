class Printer {
    constructor(data){
        this.data = data;
    }

    log(){
        console.log(this.data);
    }

    print(){
        console.log('Printing ' + this.data);
    }
}

class PDFPrinter extends Printer{
    constructor(data){
        super(data);
    }
    print(){
        console.log('Printing PDF file ' + this.data);
    }
}

class HTMLPrinter extends Printer{
    constructor(data){
        super(data);
    }
    print(){
        console.log('Printing HTML ' + this.data);
    }

    log(){
        console.log('HTML ' + this.data);
    }
}

class TextPrinter extends Printer{
    constructor(data){
        super(data);
    }
    print(){
        console.log('Printing Text ' + this.data); //override
    }
}

const pdfPrinter = new PDFPrinter('Invoice');
pdfPrinter.print();
pdfPrinter.log();

const htmlPrinter = new HTMLPrinter('Report');
htmlPrinter.print();
htmlPrinter.log();
const Email = {
    sendMail(){
        //send email
        console.log('Email sent');
    },
    sendOrderStatus(){},
    sendPromotion(){},
    sendNewsletter(){},
    sendInvoice(){
        const invoice = Printer.printPDF();
        this.sendMail(invoice);
    }
}

export default Email;

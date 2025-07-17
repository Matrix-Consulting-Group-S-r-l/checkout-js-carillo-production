export const mtxConfig = {
    shippingMethods: {
        corriereStandard: 'Corriere Espresso (BRT) - Consegna in 4/5 giorni lavorativi',
        corriereContrassegno: 'Corriere Contrassegno',
        corriereConsegnaInNegozio: 'Consegna in negozio',
    },
    OrderConfirmation: {
        textCod: "Abbiamo ricevuto il tuo ordine. L'ordine è in fase di elaborazione nel nostro sistema. L'elaborazione potrebbe richiedere alcuni minuti.",
    },
    AddressCustomFields: {
        pIvaID: "30", // Partiva IVA / Codice fiscale   TEST: 26 - PROD: 30
        fattID: "32", // Fatt   TEST: 28 - PROD: 32
    }
}
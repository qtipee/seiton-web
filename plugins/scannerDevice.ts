export class ScannerDevice {
    private inputBuffer: string = '';
    private endDelimiter: string ='\r'; // Enter key as the delimiter

    public barcodeScanned = ref<[string]>(['']); // Array to store emitted barcodes

    constructor() {
        //this.startListening();
    }

    private startListening() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            const characters = event.key;
            if (!characters) return;

            for (const character of characters) {
                if (character === this.endDelimiter) {
                    // Process complete barcode
                    this.processScannedInput();
                    // Reset the buffer
                    this.inputBuffer = '';
                } else {
                    // Append the pressed key to the buffer
                    this.inputBuffer += character;
                }
            }
        });
    }

    private processScannedInput() {
        if (this.inputBuffer.length > 0) {
            // Emit the scanned barcode and active tab
            this.barcodeScanned.value.push(this.inputBuffer);
        }
    }
}

export default defineNuxtPlugin(() => {
    const scannerDevice = reactive(new ScannerDevice());
    return {
        provide: {
            scannerDevice,
        },
    };
});

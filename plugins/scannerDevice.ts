export class ScannerDevice {
    // Scanned data (numbers composing the barcode)
    private inputBuffer: string = '';
    // Enter key as the delimiter
    private endDelimiter: string ='Enter';
    private lastInputTime: number = 0;
    // Max time (ms) between characters to be considered a scan
    private scanThreshold: number = 50; 

    // Latest scanned barcode
    public lastScannedBarcode = ref<string | null>(null);

    constructor() {
        this.startListening();
    }

    private startListening() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            const currentTime = Date.now();
            const timeSinceLastInput = currentTime - this.lastInputTime;
            this.lastInputTime = currentTime;

            if (timeSinceLastInput > this.scanThreshold) {
                this.inputBuffer = '';
            }

            if (event.key === this.endDelimiter) {
                // Process complete barcode
                this.processScannedInput();
                // Reset the buffer
                this.inputBuffer = '';
            } else {
                // Append the pressed key to the buffer
                this.inputBuffer += event.key;
            }
        });
    }

    private processScannedInput() {
        if (this.inputBuffer.length > 0) {
            // Emit the scanned barcode and active tab
            this.lastScannedBarcode.value = this.inputBuffer;
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

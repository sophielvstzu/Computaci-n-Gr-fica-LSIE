import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';

@Component({
    selector: 'toast-basic-demo',
    templateUrl: './toast-basic-demo.component.html',
    standalone: true,
    imports: [Toast, ButtonModule, ProgressBar],
    providers: [MessageService]
})
export class ToastHeadlessDemo {

    visible: boolean = false;

    progress: number = 0;

    interval: any = null;

    constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) {}

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({
                key: 'confirm',
                sticky: true,
                severity: 'custom',
                summary: 'Uploading your files.',
                styleClass: 'backdrop-blur-lg rounded-2xl',
            });
            this.visible = true;
            this.progress = 0;

            if (this.interval) {
                clearInterval(this.interval);
            }

            this.interval = setInterval(() => {
                if (this.progress <= 100) {
                    this.progress = this.progress + 20;
                }

                if (this.progress >= 100) {
                    this.progress = 100;
                    clearInterval(this.interval);
                }
                this.cdr.markForCheck();
            }, 1000);
        }
    }

    onClose() {
        this.visible = false;
    }
}
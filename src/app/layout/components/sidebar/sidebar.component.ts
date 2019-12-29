import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@app/_models/user';
import { AuthenticationService } from '@app/shared/services/authentication.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showPrimarMasters: string;
    showOtherMasters = '';
    showManagePackage = '';
    showManageSubscriber = '';
    showManageImport = '';
    showManageTax = '';
    showManageItem = '';
    showMenu = '';
    pushRightClass: string;
    userValue: User;

    @Output() collapsedEvent = new EventEmitter<boolean>();
    addExpandCssClassPM = 'fa fa-plus';
    addExpandCssClassOM = 'fa fa-plus';
    addExpandCssClassMP = 'fa fa-plus';
    addExpandCssClassManageItem = 'fa fa-plus';
    addExpandCssClassMS = 'fa fa-plus';
    addExpandCssClassMT = 'fa fa-plus';

    constructor(private translate: TranslateService,
        private authenticationService: AuthenticationService,
        public router: Router) {
        this.userValue = this.authenticationService.currentUserValue;
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showPrimarMasters = '';
        this.pushRightClass = 'push-right';
    }


    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandPrimaryMasters(element: any) {
        if (element === this.showPrimarMasters) {
            this.showPrimarMasters = '0';
            this.addExpandCssClassPM = 'fa fa-plus';
        } else {
            this.showPrimarMasters = element;
            this.addExpandCssClassPM = 'fa fa-minus';
        }
    }

    addExpandManagePackage(element: any) {
        if (element === this.showManagePackage) {
            this.showManagePackage = '0';
            this.addExpandCssClassMP = 'fa fa-plus';
        } else {
            this.showManagePackage = element;
            this.addExpandCssClassMP = 'fa fa-minus';
        }
    }

    addExpandManageSubscriber(element: any) {
        if (element === this.showManageSubscriber) {
            this.showManageSubscriber = '0';
            this.addExpandCssClassMS = 'fa fa-plus';
        } else {
            this.showManageSubscriber = element;
            this.addExpandCssClassMS = 'fa fa-minus';
        }
    }

    addExpandManageImport(element: any) {
        if (element === this.showManageImport) {
            this.showManageImport = '0';
            this.addExpandCssClassMP = 'fa fa-plus';
        } else {
            this.showManageImport = element;
            this.addExpandCssClassMP = 'fa fa-minus';
        }
    }

    addExpandManageTax(element: any) {
        if (element === this.showManageTax) {
            this.showManageTax = '0';
            this.addExpandCssClassMT = 'fa fa-plus';
        } else {
            this.showManageTax = element;
            this.addExpandCssClassMT = 'fa fa-minus';
        }
    }

    addExpandManageItems(element: any) {
        if (element === this.showManageItem) {
            this.showManageItem = '0';
            this.addExpandCssClassManageItem = 'fa fa-plus';
        } else {
            this.showManageItem = element;
            this.addExpandCssClassManageItem = 'fa fa-minus';
        }
    }

    addExpandOtherMasters(element: any) {
        if (element === this.showOtherMasters) {
            this.showOtherMasters = '0';
            this.addExpandCssClassOM = 'fa fa-plus';
        } else {
            this.showOtherMasters = element;
            this.addExpandCssClassOM = 'fa fa-minus';
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('currentUser');
    }
}

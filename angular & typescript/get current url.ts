/**
* Router's path in URL
*/
private path: string;

/**
* Subscription to url events
*/
private routerSub: Subscription;

constructor(private router: Router) {
}

public ngOnInit() {
/**
 * Get current url on init
 */
this.path = this.router.url;
this.getActiveRoutes(this.path);

/**
 * Get url on route change
 */
this.routerSub = this.router.events.subscribe((event) => {
  if (event instanceof NavigationEnd) {
	this.path = event.url;
	this.getActiveRoutes(this.path);
  }
});
}

private getActiveRoutes(path: string) {
const pathReduced = path.split('/')[1];
this.isRouteActive.portfolio = (pathReduced === ROUTE_PORTFOLIO || pathReduced === '');
this.isRouteActive.transfer = (pathReduced === ROUTE_TRANSFER || pathReduced === ROUTE_TRANSFER_SEND || pathReduced === ROUTE_TRANSFER_RECEIVE);
}

ngOnDestroy() {
this.routerSub.unsubscribe();
}
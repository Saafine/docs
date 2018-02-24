// Example:
// https://coryrylan.com/blog/custom-preloading-and-lazy-loading-strategies-with-angular
// Loading strategies
// -------------------

// Example 1:
// DEPRECATED 
// Loading modules, lazily and eagerly
// -------------------
// # app.routes.ts (parent)
export const ROUTE_LOGIN = 'login';
export const ROUTES: Routes = [
  { path: ROUTE_LOGIN, component: LoginComponent, canActivate: [LoginGuard] },
  // { path: '', loadChildren: './views/layout.module#LayoutModule', canActivate: [AuthGuard] }, // loading module lazily (creates a chunk bundle)
  { path: '', component: LayoutModule, canActivate: [AuthGuard] }, // loading module eagerly, requires LayoutModule to have RouteModuleExported (A), doesn't create a chunk bundle
  { path: '**', redirectTo: '' },
];

// # app.module.ts (parent)
@NgModule({
	...
  imports: [
	...
    LayoutModule,
	...
  ],

// # layout.routes.ts (module)
// (A)
@NgModule({
...
  exports: [RouterModule]
...
})
// ---------------------------------------------------------

// Example 2:
// Loading children routes
// -------------------
export const ROUTE_TRANSACTIONS = 'transactions';
export const ROUTE_MANAGEMENT = 'management';

export const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: ViewsSummaryComponent },
      { path: ROUTE_TRANSACTIONS, component: ViewsTransactionsComponent },
      { path: ROUTE_LOGS, loadChildren: './logs/logs.module#LogsModule' }
    ],
  },
];
// ---------------------------------------------------------
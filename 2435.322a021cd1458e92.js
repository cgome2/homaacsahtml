"use strict";(self.webpackChunkfury=self.webpackChunkfury||[]).push([[2435],{94927:(J,h,i)=>{i.d(h,{n:()=>M});var n=i(5e3),m=i(23753),d=i(75778),_=i(80013),y=i(69808),T=i(92181),v=i(30277),A=i(25245),b=i(47423),x=i(77446),c=i(93075);const P=["filter"];function E(u,g){if(1&u&&(n.TgZ(0,"div",5),n.TgZ(1,"div",6),n._uU(2),n.qZA(),n.TgZ(3,"div",7),n.TgZ(4,"mat-icon",8),n._uU(5,"search"),n.qZA(),n._UZ(6,"input",9,10),n.qZA(),n.TgZ(8,"button",11),n.TgZ(9,"mat-icon"),n._uU(10,"filter_list"),n.qZA(),n.qZA(),n.Hsn(11,1),n.qZA()),2&u){const s=n.oxw(),p=n.MAs(3);n.xp6(2),n.Oqu(s.name),n.xp6(6),n.Q6J("matMenuTriggerFor",p)}}function D(u,g){if(1&u){const s=n.EpF();n.TgZ(0,"button",12),n.NdJ("click",function(f){const C=n.CHM(s).$implicit;return n.oxw().toggleColumnVisibility(C,f)}),n.TgZ(1,"mat-checkbox",13,14),n.NdJ("ngModelChange",function(f){return n.CHM(s).$implicit.visible=f})("click",function(f){return f.stopPropagation()}),n._uU(3),n.qZA(),n.qZA()}if(2&u){const s=g.$implicit;n.xp6(1),n.Q6J("ngModel",s.visible),n.xp6(2),n.hij(" ",s.name," ")}}const O=["*",[["",8,"actions"]]],t=["*",".actions"];let M=(()=>{class u{constructor(){this.filterChange=new n.vpe}ngAfterViewInit(){this.hideHeader||(0,m.R)(this.filter.nativeElement,"keyup").pipe((0,d.x)(),(0,_.b)(150)).subscribe(()=>{this.filterChange.emit(this.filter.nativeElement.value)})}toggleColumnVisibility(s,p){p.stopPropagation(),p.stopImmediatePropagation(),s.visible=!s.visible}}return u.\u0275fac=function(s){return new(s||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["fury-list"]],viewQuery:function(s,p){if(1&s&&n.Gf(P,5),2&s){let f;n.iGM(f=n.CRH())&&(p.filter=f.first)}},inputs:{name:"name",columns:"columns",hideHeader:"hideHeader"},outputs:{filterChange:"filterChange"},ngContentSelectors:t,decls:6,vars:2,consts:[[1,"fury-list-table"],["class","fury-list-header","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",4,"ngIf"],["yPosition","below","xPosition","before"],["columnFilter","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",1,"fury-list-header"],[1,"fury-list-name"],["fxLayout","row","fxLayoutAlign","start center","fxFlex",""],[1,"fury-filter-input-icon"],["fxFlex","","placeholder","Search\u2026",1,"fury-filter-input"],["filter",""],["type","button","mat-icon-button","",1,"fury-column-filter",3,"matMenuTriggerFor"],[1,"checkbox-item","mat-menu-item",3,"click"],[1,"checkbox",3,"ngModel","ngModelChange","click"],["checkbox",""]],template:function(s,p){1&s&&(n.F$t(O),n.TgZ(0,"div",0),n.YNc(1,E,12,2,"div",1),n.TgZ(2,"mat-menu",2,3),n.YNc(4,D,4,2,"button",4),n.qZA(),n.Hsn(5),n.qZA()),2&s&&(n.xp6(1),n.Q6J("ngIf",!p.hideHeader),n.xp6(3),n.Q6J("ngForOf",p.columns))},directives:[y.O5,T.VK,y.sg,v.xw,v.Wh,v.SQ,v.yH,A.Hw,b.lW,T.p6,x.oG,c.JJ,c.On],styles:[".fury-list-table{display:flex;flex-direction:column}.fury-list-table .fury-list-header{padding-left:24px;padding-right:24px;height:64px;border-top-left-radius:8px;border-top-right-radius:8px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header{height:auto;padding-top:24px;padding-bottom:24px}}.fury-list-table .fury-list-header .fury-list-name{font-size:20px;line-height:32px;font-weight:500;padding-right:24px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header .fury-list-name{border-right:none}}.fury-list-table .fury-list-header .fury-filter-input{font-size:16px;line-height:1.125;border:none;height:32px}.fury-list-table .fury-list-header .fury-filter-input:focus{outline:none}.fury-list-table .fury-list-header .fury-filter-input-icon{width:1.2em;vertical-align:bottom;height:22px;font-size:22px;margin-right:8px}.fury-list-table table{width:100%}.fury-list-table .mat-header-row .mat-header-cell .mat-sort-header-button{text-transform:uppercase}.fury-list-table .mat-cell.image-cell,.fury-list-table .mat-header-cell.image-cell{flex:0;width:59px}.fury-list-table .mat-cell.image-cell img,.fury-list-table .mat-header-cell.image-cell img{border-radius:50%;height:35px;width:35px;margin-right:24px;vertical-align:middle}.fury-list-table .mat-cell,.fury-list-table .mat-header-cell{white-space:nowrap;padding-left:12px;padding-right:12px}.fury-list-table .mat-cell.actions-cell,.fury-list-table .mat-header-cell.actions-cell{flex:0;width:40px;overflow:visible}.fury-list-table .paginator{display:block}\n"],encapsulation:2}),u})()},19165:(J,h,i)=>{i.d(h,{d:()=>m});var n=i(5e3);let m=(()=>{class d{constructor(){}}return d.\u0275fac=function(y){return new(y||d)},d.\u0275dir=n.lG2({type:d,selectors:[["","furyPageLayoutContent",""],["fury-page-layout-content"]],hostAttrs:[1,"fury-page-layout-content"]}),d})()},2435:(J,h,i)=>{i.r(h),i.d(h,{EventosModule:()=>st});var n=i(69808),m=i(93075),d=i(61264),_=i(4940),y=i(7057),T=i(72467),v=i(3299),A=i(70655),b=i(86087),x=i(84847),c=i(32075),P=i(96831),E=i(92198),D=i(88914),O=i(14499),t=i(5e3),M=i(40520),u=i(98545),g=i(33344);let s=(()=>{class o{constructor(e,r){this.http=e,this._tokenStorageService=r}getHeaders(){var e=new M.WM,r=this._tokenStorageService.getToken();return e.set("token",r||"{}")}getAll(e){var r=this.getHeaders();return this.http.get(u._.settings.apiServer.API_URL_BASE+u._.settings.apiServer.EVENTS+(e||""),{headers:r})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(M.eN),t.LFG(g.i))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=i(59410),f=i(57261),S=i(39762),C=i(53580),N=i(38932),I=i(19165),Q=i(94927),G=i(47423),R=i(25245),L=i(30277),w=i(67322),H=i(74107),Y=i(90508),F=i(92181);function B(o,a){if(1&o&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function W(o,a){if(1&o&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.severity)}}function $(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"form",18),t.TgZ(1,"div",19),t.TgZ(2,"div",20),t.TgZ(3,"mat-form-field",21),t.TgZ(4,"mat-label"),t._uU(5,"Tipo de evento:"),t.qZA(),t.TgZ(6,"mat-select",22),t.NdJ("selectionChange",function(l){return t.CHM(e),t.oxw().newFilter(l)}),t.TgZ(7,"mat-option"),t._uU(8,"Seleccione"),t.qZA(),t.YNc(9,B,2,2,"mat-option",23),t.qZA(),t.qZA(),t.TgZ(10,"mat-form-field",21),t.TgZ(11,"mat-label"),t._uU(12,"Severidad:"),t.qZA(),t.TgZ(13,"mat-select",24),t.NdJ("selectionChange",function(l){return t.CHM(e),t.oxw().newFilter(l)}),t.TgZ(14,"mat-option"),t._uU(15,"Seleccione"),t.qZA(),t.YNc(16,W,2,2,"mat-option",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.filterFormGroup),t.xp6(9),t.Q6J("ngForOf",e.event_types),t.xp6(7),t.Q6J("ngForOf",e.severities)}}function K(o,a){1&o&&(t.TgZ(0,"th",26),t._uU(1,"Severidad"),t.qZA())}function z(o,a){if(1&o&&(t.TgZ(0,"td",27),t._UZ(1,"img",28),t.qZA()),2&o){const e=a.$implicit,r=t.oxw();t.xp6(1),t.s9C("src",r.getLabel("Severidad",e.severity),t.LSH)}}function k(o,a){if(1&o&&(t.TgZ(0,"th",33),t._uU(1),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.name,"")}}function j(o,a){if(1&o&&(t.TgZ(0,"td",34),t._uU(1),t.qZA()),2&o){const e=a.$implicit,r=t.oxw(2).$implicit,l=t.oxw();t.xp6(1),t.Oqu(l.getLabel(r.name,e[r.property]))}}function X(o,a){if(1&o&&(t.ynx(0,30),t.YNc(1,k,2,1,"th",31),t.YNc(2,j,2,1,"td",32),t.BQk()),2&o){const e=t.oxw().$implicit;t.Q6J("matColumnDef",e.property)}}function V(o,a){if(1&o&&(t.ynx(0),t.YNc(1,X,3,1,"ng-container",29),t.BQk()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("ngIf",e.isModelProperty&&"severity"!==e.property)}}function q(o,a){1&o&&t._UZ(0,"th",35)}function tt(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",36),t.TgZ(1,"button",37),t.NdJ("click",function(l){return l.stopPropagation()}),t.TgZ(2,"mat-icon"),t._uU(3,"more_horiz"),t.qZA(),t.qZA(),t.TgZ(4,"mat-menu",38,39),t.TgZ(6,"button",40),t.NdJ("click",function(){const Z=t.CHM(e).$implicit;return t.oxw().Ack(Z)}),t.TgZ(7,"span"),t._uU(8,"Revisar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",e)}}function et(o,a){1&o&&t._UZ(0,"tr",41)}function nt(o,a){1&o&&t._UZ(0,"tr",42)}const ot=function(){return["Reportes"]},it=[{path:"",component:(()=>{class o{constructor(e,r,l){this._eventsService=e,this._exporterService=r,this.snackbar=l,this.subject$=new P.t(1),this.data$=this.subject$.asObservable(),this.filtro="?type=&severity=",this.event_types=["LOGIN","LOGOUT","SYNC"],this.severities=[{id:0,severity:"info"},{id:1,severity:"warning"},{id:2,severity:"error"},{id:-1,severity:"unknown"}],this.columns=[{name:"Severidad",property:"severity",visible:!0,isModelProperty:!0},{name:"Id",property:"event_id",visible:!0,isModelProperty:!0},{name:"Fecha",property:"event_date",visible:!0,isModelProperty:!0},{name:"Hora",property:"event_time",visible:!0,isModelProperty:!0},{name:"Usuario",property:"accountable_user",visible:!0,isModelProperty:!0},{name:"Tipo",property:"type",visible:!0,isModelProperty:!0},{name:"Descripci\xf3n",property:"description",visible:!0,isModelProperty:!0},{name:"Origen",property:"origin",visible:!0,isModelProperty:!0},{name:"Estaci\xf3n",property:"site_code",visible:!0,isModelProperty:!0},{name:"Acciones",property:"actions",visible:!0}],this.pageSize=100,this.filterFormGroup=new m.cw({type:new m.NI,severity:new m.NI,from_date:new m.NI,to_date:new m.NI})}getLabel(e,r){if(null!=e)return"Severidad"===e?0===r?"../../../../assets/img/info.png":1===r?"../../../../assets/img/warning.png":2===r?"../../../../assets/img/error.png":"../../../../assets/img/unknown.png":r}get visibleColumns(){return this.columns.filter(e=>e.visible).map(e=>e.property)}getData(){this._eventsService.getAll(this.filtro).subscribe(e=>{this.events=e,this.dataSource=new c.by(e),this.dataSource=new c.by(this.events),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator},e=>{this.snackbar.open(e,null,{duration:5e3,panelClass:["red-snackbar"]}),console.log(e)})}ngOnInit(){return(0,A.mG)(this,void 0,void 0,function*(){this.dataSource=new c.by,this.getData(),this.data$.pipe((0,E.h)(e=>!!e)).subscribe(e=>{this.events=e,this.dataSource.data=e})})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}onFilterChange(e){!this.dataSource||(e=(e=e.trim()).toLowerCase(),this.dataSource.filter=e)}newFilter(e){this.filtro="?type="+("mat-select-type"===e.source.id?e.value:this.filterFormGroup.controls.type.value?this.filterFormGroup.controls.type.value:"")+"&severity="+("mat-select-severity"===e.source.id?e.value:this.filterFormGroup.controls.severity.value?this.filterFormGroup.controls.severity.value:""),this.dataSource=new c.by,this.getData(),this.data$.pipe((0,E.h)(r=>!!r)).subscribe(r=>{this.events=r,this.dataSource.data=r})}Ack(e){this.snackbar.open("To be implemented very soon",null,{duration:5e3,panelClass:["green-snackbar"]})}excelMe(){this._exporterService.exportToExcel(this.dataSource.filteredData,"events")}ngOnDestroy(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s),t.Y36(p.M),t.Y36(f.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["eventos-table"]],viewQuery:function(e,r){if(1&e&&(t.Gf(b.NW,7),t.Gf(x.YE,7)),2&e){let l;t.iGM(l=t.CRH())&&(r.paginator=l.first),t.iGM(l=t.CRH())&&(r.sort=l.first)}},inputs:{columns:"columns"},decls:24,vars:9,consts:[[1,"card"],["current","Visor de eventos",3,"crumbs"],[3,"formGroup",4,"ngIf"],["name","Eventos",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["svgIcon","excel"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","severity"],["class","image-icon","mat-header-cell","",4,"matHeaderCellDef"],["class","image-icon","mat-cell","",4,"matCellDef"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],[3,"formGroup"],["fxLayout","column",1,"content"],["fxLayout","row","fxLayoutGap","8px",1,"content"],["appearance","outline","fxFlex","auto",1,"field"],["formControlName","type","id","'mat-select-type'",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","severity","id","'mat-select-severity'",3,"selectionChange"],[3,"value"],["mat-header-cell","",1,"image-icon"],["mat-cell","",1,"image-icon"],[3,"src"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["mat-cell","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,r){1&e&&(t.TgZ(0,"fury-page-layout",0),t.TgZ(1,"fury-page-layout-header"),t._UZ(2,"fury-breadcrumbs",1),t.qZA(),t.TgZ(3,"fury-page-layout-content"),t.TgZ(4,"div",0),t.YNc(5,$,17,3,"form",2),t.qZA(),t.TgZ(6,"fury-list",3),t.NdJ("filterChange",function(Z){return r.onFilterChange(Z)}),t.TgZ(7,"div",4),t.TgZ(8,"button",5),t.NdJ("click",function(){return r.Ack("hello")}),t.TgZ(9,"mat-icon"),t._uU(10,"add"),t.qZA(),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){return r.excelMe()}),t._UZ(12,"mat-icon",6),t.qZA(),t.qZA(),t.TgZ(13,"table",7),t.ynx(14,8),t.YNc(15,K,2,0,"th",9),t.YNc(16,z,2,1,"td",10),t.BQk(),t.YNc(17,V,2,1,"ng-container",11),t.ynx(18,12),t.YNc(19,q,1,0,"th",13),t.YNc(20,tt,9,1,"td",14),t.BQk(),t.YNc(21,et,1,0,"tr",15),t.YNc(22,nt,1,0,"tr",16),t.qZA(),t._UZ(23,"mat-paginator",17),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("crumbs",t.DdM(8,ot)),t.xp6(3),t.Q6J("ngIf",r.filterFormGroup),t.xp6(1),t.Q6J("columns",r.columns),t.xp6(7),t.Q6J("dataSource",r.dataSource),t.xp6(4),t.Q6J("ngForOf",r.columns),t.xp6(4),t.Q6J("matHeaderRowDef",r.visibleColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.visibleColumns),t.xp6(1),t.Q6J("pageSize",r.pageSize))},directives:[S.N,C.U,N.n,I.d,n.O5,Q.n,G.lW,R.Hw,c.BZ,x.YE,c.w1,c.fO,c.Dz,n.sg,c.as,c.nj,b.NW,m._Y,m.JL,m.sg,L.xw,L.SQ,w.KE,L.yH,w.hX,H.gD,m.JJ,m.u,Y.ey,c.ge,c.ev,x.nU,F.p6,F.VK,F.OP,c.XQ,c.Gk],styles:[".clickable[_ngcontent-%COMP%]{cursor:pointer}.image-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:30px;width:30px;margin-right:24px;vertical-align:middle}.actions[_ngcontent-%COMP%]   .create[_ngcontent-%COMP%]{margin-right:8px}"],data:{animation:[D.M,O.X]}}),o})()}];let rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[v.Bz.forChild(it)],v.Bz]}),o})();var U=i(70024),at=i(59429);let st=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[n.ez,rt,m.u5,m.UX,y.q,T.Z,U.EC,U.Yy,U.K,at.kx,_.p,d.J]]}),o})()}}]);
"use strict";(self.webpackChunkfury=self.webpackChunkfury||[]).push([[2736],{88914:(b,m,a)=>{a.d(m,{M:()=>i});var t=a(41777);const i=(0,t.X$)("fadeInRight",[(0,t.eR)(":enter",[(0,t.oB)({transform:"translateX(-2vw)",opacity:0}),(0,t.jt)("0.4s cubic-bezier(0.35, 0, 0.25, 1)",(0,t.oB)({transform:"translateX(0)",opacity:1}))])])},14499:(b,m,a)=>{a.d(m,{X:()=>i});var t=a(41777);const i=(0,t.X$)("fadeInUp",[(0,t.eR)(":enter",[(0,t.oB)({transform:"translateY(3vh)",opacity:0}),(0,t.jt)("400ms cubic-bezier(0.35, 0, 0.25, 1)",(0,t.oB)({transform:"translateY(0)",opacity:1}))])])},37425:(b,m,a)=>{a.d(m,{K:()=>i});var t=a(41777);const i=(0,t.X$)("scaleIn",[(0,t.eR)(":enter",[(0,t.oB)({transform:"scale(0)"}),(0,t.jt)("400ms cubic-bezier(0.35, 0, 0.25, 1)",(0,t.oB)({transform:"scale(1)"}))])])},38932:(b,m,a)=>{a.d(m,{n:()=>d});var t=a(5e3),i=a(30277),u=a(3299),f=a(69808),h=a(25245);function g(c,p){if(1&c&&(t.TgZ(0,"div",7),t.TgZ(1,"mat-icon",5),t._uU(2,"chevron_right"),t.qZA(),t.TgZ(3,"div",6),t._uU(4),t.qZA(),t.qZA()),2&c){const x=p.$implicit;t.xp6(4),t.Oqu(x)}}const _=function(){return["/"]};let d=(()=>{class c{constructor(){this.crumbs=[]}ngOnInit(){}}return c.\u0275fac=function(x){return new(x||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["fury-breadcrumbs"]],inputs:{current:"current",crumbs:"crumbs"},decls:11,vars:5,consts:[[1,"title"],["fxLayout","row","fxLayoutAlign","start center",1,"crumbs"],[1,"crumb","home",3,"routerLink"],["class","crumb","fxLayout","row","fxLayoutAlign","start center",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb","current"],[1,"chevron"],[1,"link"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb"]],template:function(x,A){1&x&&(t.TgZ(0,"div",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1),t.TgZ(3,"a",2),t._uU(4,"Home"),t.qZA(),t.YNc(5,g,5,1,"div",3),t.TgZ(6,"div",4),t.TgZ(7,"mat-icon",5),t._uU(8,"chevron_right"),t.qZA(),t.TgZ(9,"div",6),t._uU(10),t.qZA(),t.qZA(),t.qZA()),2&x&&(t.xp6(1),t.Oqu(A.current),t.xp6(2),t.Q6J("routerLink",t.DdM(4,_)),t.xp6(2),t.Q6J("ngForOf",A.crumbs),t.xp6(5),t.Oqu(A.current))},directives:[i.xw,i.Wh,u.yS,f.sg,h.Hw],styles:["[_nghost-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font:var(--font-title);font-weight:400}.crumb[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]{text-decoration:none;transition:color .4s cubic-bezier(.25,.8,.25,1);font:var(--font-body-1)}.link[_ngcontent-%COMP%]{cursor:pointer}.chevron[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px;margin-left:6px;margin-right:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}"]}),c})()},94927:(b,m,a)=>{a.d(m,{n:()=>R});var t=a(5e3),i=a(23753),u=a(75778),f=a(80013),h=a(69808),g=a(92181),_=a(30277),d=a(25245),c=a(47423),p=a(77446),x=a(93075);const A=["filter"];function O(T,e){if(1&T&&(t.TgZ(0,"div",5),t.TgZ(1,"div",6),t._uU(2),t.qZA(),t.TgZ(3,"div",7),t.TgZ(4,"mat-icon",8),t._uU(5,"search"),t.qZA(),t._UZ(6,"input",9,10),t.qZA(),t.TgZ(8,"button",11),t.TgZ(9,"mat-icon"),t._uU(10,"filter_list"),t.qZA(),t.qZA(),t.Hsn(11,1),t.qZA()),2&T){const M=t.oxw(),y=t.MAs(3);t.xp6(2),t.Oqu(M.name),t.xp6(6),t.Q6J("matMenuTriggerFor",y)}}function Z(T,e){if(1&T){const M=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(C){const E=t.CHM(M).$implicit;return t.oxw().toggleColumnVisibility(E,C)}),t.TgZ(1,"mat-checkbox",13,14),t.NdJ("ngModelChange",function(C){return t.CHM(M).$implicit.visible=C})("click",function(C){return C.stopPropagation()}),t._uU(3),t.qZA(),t.qZA()}if(2&T){const M=e.$implicit;t.xp6(1),t.Q6J("ngModel",M.visible),t.xp6(2),t.hij(" ",M.name," ")}}const L=["*",[["",8,"actions"]]],U=["*",".actions"];let R=(()=>{class T{constructor(){this.filterChange=new t.vpe}ngAfterViewInit(){this.hideHeader||(0,i.R)(this.filter.nativeElement,"keyup").pipe((0,u.x)(),(0,f.b)(150)).subscribe(()=>{this.filterChange.emit(this.filter.nativeElement.value)})}toggleColumnVisibility(M,y){y.stopPropagation(),y.stopImmediatePropagation(),M.visible=!M.visible}}return T.\u0275fac=function(M){return new(M||T)},T.\u0275cmp=t.Xpm({type:T,selectors:[["fury-list"]],viewQuery:function(M,y){if(1&M&&t.Gf(A,5),2&M){let C;t.iGM(C=t.CRH())&&(y.filter=C.first)}},inputs:{name:"name",columns:"columns",hideHeader:"hideHeader"},outputs:{filterChange:"filterChange"},ngContentSelectors:U,decls:6,vars:2,consts:[[1,"fury-list-table"],["class","fury-list-header","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",4,"ngIf"],["yPosition","below","xPosition","before"],["columnFilter","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",1,"fury-list-header"],[1,"fury-list-name"],["fxLayout","row","fxLayoutAlign","start center","fxFlex",""],[1,"fury-filter-input-icon"],["fxFlex","","placeholder","Search\u2026",1,"fury-filter-input"],["filter",""],["type","button","mat-icon-button","",1,"fury-column-filter",3,"matMenuTriggerFor"],[1,"checkbox-item","mat-menu-item",3,"click"],[1,"checkbox",3,"ngModel","ngModelChange","click"],["checkbox",""]],template:function(M,y){1&M&&(t.F$t(L),t.TgZ(0,"div",0),t.YNc(1,O,12,2,"div",1),t.TgZ(2,"mat-menu",2,3),t.YNc(4,Z,4,2,"button",4),t.qZA(),t.Hsn(5),t.qZA()),2&M&&(t.xp6(1),t.Q6J("ngIf",!y.hideHeader),t.xp6(3),t.Q6J("ngForOf",y.columns))},directives:[h.O5,g.VK,h.sg,_.xw,_.Wh,_.SQ,_.yH,d.Hw,c.lW,g.p6,p.oG,x.JJ,x.On],styles:[".fury-list-table{display:flex;flex-direction:column}.fury-list-table .fury-list-header{padding-left:24px;padding-right:24px;height:64px;border-top-left-radius:8px;border-top-right-radius:8px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header{height:auto;padding-top:24px;padding-bottom:24px}}.fury-list-table .fury-list-header .fury-list-name{font-size:20px;line-height:32px;font-weight:500;padding-right:24px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header .fury-list-name{border-right:none}}.fury-list-table .fury-list-header .fury-filter-input{font-size:16px;line-height:1.125;border:none;height:32px}.fury-list-table .fury-list-header .fury-filter-input:focus{outline:none}.fury-list-table .fury-list-header .fury-filter-input-icon{width:1.2em;vertical-align:bottom;height:22px;font-size:22px;margin-right:8px}.fury-list-table table{width:100%}.fury-list-table .mat-header-row .mat-header-cell .mat-sort-header-button{text-transform:uppercase}.fury-list-table .mat-cell.image-cell,.fury-list-table .mat-header-cell.image-cell{flex:0;width:59px}.fury-list-table .mat-cell.image-cell img,.fury-list-table .mat-header-cell.image-cell img{border-radius:50%;height:35px;width:35px;margin-right:24px;vertical-align:middle}.fury-list-table .mat-cell,.fury-list-table .mat-header-cell{white-space:nowrap;padding-left:12px;padding-right:12px}.fury-list-table .mat-cell.actions-cell,.fury-list-table .mat-header-cell.actions-cell{flex:0;width:40px;overflow:visible}.fury-list-table .paginator{display:block}\n"],encapsulation:2}),T})()},4940:(b,m,a)=>{a.d(m,{p:()=>h});var t=a(69808),i=a(93075),u=a(7057),f=a(5e3);let h=(()=>{class g{}return g.\u0275fac=function(d){return new(d||g)},g.\u0275mod=f.oAB({type:g}),g.\u0275inj=f.cJS({imports:[[t.ez,u.q,i.u5]]}),g})()},19165:(b,m,a)=>{a.d(m,{d:()=>i});var t=a(5e3);let i=(()=>{class u{constructor(){}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275dir=t.lG2({type:u,selectors:[["","furyPageLayoutContent",""],["fury-page-layout-content"]],hostAttrs:[1,"fury-page-layout-content"]}),u})()},53580:(b,m,a)=>{a.d(m,{U:()=>i});var t=a(5e3);let i=(()=>{class u{constructor(){}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275dir=t.lG2({type:u,selectors:[["","furyPageLayoutHeader",""],["fury-page-layout-header"]],hostAttrs:[1,"fury-page-layout-header"]}),u})()},39762:(b,m,a)=>{a.d(m,{N:()=>i});var t=a(5e3);let i=(()=>{class u{constructor(){this.mode="simple"}get isCard(){return"card"===this.mode}get isSimple(){return"simple"===this.mode}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275dir=t.lG2({type:u,selectors:[["","furyPageLayout",""],["fury-page-layout"]],hostAttrs:[1,"fury-page-layout"],hostVars:4,hostBindings:function(h,g){2&h&&t.ekj("fury-page-layout-card",g.isCard)("fury-page-layout-simple",g.isSimple)},inputs:{mode:"mode"}}),u})()},59968:(b,m,a)=>{a.d(m,{i:()=>i});var t=a(5e3);let i=(()=>{class u{constructor(){}}return u.\u0275fac=function(h){return new(h||u)},u.\u0275dir=t.lG2({type:u,selectors:[["","furyPage",""],["fury-page"]],hostAttrs:[1,"fury-page"]}),u})()},82736:(b,m,a)=>{a.r(m),a.d(m,{ModelMaintenanceTypesTableModule:()=>be});var t=a(69808),i=a(93075),u=a(61264),f=a(4940),h=a(7057),g=a(72467),_=a(3299),d=a(86087),c=a(84847),p=a(32075),x=a(96831),A=a(92198),O=a(70655),Z=a(48966),L=a(88914),U=a(14499),R=a(37425);class T{constructor(s){this.id=s&&s.id||null,this.model_id=s&&s.model_id||null,this.type_name=s&&s.type_name||null,this.description=s&&s.description||null,this.type=s&&s.type||null,this.periodicity=s&&s.periodicity||null,this.threshold=s&&s.threshold||null,this.timestamp=s&&s.timestamp||null,this.user_id=s&&s.user_id||null,this.status=s&&s.status||null}}var e=a(5e3),M=a(57261),y=a(17846),C=a(48024),F=a(59968),E=a(36551),D=a(25245),S=a(30277),I=a(67322),J=a(74107),H=a(77531),Q=a(79814),K=a(32368),Y=a(4834),B=a(47423),k=a(90508);const q=["modelsModalForm"];function z(o,s){if(1&o&&(e.TgZ(0,"mat-option",26),e._uU(1),e.qZA()),2&o){const n=s.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.NAME)}}function $(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Se\xf1alar con qu\xe9 nombre ser\xe1 identificado el tipo de mantenimiento."),e.qZA())}function G(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1,"Descripci\xf3n breve del tipo de mantenimiento."),e.qZA())}function j(o,s){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.modelMaintenanceTypesModalForm.get("threshold").getError("numeric"))}}function X(o,s){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Oqu(n.modelMaintenanceTypesModalForm.get("periodicity").getError("numeric"))}}let w=(()=>{class o{constructor(n,r,l,v,P,xe){this.data=n,this.dialogRef=r,this.snackbar=l,this._modelsService=v,this._modelMaintenanceTypesService=P,this.dialogAddItem=xe,this.title="Tipo de Mantenimiento",this.active_label="Activado",this.models=[],this.modelMaintenanceType=new T,this.type_label="Kil\xf3metros",r.disableClose=!0,this.modelMaintenanceTypesModalForm=new i.cw({id:new i.NI(""),model_id:new i.NI("",[i.kI.required]),type_name:new i.NI("",[i.kI.required]),description:new i.NI(""),type:new i.NI("1",[i.kI.required]),periodicity:new i.NI(0,[W]),threshold:new i.NI(0,[W]),timestamp:new i.NI(""),user_id:new i.NI(""),status:new i.NI(!0,[i.kI.required])})}ngOnInit(){return(0,O.mG)(this,void 0,void 0,function*(){console.log("Hachina",this.data),this.models=yield this.getModels(),this.data&&(this.modelMaintenanceType=this.data,this.modelMaintenanceTypesModalForm.setValue({id:this.modelMaintenanceType.id,model_id:this.modelMaintenanceType.model_id,type_name:this.modelMaintenanceType.type_name,description:this.modelMaintenanceType.description,type:this.modelMaintenanceType.type.toString(),periodicity:this.modelMaintenanceType.periodicity,threshold:this.modelMaintenanceType.threshold,timestamp:"",user_id:"",status:2==this.modelMaintenanceType.status}))})}submit(){this.modelMaintenanceType.id=this.modelMaintenanceTypesModalForm.controls.id.value,this.modelMaintenanceType.model_id=this.modelMaintenanceTypesModalForm.controls.model_id.value,this.modelMaintenanceType.type_name=this.modelMaintenanceTypesModalForm.controls.type_name.value,this.modelMaintenanceType.description=this.modelMaintenanceTypesModalForm.controls.description.value,this.modelMaintenanceType.type=this.modelMaintenanceTypesModalForm.controls.type.value,this.modelMaintenanceType.periodicity=this.modelMaintenanceTypesModalForm.controls.periodicity.value,this.modelMaintenanceType.threshold=this.modelMaintenanceTypesModalForm.controls.threshold.value,this.modelMaintenanceType.status=this.modelMaintenanceTypesModalForm.controls.status.value?2:1,this.modelMaintenanceType.id>0?this.updateModelMaintenanceType():this.createModelMaintenanceType()}createModelMaintenanceType(){this._modelMaintenanceTypesService.createModelMaintenanceType(this.modelMaintenanceType).subscribe(n=>{console.log(n),this.modelMaintenanceType.id=n.id,this.snackbar.open(n.message,null,{duration:5e3,panelClass:["green-snackbar"]}),console.log("Model created",this.modelMaintenanceType),this.dialogRef.close(this.modelMaintenanceType)},n=>{this.snackbar.open(n.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}updateModelMaintenanceType(){this._modelMaintenanceTypesService.updateModelMaintenanceType(this.modelMaintenanceType).subscribe(n=>{this.snackbar.open(n.message,null,{duration:5e3,panelClass:["green-snackbar"]}),this.dialogRef.close(this.modelMaintenanceType)},n=>{this.snackbar.open(n.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}close(){this.dialogRef.close()}getModels(){return(0,O.mG)(this,void 0,void 0,function*(){return yield this._modelsService.getAllModels().toPromise()})}setActiveModelMaintenanceType(n){this.active_label=n.checked?"Activado":"Desactivado",this.modelMaintenanceType.status=n.checked?2:1}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(Z.WI),e.Y36(Z.so),e.Y36(M.ux),e.Y36(y.c),e.Y36(C.t),e.Y36(Z.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["fury-form-wizard"]],viewQuery:function(n,r){if(1&n&&e.Gf(q,5),2&n){let l;e.iGM(l=e.CRH())&&(r._focusMe=l.first)}},decls:61,vars:13,consts:[[1,"modal"],[1,"title"],["svgIcon","maintenance_service"],["fxLayout","column","fxLayoutAlign","start center"],[1,"card"],[3,"formGroup"],[1,"heading"],["fxLayout","column","fxLayoutGap","8px",1,"content",2,"margin-top","20px"],["fxFlex","auto","appearance","outline"],["formControlName","model_id"],[3,"value",4,"ngFor","ngForOf"],["rm-field","","fxFlex","auto","appearance","outline"],["formControlName","type_name","matInput","","required",""],[4,"ngIf"],["formControlName","description","matInput","","required",""],["fxLayout","column",1,"validation-block"],[1,"label-area"],["formControlName","type","fxFlex","auto","fxLayout.gt-lg","8px","color","primary"],["value","1",2,"width","200px","font-size","13px","padding","5px"],["value","2",2,"width","200px","font-size","13px","padding","5px"],["formControlName","threshold","matInput","","type","number","required",""],["formControlName","periodicity","matInput","","type","number","required",""],["color","primary","formControlName","status",3,"change"],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","24px",2,"margin-top","20px"],["color","primary","mat-raised-button","",3,"click"],["color","primary","mat-raised-button","",3,"disabled","click"],[3,"value"]],template:function(n,r){1&n&&(e.TgZ(0,"fury-page",0),e.TgZ(1,"fury-title",1),e._UZ(2,"mat-icon",2),e.TgZ(3,"span"),e._uU(4,"Tipos de mantenimiento"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"form",5),e.TgZ(8,"div",6),e._uU(9,"Indicar propiedades identificadoras del tipo de mantenimiento"),e.qZA(),e.TgZ(10,"div",7),e.TgZ(11,"mat-form-field",8),e.TgZ(12,"mat-label"),e._uU(13,"Modelo:"),e.qZA(),e.TgZ(14,"mat-select",9),e.YNc(15,z,2,2,"mat-option",10),e.qZA(),e.qZA(),e.TgZ(16,"mat-form-field",11),e.TgZ(17,"mat-label"),e._uU(18,"Nombre del tipo de mantenimiento:"),e.qZA(),e._UZ(19,"input",12),e.TgZ(20,"mat-hint"),e._uU(21,"Se\xf1alar con qu\xe9 nombre ser\xe1 identificado el tipo de mantenimiento."),e.qZA(),e.YNc(22,$,2,0,"mat-error",13),e.qZA(),e.TgZ(23,"mat-form-field",8),e.TgZ(24,"mat-label"),e._uU(25,"Descripci\xf3n"),e.qZA(),e._UZ(26,"input",14),e.TgZ(27,"mat-hint"),e._uU(28,"Descripci\xf3n breve del tipo de mantenimiento."),e.qZA(),e.YNc(29,G,2,0,"mat-error",13),e.qZA(),e.TgZ(30,"div",15),e.TgZ(31,"mat-label",16),e._uU(32,"Tipo de control para mantenimiento:"),e.qZA(),e.TgZ(33,"mat-radio-group",17),e.TgZ(34,"mat-radio-button",18),e._uU(35,"Od\xf3metro (kms)"),e.qZA(),e.TgZ(36,"mat-radio-button",19),e._uU(37,"Hor\xf3metro (hs motor)"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(38,"mat-form-field",8),e.TgZ(39,"mat-label"),e._uU(40,"Umbral de tolerancia:"),e.qZA(),e._UZ(41,"input",20),e.TgZ(42,"mat-hint"),e._uU(43,"Cantidad de horas/kms de tolerancia antes de generar alerta."),e.qZA(),e.YNc(44,j,2,1,"mat-error",13),e.qZA(),e.TgZ(45,"mat-form-field",8),e.TgZ(46,"mat-label"),e._uU(47),e.qZA(),e._UZ(48,"input",21),e.TgZ(49,"mat-hint"),e._uU(50),e.qZA(),e.YNc(51,X,2,1,"mat-error",13),e.qZA(),e.TgZ(52,"mat-slide-toggle",22),e.NdJ("change",function(v){return r.setActiveModelMaintenanceType(v)}),e._uU(53),e.qZA(),e.qZA(),e.TgZ(54,"div",7),e._UZ(55,"mat-divider"),e.qZA(),e.TgZ(56,"div",23),e.TgZ(57,"button",24),e.NdJ("click",function(){return r.close()}),e._uU(58,"CANCELAR"),e.qZA(),e.TgZ(59,"button",25),e.NdJ("click",function(){return r.submit()}),e._uU(60,"GUARDAR"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("@scaleIn",void 0),e.xp6(1),e.Q6J("@fadeInRight",void 0),e.xp6(3),e.Q6J("@fadeInUp",void 0),e.xp6(1),e.Q6J("formGroup",r.modelMaintenanceTypesModalForm),e.xp6(8),e.Q6J("ngForOf",r.models),e.xp6(7),e.Q6J("ngIf",r.modelMaintenanceTypesModalForm.get("type_name").errors),e.xp6(7),e.Q6J("ngIf",r.modelMaintenanceTypesModalForm.get("description").errors),e.xp6(15),e.Q6J("ngIf",r.modelMaintenanceTypesModalForm.get("threshold").errors),e.xp6(3),e.hij("Periodicidad para realizar el mantenimiento en ",r.type_label,""),e.xp6(3),e.hij("Indicar cantidad de ",r.type_label," m\xe1ximos transcurridos antes de requerir mantenimiento."),e.xp6(1),e.Q6J("ngIf",r.modelMaintenanceTypesModalForm.get("periodicity").errors),e.xp6(2),e.Oqu(r.active_label),e.xp6(6),e.Q6J("disabled",r.modelMaintenanceTypesModalForm.invalid))},directives:[F.i,E.M,D.Hw,S.xw,S.Wh,i._Y,i.JL,i.sg,S.SQ,I.KE,S.yH,I.hX,J.gD,i.JJ,i.u,t.sg,i.Fj,H.Nt,i.Q7,I.bx,t.O5,Q.VQ,Q.U0,i.wV,K.Rr,Y.d,B.lW,k.ey,I.TO],styles:[".modal[_ngcontent-%COMP%]{padding:5px;width:450px;margin:0}.radio-box[_ngcontent-%COMP%]{border-style:solid;border-width:thin;border-radius:5px;border-color:#d3d3d3}.card[_ngcontent-%COMP%]{overflow:scroll;margin:8px;width:450px;max-height:450px;border-radius:8px;padding:24px;box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.card[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font:var(--font-title)}.card[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{font:var(--font-subheading-1)}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:12px 0}.card[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]{border-radius:10px;padding:10px;border:solid gray;border-top-width:thin;border-right-width:thin;border-bottom-width:thin;border-left-width:thin;width:100%}.card[_ngcontent-%COMP%]   .validation-block[_ngcontent-%COMP%]{border-radius:5px;padding:10px;border-style:solid;border-color:#d3d3d3;border-top-width:thin;border-right-width:thin;border-bottom-width:thin;border-left-width:thin}.card[_ngcontent-%COMP%]   .validation-block[_ngcontent-%COMP%]   .mat-radio-label[_ngcontent-%COMP%]{font-size:8px}.card[_ngcontent-%COMP%]   .validation-block[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:0;width:245px}.card[_ngcontent-%COMP%]   .indented-right[_ngcontent-%COMP%]{margin-left:40px}.card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:24px;padding:24px 8px 0}.label-area[_ngcontent-%COMP%]{position:unset;font-size:10px;font-family:Roboto;font-weight:400;color:#0009;background:white;z-index:1;width:45%;margin-left:0;margin-top:-20px}"],data:{animation:[U.X,L.M,R.K]}}),o})();function W(o){return""===o.value?null:void 0!==o.value&&(isNaN(o.value)||!/^([0]\.[0-9]{1,4}|[1-9]([0-9]*\.?[0-9]{1,2})?)$/.test(o.value))||o.value<=0?{notNumber:!0}:null}var V=a(24333),ee=a(39762),te=a(53580),ne=a(38932),ae=a(19165),oe=a(94927),N=a(92181);function ie(o,s){if(1&o&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&o){const n=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",n.name,"")}}function re(o,s){if(1&o&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&o){const n=s.$implicit,r=e.oxw(2).$implicit,l=e.oxw();e.xp6(1),e.hij(" ",l.getLabel(r.name,n[r.property])," ")}}function se(o,s){if(1&o&&(e.ynx(0,14),e.YNc(1,ie,2,1,"th",15),e.YNc(2,re,2,1,"td",16),e.BQk()),2&o){const n=e.oxw().$implicit;e.Q6J("matColumnDef",n.property)}}function le(o,s){if(1&o&&(e.ynx(0),e.YNc(1,se,3,1,"ng-container",13),e.BQk()),2&o){const n=s.$implicit;e.xp6(1),e.Q6J("ngIf",n.isModelProperty)}}function de(o,s){1&o&&e._UZ(0,"th",19)}function ce(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(n);const l=e.oxw().$implicit;return e.oxw().changeStatus(l)}),e.TgZ(1,"span"),e._uU(2,"Desactivar"),e.qZA(),e.qZA()}}function ue(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(n);const l=e.oxw().$implicit;return e.oxw().changeStatus(l)}),e.TgZ(1,"span"),e._uU(2,"Activar"),e.qZA(),e.qZA()}}function pe(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"td",20),e.TgZ(1,"button",21),e.NdJ("click",function(l){return l.stopPropagation()}),e.TgZ(2,"mat-icon"),e._uU(3,"more_horiz"),e.qZA(),e.qZA(),e.TgZ(4,"mat-menu",22,23),e.TgZ(6,"button",24),e.NdJ("click",function(){const v=e.CHM(n).$implicit;return e.oxw().updateModelMaintenanceType(v)}),e.TgZ(7,"span"),e._uU(8,"Editar"),e.qZA(),e.qZA(),e.YNc(9,ce,3,0,"button",25),e.YNc(10,ue,3,0,"button",25),e.qZA(),e.qZA()}if(2&o){const n=e.MAs(5),r=e.oxw();e.xp6(1),e.Q6J("matMenuTriggerFor",n),e.xp6(8),e.Q6J("ngIf",r.deletable),e.xp6(1),e.Q6J("ngIf",!r.deletable)}}function me(o,s){1&o&&e._UZ(0,"tr",26)}function ge(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"tr",27),e.NdJ("click",function(){const v=e.CHM(n).$implicit;return e.oxw().updateModelMaintenanceType(v)}),e.qZA()}}const he=function(){return["Tables"]},Me=[{path:"",component:(()=>{class o{constructor(n,r,l,v,P){this.dialog=n,this.snackbar=r,this._modelsService=l,this._usersService=v,this._modelMaintenanceTypesService=P,this.subject$=new x.t(1),this.data$=this.subject$.asObservable(),this.models=[],this.users=[],this.deletable=!0,this.columns=[{name:"Id",property:"id",visible:!0,isModelProperty:!0},{name:"Modelo",property:"model_id",visible:!0,isModelProperty:!0},{name:"Tipo de mantenimiento",property:"type_name",visible:!0,isModelProperty:!0},{name:"Descripci\xf3n",property:"description",visible:!1,isModelProperty:!0},{name:"Tipo de control",property:"type",visible:!0,isModelProperty:!0},{name:"Periodicidad",property:"periodicity",visible:!0,isModelProperty:!0},{name:"Umbral",property:"threshold",visible:!0,isModelProperty:!0},{name:"\xdaltima modificaci\xf3n",property:"timestamp",visible:!1,isModelProperty:!0},{name:"Usuario",property:"user_id",visible:!1,isModelProperty:!0},{name:"Estatus",property:"status",visible:!0,isModelProperty:!0},{name:"Acciones",property:"actions",visible:!0}],this.pageSize=10}getLabel(n,r){if(null!=n){if("Modelo"==n){for(var l=0;l<this.models.length;l++)if(r==this.models[l].id)return this.models[l].NAME;return"Modelo no definido"}if("Estatus"==n)return this.deletable=2==r,2==r?"Activo":"Desactivado";if("Tipo de control"==n)return 1==r?"Od\xf3metro":"Hor\xf3metro";if("Usuario"==n){for(l=0;l<this.users.length;l++)if(r==this.users[l].user_id)return this.users[l].name;return"Usuario no definido"}return r}}get visibleColumns(){return this.columns.filter(n=>n.visible).map(n=>n.property)}getData(){this._modelMaintenanceTypesService.getAllModelMaintenanceTypes().subscribe(n=>{this.modelMaintenanceTypes=n,this.dataSource=new p.by(n),this.dataSource=new p.by(this.modelMaintenanceTypes),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator},n=>{console.log(n)})}getModels(){this._modelsService.getAllModels().subscribe(n=>{this.models=n},n=>{console.log(n)})}getUsers(){this._usersService.getAll().subscribe(n=>{this.users=n},n=>{console.log(n)})}ngOnInit(){this.dataSource=new p.by,this.getData(),this.getModels(),this.getUsers(),this.data$.pipe((0,A.h)(n=>!!n)).subscribe(n=>{this.modelMaintenanceTypes=n,this.dataSource.data=n})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}createModelMaintenanceType(){this.dialog.open(w).afterClosed().subscribe(n=>{n&&(this.subject$.next(this.models),this.getData(),this.getModels(),this.getUsers(),this.data$.pipe((0,A.h)(r=>!!r)).subscribe(r=>{this.modelMaintenanceTypes=r,this.dataSource.data=r}))})}updateModelMaintenanceType(n){this.dialog.open(w,{data:n}).afterClosed().subscribe(r=>{r&&(this.subject$.next(this.models),this.getData(),this.getModels(),this.getUsers(),this.data$.pipe((0,A.h)(l=>!!l)).subscribe(l=>{this.modelMaintenanceTypes=l,this.dataSource.data=l}))})}changeStatus(n){n.status=2==n.status?0:2,this._modelMaintenanceTypesService.updateModelMaintenanceType(n).subscribe(r=>{this.snackbar.open(r.message,null,{duration:5e3,panelClass:["green-snackbar"]}),this.subject$.next(this.models),this.getData(),this.getModels(),this.getUsers(),this.data$.pipe((0,A.h)(l=>!!l)).subscribe(l=>{this.modelMaintenanceTypes=l,this.dataSource.data=l})},r=>{this.snackbar.open(r.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}onFilterChange(n){!this.dataSource||(n=(n=n.trim()).toLowerCase(),this.dataSource.filter=n)}ngOnDestroy(){}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(Z.uw),e.Y36(M.ux),e.Y36(y.c),e.Y36(V.f),e.Y36(C.t))},o.\u0275cmp=e.Xpm({type:o,selectors:[["model-maintenance-types-table"]],viewQuery:function(n,r){if(1&n&&(e.Gf(d.NW,7),e.Gf(c.YE,7)),2&n){let l;e.iGM(l=e.CRH())&&(r.paginator=l.first),e.iGM(l=e.CRH())&&(r.sort=l.first)}},inputs:{columns:"columns"},decls:17,vars:10,consts:[["mode","card"],["current","Tipos de Mantenimiento",3,"crumbs"],["name","Tipos de Mantenimiento",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["mat-table","","matSort","",3,"dataSource"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["mat-cell","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"fury-page-layout",0),e.TgZ(1,"fury-page-layout-header"),e._UZ(2,"fury-breadcrumbs",1),e.qZA(),e.TgZ(3,"fury-page-layout-content"),e.TgZ(4,"fury-list",2),e.NdJ("filterChange",function(v){return r.onFilterChange(v)}),e.TgZ(5,"div",3),e.TgZ(6,"button",4),e.NdJ("click",function(){return r.createModelMaintenanceType()}),e.TgZ(7,"mat-icon"),e._uU(8,"add"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"table",5),e.YNc(10,le,2,1,"ng-container",6),e.ynx(11,7),e.YNc(12,de,1,0,"th",8),e.YNc(13,pe,11,3,"td",9),e.BQk(),e.YNc(14,me,1,0,"tr",10),e.YNc(15,ge,1,0,"tr",11),e.qZA(),e._UZ(16,"mat-paginator",12),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(2),e.Q6J("@fadeInRight",void 0)("crumbs",e.DdM(9,he)),e.xp6(1),e.Q6J("@fadeInUp",void 0),e.xp6(1),e.Q6J("columns",r.columns),e.xp6(5),e.Q6J("dataSource",r.dataSource),e.xp6(1),e.Q6J("ngForOf",r.columns),e.xp6(4),e.Q6J("matHeaderRowDef",r.visibleColumns),e.xp6(1),e.Q6J("matRowDefColumns",r.visibleColumns),e.xp6(1),e.Q6J("pageSize",r.pageSize))},directives:[ee.N,te.U,ne.n,ae.d,oe.n,B.lW,D.Hw,p.BZ,c.YE,t.sg,p.w1,p.fO,p.Dz,p.as,p.nj,d.NW,t.O5,p.ge,c.nU,p.ev,N.p6,N.VK,N.OP,p.XQ,p.Gk],encapsulation:2,data:{animation:[L.M,U.X]}}),o})()}];let fe=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[_.Bz.forChild(Me)],_.Bz]}),o})();var _e=a(61620);const ye=[{path:"",component:w}];let Te=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[_.Bz.forChild(ye)],_.Bz]}),o})(),ve=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[t.ez,i.u5,i.UX,h.q,_e.o9,Z.Is,H.c,B.ot,D.Ps,J.LD,Te,g.Z]]}),o})(),be=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[t.ez,fe,i.u5,h.q,g.Z,ve,f.p,u.J]]}),o})()},17846:(b,m,a)=>{a.d(m,{c:()=>h});var t=a(40520),i=a(98545),u=a(5e3),f=a(33344);let h=(()=>{class g{constructor(d,c){this.http=d,this.tokenStorage=c}getHeaders(){var d=new t.WM,c=this.tokenStorage.getToken();return d.set("token",c||"{}")}getAllModels(){var d=this.getHeaders();return this.http.get(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.MODELS,{headers:d})}getAllModelsByCompanyId(d){var c=this.getHeaders();const p=(new t.LE).appendAll({company_id:d});return this.http.get(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.MODELS,{params:p,headers:c})}getAllModelsByAreas(d){var c=this.getHeaders();const p=(new t.LE).appendAll(d);return this.http.get(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.MODELS,{params:p,headers:c})}getModel(d){var c=this.getHeaders();return this.http.get(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.MODELS+"/"+d,{headers:c})}createModel(d){var c=this.getHeaders();return this.http.post(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.MODELS,d,{headers:c})}updateModel(d){var c=this.getHeaders();return this.http.put(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.MODELS+"/"+d.id,d,{headers:c})}getAllCompanies(){var d=this.getHeaders();return this.http.get(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.COMPANIES,{headers:d})}createCompany(d){var c=this.getHeaders();return this.http.post(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.COMPANIES,d,{headers:c})}updateCompany(d){var c=this.getHeaders();return this.http.put(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.COMPANIES+"/"+d.id,d,{headers:c})}getAllEquipmentClasses(){var d=this.getHeaders();return this.http.get(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.EQUIPMENT_CLASSES,{headers:d})}createEquipmentClass(d){var c=this.getHeaders();return this.http.post(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.EQUIPMENT_CLASSES,d,{headers:c})}updateEquipmentClass(d){var c=this.getHeaders();return this.http.put(i._.settings.apiServer.API_URL_BASE+i._.settings.apiServer.EQUIPMENT_CLASSES+"/"+d.id,d,{headers:c})}}return g.\u0275fac=function(d){return new(d||g)(u.LFG(t.eN),u.LFG(f.i))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);
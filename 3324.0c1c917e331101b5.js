"use strict";(self.webpackChunkfury=self.webpackChunkfury||[]).push([[3324],{88914:(R,p,o)=>{o.d(p,{M:()=>a});var e=o(41777);const a=(0,e.X$)("fadeInRight",[(0,e.eR)(":enter",[(0,e.oB)({transform:"translateX(-2vw)",opacity:0}),(0,e.jt)("0.4s cubic-bezier(0.35, 0, 0.25, 1)",(0,e.oB)({transform:"translateX(0)",opacity:1}))])])},14499:(R,p,o)=>{o.d(p,{X:()=>a});var e=o(41777);const a=(0,e.X$)("fadeInUp",[(0,e.eR)(":enter",[(0,e.oB)({transform:"translateY(3vh)",opacity:0}),(0,e.jt)("400ms cubic-bezier(0.35, 0, 0.25, 1)",(0,e.oB)({transform:"translateY(0)",opacity:1}))])])},37425:(R,p,o)=>{o.d(p,{K:()=>a});var e=o(41777);const a=(0,e.X$)("scaleIn",[(0,e.eR)(":enter",[(0,e.oB)({transform:"scale(0)"}),(0,e.jt)("400ms cubic-bezier(0.35, 0, 0.25, 1)",(0,e.oB)({transform:"scale(1)"}))])])},38932:(R,p,o)=>{o.d(p,{n:()=>s});var e=o(5e3),a=o(30277),u=o(3299),f=o(69808),g=o(25245);function m(d,M){if(1&d&&(e.TgZ(0,"div",7),e.TgZ(1,"mat-icon",5),e._uU(2,"chevron_right"),e.qZA(),e.TgZ(3,"div",6),e._uU(4),e.qZA(),e.qZA()),2&d){const h=M.$implicit;e.xp6(4),e.Oqu(h)}}const v=function(){return["/"]};let s=(()=>{class d{constructor(){this.crumbs=[]}ngOnInit(){}}return d.\u0275fac=function(h){return new(h||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["fury-breadcrumbs"]],inputs:{current:"current",crumbs:"crumbs"},decls:11,vars:5,consts:[[1,"title"],["fxLayout","row","fxLayoutAlign","start center",1,"crumbs"],[1,"crumb","home",3,"routerLink"],["class","crumb","fxLayout","row","fxLayoutAlign","start center",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb","current"],[1,"chevron"],[1,"link"],["fxLayout","row","fxLayoutAlign","start center",1,"crumb"]],template:function(h,E){1&h&&(e.TgZ(0,"div",0),e._uU(1),e.qZA(),e.TgZ(2,"div",1),e.TgZ(3,"a",2),e._uU(4,"Home"),e.qZA(),e.YNc(5,m,5,1,"div",3),e.TgZ(6,"div",4),e.TgZ(7,"mat-icon",5),e._uU(8,"chevron_right"),e.qZA(),e.TgZ(9,"div",6),e._uU(10),e.qZA(),e.qZA(),e.qZA()),2&h&&(e.xp6(1),e.Oqu(E.current),e.xp6(2),e.Q6J("routerLink",e.DdM(4,v)),e.xp6(2),e.Q6J("ngForOf",E.crumbs),e.xp6(5),e.Oqu(E.current))},directives:[a.xw,a.Wh,u.yS,f.sg,g.Hw],styles:["[_nghost-%COMP%]{display:block}.title[_ngcontent-%COMP%]{font:var(--font-title);font-weight:400}.crumb[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]{text-decoration:none;transition:color .4s cubic-bezier(.25,.8,.25,1);font:var(--font-body-1)}.link[_ngcontent-%COMP%]{cursor:pointer}.chevron[_ngcontent-%COMP%]{font-size:18px;height:18px;width:18px;margin-left:6px;margin-right:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}"]}),d})()},94927:(R,p,o)=>{o.d(p,{n:()=>Z});var e=o(5e3),a=o(23753),u=o(75778),f=o(80013),g=o(69808),m=o(92181),v=o(30277),s=o(25245),d=o(47423),M=o(77446),h=o(93075);const E=["filter"];function D(T,A){if(1&T&&(e.TgZ(0,"div",5),e.TgZ(1,"div",6),e._uU(2),e.qZA(),e.TgZ(3,"div",7),e.TgZ(4,"mat-icon",8),e._uU(5,"search"),e.qZA(),e._UZ(6,"input",9,10),e.qZA(),e.TgZ(8,"button",11),e.TgZ(9,"mat-icon"),e._uU(10,"filter_list"),e.qZA(),e.qZA(),e.Hsn(11,1),e.qZA()),2&T){const _=e.oxw(),t=e.MAs(3);e.xp6(2),e.Oqu(_.name),e.xp6(6),e.Q6J("matMenuTriggerFor",t)}}function L(T,A){if(1&T){const _=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(b){const P=e.CHM(_).$implicit;return e.oxw().toggleColumnVisibility(P,b)}),e.TgZ(1,"mat-checkbox",13,14),e.NdJ("ngModelChange",function(b){return e.CHM(_).$implicit.visible=b})("click",function(b){return b.stopPropagation()}),e._uU(3),e.qZA(),e.qZA()}if(2&T){const _=A.$implicit;e.xp6(1),e.Q6J("ngModel",_.visible),e.xp6(2),e.hij(" ",_.name," ")}}const I=["*",[["",8,"actions"]]],x=["*",".actions"];let Z=(()=>{class T{constructor(){this.filterChange=new e.vpe}ngAfterViewInit(){this.hideHeader||(0,a.R)(this.filter.nativeElement,"keyup").pipe((0,u.x)(),(0,f.b)(150)).subscribe(()=>{this.filterChange.emit(this.filter.nativeElement.value)})}toggleColumnVisibility(_,t){t.stopPropagation(),t.stopImmediatePropagation(),_.visible=!_.visible}}return T.\u0275fac=function(_){return new(_||T)},T.\u0275cmp=e.Xpm({type:T,selectors:[["fury-list"]],viewQuery:function(_,t){if(1&_&&e.Gf(E,5),2&_){let b;e.iGM(b=e.CRH())&&(t.filter=b.first)}},inputs:{name:"name",columns:"columns",hideHeader:"hideHeader"},outputs:{filterChange:"filterChange"},ngContentSelectors:x,decls:6,vars:2,consts:[[1,"fury-list-table"],["class","fury-list-header","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",4,"ngIf"],["yPosition","below","xPosition","before"],["columnFilter","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",1,"fury-list-header"],[1,"fury-list-name"],["fxLayout","row","fxLayoutAlign","start center","fxFlex",""],[1,"fury-filter-input-icon"],["fxFlex","","placeholder","Search\u2026",1,"fury-filter-input"],["filter",""],["type","button","mat-icon-button","",1,"fury-column-filter",3,"matMenuTriggerFor"],[1,"checkbox-item","mat-menu-item",3,"click"],[1,"checkbox",3,"ngModel","ngModelChange","click"],["checkbox",""]],template:function(_,t){1&_&&(e.F$t(I),e.TgZ(0,"div",0),e.YNc(1,D,12,2,"div",1),e.TgZ(2,"mat-menu",2,3),e.YNc(4,L,4,2,"button",4),e.qZA(),e.Hsn(5),e.qZA()),2&_&&(e.xp6(1),e.Q6J("ngIf",!t.hideHeader),e.xp6(3),e.Q6J("ngForOf",t.columns))},directives:[g.O5,m.VK,g.sg,v.xw,v.Wh,v.SQ,v.yH,s.Hw,d.lW,m.p6,M.oG,h.JJ,h.On],styles:[".fury-list-table{display:flex;flex-direction:column}.fury-list-table .fury-list-header{padding-left:24px;padding-right:24px;height:64px;border-top-left-radius:8px;border-top-right-radius:8px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header{height:auto;padding-top:24px;padding-bottom:24px}}.fury-list-table .fury-list-header .fury-list-name{font-size:20px;line-height:32px;font-weight:500;padding-right:24px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header .fury-list-name{border-right:none}}.fury-list-table .fury-list-header .fury-filter-input{font-size:16px;line-height:1.125;border:none;height:32px}.fury-list-table .fury-list-header .fury-filter-input:focus{outline:none}.fury-list-table .fury-list-header .fury-filter-input-icon{width:1.2em;vertical-align:bottom;height:22px;font-size:22px;margin-right:8px}.fury-list-table table{width:100%}.fury-list-table .mat-header-row .mat-header-cell .mat-sort-header-button{text-transform:uppercase}.fury-list-table .mat-cell.image-cell,.fury-list-table .mat-header-cell.image-cell{flex:0;width:59px}.fury-list-table .mat-cell.image-cell img,.fury-list-table .mat-header-cell.image-cell img{border-radius:50%;height:35px;width:35px;margin-right:24px;vertical-align:middle}.fury-list-table .mat-cell,.fury-list-table .mat-header-cell{white-space:nowrap;padding-left:12px;padding-right:12px}.fury-list-table .mat-cell.actions-cell,.fury-list-table .mat-header-cell.actions-cell{flex:0;width:40px;overflow:visible}.fury-list-table .paginator{display:block}\n"],encapsulation:2}),T})()},4940:(R,p,o)=>{o.d(p,{p:()=>g});var e=o(69808),a=o(93075),u=o(7057),f=o(5e3);let g=(()=>{class m{}return m.\u0275fac=function(s){return new(s||m)},m.\u0275mod=f.oAB({type:m}),m.\u0275inj=f.cJS({imports:[[e.ez,u.q,a.u5]]}),m})()},19165:(R,p,o)=>{o.d(p,{d:()=>a});var e=o(5e3);let a=(()=>{class u{constructor(){}}return u.\u0275fac=function(g){return new(g||u)},u.\u0275dir=e.lG2({type:u,selectors:[["","furyPageLayoutContent",""],["fury-page-layout-content"]],hostAttrs:[1,"fury-page-layout-content"]}),u})()},53580:(R,p,o)=>{o.d(p,{U:()=>a});var e=o(5e3);let a=(()=>{class u{constructor(){}}return u.\u0275fac=function(g){return new(g||u)},u.\u0275dir=e.lG2({type:u,selectors:[["","furyPageLayoutHeader",""],["fury-page-layout-header"]],hostAttrs:[1,"fury-page-layout-header"]}),u})()},39762:(R,p,o)=>{o.d(p,{N:()=>a});var e=o(5e3);let a=(()=>{class u{constructor(){this.mode="simple"}get isCard(){return"card"===this.mode}get isSimple(){return"simple"===this.mode}}return u.\u0275fac=function(g){return new(g||u)},u.\u0275dir=e.lG2({type:u,selectors:[["","furyPageLayout",""],["fury-page-layout"]],hostAttrs:[1,"fury-page-layout"],hostVars:4,hostBindings:function(g,m){2&g&&e.ekj("fury-page-layout-card",m.isCard)("fury-page-layout-simple",m.isSimple)},inputs:{mode:"mode"}}),u})()},59968:(R,p,o)=>{o.d(p,{i:()=>a});var e=o(5e3);let a=(()=>{class u{constructor(){}}return u.\u0275fac=function(g){return new(g||u)},u.\u0275dir=e.lG2({type:u,selectors:[["","furyPage",""],["fury-page"]],hostAttrs:[1,"fury-page"]}),u})()},93324:(R,p,o)=>{o.r(p),o.d(p,{GroupRulesTableModule:()=>Mt});var e=o(69808),a=o(93075),u=o(61264),f=o(4940),g=o(7057),m=o(72467),v=o(3299),s=o(70655),d=o(86087),M=o(84847),h=o(32075),E=o(18444),D=o(88914),L=o(14499),I=o(96831),x=o(92198),Z=o(48966),T=o(37425);class A{constructor(i){this.id=i&&i.id||null,this.limits=i&&i.limits||null,this.visits=i&&i.visits||null,this.fuel=i&&i.fuel||null,this.TIME=i&&i.TIME||null,this.NAME=i&&i.NAME||null,this.description=i&&i.description||null,this.content_summary=i&&i.content_summary||null,this.cluster=i&&i.cluster||null,this.sent_to_fho=i&&i.sent_to_fho||null,this.sent_to_dho=i&&i.sent_to_dho||null,this.discovered=i&&i.discovered||null,this.dry=i&&i.dry||null,this.owner_fleet=i&&i.owner_fleet||null}}var t=o(5e3),b=o(57261),O=o(28196),P=o(12783),J=o(59968),H=o(36551),S=o(25245),U=o(30277),G=o(67322),W=o(77531),K=o(4834),Q=o(74107),Y=o(90508),F=o(47423);const k=["groupRulesModalForm"];function w(n,i){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Se\xf1alar con qu\xe9 nombre ser\xe1 identificada la regla."),t.qZA())}function z(n,i){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Descripci\xf3n breve de la regla."),t.qZA())}function j(n,i){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const r=i.$implicit;t.Q6J("value",r.id),t.xp6(1),t.AsE("",r.name," - ",r.description,"")}}function $(n,i){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const r=i.$implicit;t.Q6J("value",r.id),t.xp6(1),t.AsE("",r.name," - ",r.description,"")}}function q(n,i){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const r=i.$implicit;t.Q6J("value",r.id),t.xp6(1),t.AsE("",r.name," - ",r.description,"")}}function V(n,i){if(1&n&&(t.TgZ(0,"mat-option",12),t._uU(1),t.qZA()),2&n){const r=i.$implicit;t.Q6J("value",r.id),t.xp6(1),t.AsE("",r.name," - ",r.description,"")}}function X(n,i){1&n&&(t.TgZ(0,"mat-error",21),t._uU(1,"Al menos debe seleccionar una regla"),t.qZA())}let B=(()=>{class n{constructor(r,l,c,y,C){this.data=r,this.dialogRef=l,this.snackbar=c,this.groupRulesService=y,this.rulesService=C,this.title="Reglas grupales",this.mode="create",this.groupRule=new A,l.disableClose=!0,this.groupRulesModalForm=new a.cw({id:new a.NI,NAME:new a.NI("",[a.kI.required]),description:new a.NI("",[a.kI.required]),TIME:new a.NI,limits:new a.NI,visits:new a.NI,fuel:new a.NI},n=>{n.controls.id.setErrors(""!=n.controls.NAME.value&&null==n.controls.TIME.value&&null==n.controls.limits.value&&null==n.controls.visits.value&&null==n.controls.fuel.value?{atLeastOneRuleSelected:!0}:null)})}ngOnInit(){return(0,s.mG)(this,void 0,void 0,function*(){this.data&&(this.mode="update",this.groupRule=this.data,this.groupRulesModalForm.setValue({id:this.groupRule.id,NAME:this.groupRule.NAME,description:this.groupRule.description,TIME:this.groupRule.TIME,limits:this.groupRule.limits,visits:this.groupRule.visits,fuel:this.groupRule.fuel})),this.TIMES=yield this.getTimesRules(),this.limits=yield this.getLimitsRules(),this.visits=yield this.getVisitsRules(),this.fuels=yield this.getFuelsRules()})}submit(){this.groupRule.NAME=this.groupRulesModalForm.value.NAME,this.groupRule.description=this.groupRulesModalForm.value.description,this.groupRule.TIME=this.groupRulesModalForm.value.TIME,this.groupRule.limits=this.groupRulesModalForm.value.limits,this.groupRule.visits=this.groupRulesModalForm.value.visits,this.groupRule.fuel=this.groupRulesModalForm.value.fuel,"create"==this.mode?this.createGroupRule():this.updateGroupRule()}createGroupRule(){this.groupRulesService.createGroupRule(this.groupRule).subscribe(r=>{this.groupRule.id=r.id,this.snackbar.open(r.message,null,{duration:5e3,panelClass:["green-snackbar"]}),this.dialogRef.close(this.groupRule)},r=>{this.snackbar.open(r.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}updateGroupRule(){this.groupRulesService.updateGroupRule(this.groupRule).subscribe(r=>{this.snackbar.open(r.message,null,{duration:5e3,panelClass:["green-snackbar"]}),this.dialogRef.close(this.groupRule)},r=>{this.snackbar.open(r.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}close(){this.dialogRef.close()}getTimesRules(){return(0,s.mG)(this,void 0,void 0,function*(){return yield this.rulesService.getAllTimesRules().toPromise()})}getLimitsRules(){return(0,s.mG)(this,void 0,void 0,function*(){return yield this.rulesService.getAllLimitsRules().toPromise()})}getVisitsRules(){return(0,s.mG)(this,void 0,void 0,function*(){return yield this.rulesService.getAllVisitsRules().toPromise()})}getFuelsRules(){return(0,s.mG)(this,void 0,void 0,function*(){return yield this.rulesService.getAllFuelsRules().toPromise()})}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(Z.WI),t.Y36(Z.so),t.Y36(b.ux),t.Y36(O.o),t.Y36(P.W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["fury-form-wizard"]],viewQuery:function(r,l){if(1&r&&t.Gf(k,5),2&r){let c;t.iGM(c=t.CRH())&&(l._focusMe=c.first)}},decls:73,vars:12,consts:[[1,"title"],["fxLayout","column","fxLayoutAlign","start center"],[1,"card"],[3,"formGroup"],[1,"heading"],[1,"subheading"],["fxLayout","column","fxLayoutGap","8px",1,"content",2,"margin-top","20px"],["fxFlex","auto","appearance","outline"],["formControlName","NAME","matInput","","required",""],[4,"ngIf"],["formControlName","description","matInput","","required",""],["formControlName","TIME"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["formControlName","limits"],["formControlName","visits"],["formControlName","fuel"],["style","font-size: small;",4,"ngIf"],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","24px",2,"margin-top","20px"],["color","primary","mat-raised-button","",3,"click"],["color","primary","mat-raised-button","",3,"disabled","click"],[2,"font-size","small"]],template:function(r,l){1&r&&(t.TgZ(0,"fury-page"),t.TgZ(1,"fury-title",0),t.TgZ(2,"mat-icon"),t._uU(3,"rule"),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Reglas Grupales"),t.qZA(),t.qZA(),t.TgZ(6,"div",1),t.TgZ(7,"div",2),t.TgZ(8,"form",3),t.TgZ(9,"div",4),t._uU(10,"Generales"),t.qZA(),t.TgZ(11,"div",5),t._uU(12,"Indicar propiedades identificadoras de la regla."),t.qZA(),t.TgZ(13,"div",6),t.TgZ(14,"mat-form-field",7),t.TgZ(15,"mat-label"),t._uU(16,"Nombre"),t.qZA(),t._UZ(17,"input",8),t.TgZ(18,"mat-hint"),t._uU(19,"Se\xf1alar con qu\xe9 nombre ser\xe1 identificada la regla."),t.qZA(),t.YNc(20,w,2,0,"mat-error",9),t.qZA(),t.TgZ(21,"mat-form-field",7),t.TgZ(22,"mat-label"),t._uU(23,"Descripci\xf3n"),t.qZA(),t._UZ(24,"input",10),t.TgZ(25,"mat-hint"),t._uU(26,"Descripci\xf3n breve de la regla."),t.qZA(),t.YNc(27,z,2,0,"mat-error",9),t.qZA(),t.qZA(),t.TgZ(28,"div",6),t._UZ(29,"mat-divider"),t.TgZ(30,"mat-form-field",7),t.TgZ(31,"mat-label"),t._uU(32,"Reglas de rangos de tiempo"),t.qZA(),t.TgZ(33,"mat-select",11),t.TgZ(34,"mat-option",12),t._uU(35,"Seleccione"),t.qZA(),t.YNc(36,j,2,3,"mat-option",13),t.qZA(),t.TgZ(37,"mat-hint"),t._uU(38,"Seleccionar regla de rangos de tiempo."),t.qZA(),t.qZA(),t.TgZ(39,"mat-form-field",7),t.TgZ(40,"mat-label"),t._uU(41,"L\xedmites"),t.qZA(),t.TgZ(42,"mat-select",14),t.TgZ(43,"mat-option",12),t._uU(44,"Seleccione"),t.qZA(),t.YNc(45,$,2,3,"mat-option",13),t.qZA(),t.TgZ(46,"mat-hint"),t._uU(47,"Seleccionar regla de l\xedmites."),t.qZA(),t.qZA(),t.TgZ(48,"mat-form-field",7),t.TgZ(49,"mat-label"),t._uU(50,"Visitas"),t.qZA(),t.TgZ(51,"mat-select",15),t.TgZ(52,"mat-option",12),t._uU(53,"Seleccione"),t.qZA(),t.YNc(54,q,2,3,"mat-option",13),t.qZA(),t.TgZ(55,"mat-hint"),t._uU(56,"Seleccionar regla de visitas."),t.qZA(),t.qZA(),t.TgZ(57,"mat-form-field",7),t.TgZ(58,"mat-label"),t._uU(59,"Combustibles"),t.qZA(),t.TgZ(60,"mat-select",16),t.TgZ(61,"mat-option",12),t._uU(62,"Seleccione"),t.qZA(),t.YNc(63,V,2,3,"mat-option",13),t.qZA(),t.TgZ(64,"mat-hint"),t._uU(65,"Seleccionar regla de combustibles."),t.qZA(),t.qZA(),t.YNc(66,X,2,0,"mat-error",17),t._UZ(67,"mat-divider"),t.qZA(),t.TgZ(68,"div",18),t.TgZ(69,"button",19),t.NdJ("click",function(){return l.close()}),t._uU(70,"CANCELAR"),t.qZA(),t.TgZ(71,"button",20),t.NdJ("click",function(){return l.submit()}),t._uU(72,"GUARDAR"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(2),t.Q6J("@scaleIn",void 0),t.xp6(2),t.Q6J("@fadeInRight",void 0),t.xp6(3),t.Q6J("@fadeInUp",void 0),t.xp6(1),t.Q6J("formGroup",l.groupRulesModalForm),t.xp6(12),t.Q6J("ngIf",l.groupRulesModalForm.get("NAME").errors),t.xp6(7),t.Q6J("ngIf",l.groupRulesModalForm.get("description").errors),t.xp6(9),t.Q6J("ngForOf",l.TIMES),t.xp6(9),t.Q6J("ngForOf",l.limits),t.xp6(9),t.Q6J("ngForOf",l.visits),t.xp6(9),t.Q6J("ngForOf",l.fuels),t.xp6(3),t.Q6J("ngIf",l.groupRulesModalForm.get("id").errors),t.xp6(5),t.Q6J("disabled",l.groupRulesModalForm.invalid))},directives:[J.i,H.M,S.Hw,U.xw,U.Wh,a._Y,a.JL,a.sg,U.SQ,G.KE,U.yH,G.hX,a.Fj,W.Nt,a.JJ,a.u,a.Q7,G.bx,e.O5,K.d,Q.gD,Y.ey,e.sg,F.lW,G.TO],styles:[""],data:{animation:[L.X,D.M,T.K]}}),n})();var tt=o(82593),et=o(24801),ot=o(39762),rt=o(53580),nt=o(38932),it=o(19165),st=o(94927),N=o(92181);function at(n,i){if(1&n&&(t.TgZ(0,"th",17),t._uU(1),t.qZA()),2&n){const r=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",r.name,"")}}function lt(n,i){if(1&n&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&n){const r=i.$implicit,l=t.oxw(2).$implicit,c=t.oxw();t.xp6(1),t.hij(" ",c.getLabel(l.name,r[l.property])," ")}}function ut(n,i){if(1&n&&(t.ynx(0,14),t.YNc(1,at,2,1,"th",15),t.YNc(2,lt,2,1,"td",16),t.BQk()),2&n){const r=t.oxw().$implicit;t.Q6J("matColumnDef",r.property)}}function ct(n,i){if(1&n&&(t.ynx(0),t.YNc(1,ut,3,1,"ng-container",13),t.BQk()),2&n){const r=i.$implicit;t.xp6(1),t.Q6J("ngIf",r.isModelProperty)}}function dt(n,i){1&n&&t._UZ(0,"th",19)}function mt(n,i){if(1&n){const r=t.EpF();t.TgZ(0,"td",20),t.TgZ(1,"button",21),t.NdJ("click",function(c){return c.stopPropagation()}),t.TgZ(2,"mat-icon"),t._uU(3,"more_horiz"),t.qZA(),t.qZA(),t.TgZ(4,"mat-menu",22,23),t.TgZ(6,"button",24),t.NdJ("click",function(){const y=t.CHM(r).$implicit;return t.oxw().updateGroupRule(y)}),t.TgZ(7,"span"),t._uU(8,"Editar"),t.qZA(),t.qZA(),t.TgZ(9,"button",24),t.NdJ("click",function(){const y=t.CHM(r).$implicit;return t.oxw().deleteGroupRule(y)}),t.TgZ(10,"span"),t._uU(11,"Eliminar"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const r=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",r)}}function pt(n,i){1&n&&t._UZ(0,"tr",25)}function gt(n,i){if(1&n){const r=t.EpF();t.TgZ(0,"tr",26),t.NdJ("click",function(){const y=t.CHM(r).$implicit;return t.oxw().updateGroupRule(y)}),t.qZA()}}const ft=function(){return["Tables"]},ht=[{path:"",component:(()=>{class n{constructor(r,l,c,y,C,bt){this.dialog=r,this.confirmationDialog=l,this._groupRulesService=c,this._fleetsService=y,this._jobsService=C,this.snackbar=bt,this.subject$=new I.t(1),this.data$=this.subject$.asObservable(),this.fleets=[],this.columns=[{name:"Id",property:"id",visible:!1,isModelProperty:!0},{name:"Nombre",property:"NAME",visible:!0,isModelProperty:!0},{name:"Descripci\xf3n",property:"description",visible:!0,isModelProperty:!0},{name:"Resumen",property:"content_summary",visible:!0,isModelProperty:!0},{name:"L\xedmites",property:"limits",visible:!1,isModelProperty:!0},{name:"Visitas",property:"visits",visible:!1,isModelProperty:!0},{name:"Combustible",property:"fuel",visible:!1,isModelProperty:!0},{name:"Tiempo",property:"TIME",visible:!1,isModelProperty:!0},{name:"Cl\xfaster",property:"cluster",visible:!1,isModelProperty:!0},{name:"Flota",property:"owner_fleet",visible:!0,isModelProperty:!0},{name:"Acciones",property:"actions",visible:!0}],this.pageSize=10}getLabel(r,l){if(null!=r){if("Estatus"==r)return 0==l?"Inactivo":"Activo";if("Flota"==r){const c=this.fleets.findIndex(y=>y.id===l);return-1==c?"Ninguna":this.fleets[c]}return l}}get visibleColumns(){return this.columns.filter(r=>r.visible).map(r=>r.property)}getData(){this._groupRulesService.getAll().subscribe(r=>{this.groupRules=r,this.dataSource=new h.by(r),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator},r=>{console.log(r)})}ngOnInit(){return(0,s.mG)(this,void 0,void 0,function*(){this.dataSource=new h.by,this.getData(),this.fleets=yield this.getFleets(),this.data$.pipe((0,x.h)(r=>!!r)).subscribe(r=>{this.groupRules=r,this.dataSource.data=r})})}getFleets(){return(0,s.mG)(this,void 0,void 0,function*(){return yield this._fleetsService.getAll().toPromise()})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}createGroupRule(){this.dialog.open(B).afterClosed().subscribe(r=>{r&&(this.subject$.next(this.groupRules),this.getData(),this.data$.pipe((0,x.h)(l=>!!l)).subscribe(l=>{this.groupRules=l,this.dataSource.data=l}),this._jobsService.push({type:"group_rules",object:r}).subscribe(l=>{this.snackbar.open(l.message,null,{duration:5e3,panelClass:["green-snackbar"]})},l=>{this.snackbar.open(l.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})}))})}updateGroupRule(r){this.dialog.open(B,{data:r}).afterClosed().subscribe(l=>{l&&(this.subject$.next(this.groupRules),this.getData(),this.data$.pipe((0,x.h)(c=>!!c)).subscribe(c=>{this.groupRules=c,this.dataSource.data=c}),this._jobsService.push({type:"group_rules",object:l}).subscribe(c=>{this.snackbar.open(c.message,null,{duration:5e3,panelClass:["green-snackbar"]})},c=>{this.snackbar.open(c.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})}))})}deleteGroupRule(r){this.confirmationDialog.open(E.z,{data:{title:"Confirmaci\xf3n",message:"\xbfDesea eliminar del sistema el registro "+r.NAME+"?"}}).afterClosed().subscribe(l=>{l&&this._groupRulesService.deleteGroupRule(r).subscribe(c=>{0==c.rc?(this.snackbar.open(c.message,null,{duration:5e3,panelClass:["green-snackbar"]}),this.ngOnInit()):this.snackbar.open(c.message,null,{duration:5e3,panelClass:["red-snackbar"]})},c=>{this.snackbar.open(c.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})})}onFilterChange(r){!this.dataSource||(r=(r=r.trim()).toLowerCase(),this.dataSource.filter=r)}ngOnDestroy(){}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(Z.uw),t.Y36(Z.uw),t.Y36(O.o),t.Y36(tt.V),t.Y36(et.e),t.Y36(b.ux))},n.\u0275cmp=t.Xpm({type:n,selectors:[["group-rules-table"]],viewQuery:function(r,l){if(1&r&&(t.Gf(d.NW,7),t.Gf(M.YE,7)),2&r){let c;t.iGM(c=t.CRH())&&(l.paginator=c.first),t.iGM(c=t.CRH())&&(l.sort=c.first)}},inputs:{columns:"columns"},decls:17,vars:10,consts:[["mode","card"],["current","Reglas Grupales",3,"crumbs"],["name","Reglas Grupales",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["mat-table","","matSort","",3,"dataSource"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["mat-cell","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements",3,"click"]],template:function(r,l){1&r&&(t.TgZ(0,"fury-page-layout",0),t.TgZ(1,"fury-page-layout-header"),t._UZ(2,"fury-breadcrumbs",1),t.qZA(),t.TgZ(3,"fury-page-layout-content"),t.TgZ(4,"fury-list",2),t.NdJ("filterChange",function(y){return l.onFilterChange(y)}),t.TgZ(5,"div",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return l.createGroupRule()}),t.TgZ(7,"mat-icon"),t._uU(8,"add"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"table",5),t.YNc(10,ct,2,1,"ng-container",6),t.ynx(11,7),t.YNc(12,dt,1,0,"th",8),t.YNc(13,mt,12,1,"td",9),t.BQk(),t.YNc(14,pt,1,0,"tr",10),t.YNc(15,gt,1,0,"tr",11),t.qZA(),t._UZ(16,"mat-paginator",12),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(2),t.Q6J("@fadeInRight",void 0)("crumbs",t.DdM(9,ft)),t.xp6(1),t.Q6J("@fadeInUp",void 0),t.xp6(1),t.Q6J("columns",l.columns),t.xp6(5),t.Q6J("dataSource",l.dataSource),t.xp6(1),t.Q6J("ngForOf",l.columns),t.xp6(4),t.Q6J("matHeaderRowDef",l.visibleColumns),t.xp6(1),t.Q6J("matRowDefColumns",l.visibleColumns),t.xp6(1),t.Q6J("pageSize",l.pageSize))},directives:[ot.N,rt.U,nt.n,it.d,st.n,F.lW,S.Hw,h.BZ,M.YE,e.sg,h.w1,h.fO,h.Dz,h.as,h.nj,d.NW,e.O5,h.ge,M.nU,h.ev,N.p6,N.VK,N.OP,h.XQ,h.Gk],encapsulation:2,data:{animation:[D.M,L.X]}}),n})()}];let _t=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.Bz.forChild(ht)],v.Bz]}),n})();var vt=o(61620);const yt=[{path:"",component:B}];let Rt=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[v.Bz.forChild(yt)],v.Bz]}),n})(),Tt=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[e.ez,a.u5,a.UX,g.q,vt.o9,Z.Is,W.c,F.ot,S.Ps,Q.LD,Rt,m.Z]]}),n})(),Mt=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[e.ez,_t,a.u5,g.q,m.Z,Tt,f.p,u.J]]}),n})()},82593:(R,p,o)=>{o.d(p,{V:()=>g});var e=o(40520),a=o(98545),u=o(5e3),f=o(33344);let g=(()=>{class m{constructor(s,d){this.http=s,this.tokenStorage=d,this.baseendpoint=a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.FLEETS}getHeaders(){var s=new e.WM,d=this.tokenStorage.getToken();return s.set("token",d||"{}")}getAll(){var s=this.getHeaders();return this.http.get(this.baseendpoint,{headers:s})}getFiltered(s){var d=this.getHeaders();const M=(new e.LE).appendAll(s);return this.http.get(this.baseendpoint,{headers:d,params:M})}create(s){var d=this.getHeaders();return this.http.post(this.baseendpoint,s,{headers:d})}update(s){var d=this.getHeaders();return this.http.put(this.baseendpoint+"/"+s.id,s,{headers:d})}updateCvConfiguration(s){var d=this.getHeaders();return this.http.post(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.CV_CONFIGURATIONS,s,{headers:d})}}return m.\u0275fac=function(s){return new(s||m)(u.LFG(e.eN),u.LFG(f.i))},m.\u0275prov=u.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},28196:(R,p,o)=>{o.d(p,{o:()=>g});var e=o(40520),a=o(98545),u=o(5e3),f=o(33344);let g=(()=>{class m{constructor(s,d){this.http=s,this.tokenStorage=d}getHeaders(){var s=new e.WM,d=this.tokenStorage.getToken();return s.set("token",d||"{}")}getAll(){var s=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.GROUP_RULES,{headers:s})}createGroupRule(s){var d=this.getHeaders();return this.http.post(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.GROUP_RULES,s,{headers:d})}updateGroupRule(s){var d=this.getHeaders();return this.http.put(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.GROUP_RULES+"/"+s.id,s,{headers:d})}deleteGroupRule(s){var d=this.getHeaders();return this.http.delete(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.GROUP_RULES+"/"+s.id,{headers:d})}}return m.\u0275fac=function(s){return new(s||m)(u.LFG(e.eN),u.LFG(f.i))},m.\u0275prov=u.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},24801:(R,p,o)=>{o.d(p,{e:()=>g});var e=o(40520),a=o(98545),u=o(5e3),f=o(33344);let g=(()=>{class m{constructor(s,d){this.http=s,this.tokenStorage=d}getHeaders(){var s=new e.WM,d=this.tokenStorage.getToken();return s.set("token",d||"{}")}push(s){var d=this.getHeaders();return this.http.post(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.JOBS,s,{headers:d})}}return m.\u0275fac=function(s){return new(s||m)(u.LFG(e.eN),u.LFG(f.i))},m.\u0275prov=u.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);
"use strict";(self.webpackChunkfury=self.webpackChunkfury||[]).push([[3372],{37425:(T,g,n)=>{n.d(g,{K:()=>a});var o=n(41777);const a=(0,o.X$)("scaleIn",[(0,o.eR)(":enter",[(0,o.oB)({transform:"scale(0)"}),(0,o.jt)("400ms cubic-bezier(0.35, 0, 0.25, 1)",(0,o.oB)({transform:"scale(1)"}))])])},94927:(T,g,n)=>{n.d(g,{n:()=>G});var o=n(5e3),a=n(23753),i=n(75778),C=n(80013),f=n(69808),p=n(92181),y=n(30277),l=n(25245),_=n(47423),b=n(77446),v=n(93075);const S=["filter"];function M(I,e){if(1&I&&(o.TgZ(0,"div",5),o.TgZ(1,"div",6),o._uU(2),o.qZA(),o.TgZ(3,"div",7),o.TgZ(4,"mat-icon",8),o._uU(5,"search"),o.qZA(),o._UZ(6,"input",9,10),o.qZA(),o.TgZ(8,"button",11),o.TgZ(9,"mat-icon"),o._uU(10,"filter_list"),o.qZA(),o.qZA(),o.Hsn(11,1),o.qZA()),2&I){const d=o.oxw(),h=o.MAs(3);o.xp6(2),o.Oqu(d.name),o.xp6(6),o.Q6J("matMenuTriggerFor",h)}}function P(I,e){if(1&I){const d=o.EpF();o.TgZ(0,"button",12),o.NdJ("click",function(x){const A=o.CHM(d).$implicit;return o.oxw().toggleColumnVisibility(A,x)}),o.TgZ(1,"mat-checkbox",13,14),o.NdJ("ngModelChange",function(x){return o.CHM(d).$implicit.visible=x})("click",function(x){return x.stopPropagation()}),o._uU(3),o.qZA(),o.qZA()}if(2&I){const d=e.$implicit;o.xp6(1),o.Q6J("ngModel",d.visible),o.xp6(2),o.hij(" ",d.name," ")}}const O=["*",[["",8,"actions"]]],Z=["*",".actions"];let G=(()=>{class I{constructor(){this.filterChange=new o.vpe}ngAfterViewInit(){this.hideHeader||(0,a.R)(this.filter.nativeElement,"keyup").pipe((0,i.x)(),(0,C.b)(150)).subscribe(()=>{this.filterChange.emit(this.filter.nativeElement.value)})}toggleColumnVisibility(d,h){h.stopPropagation(),h.stopImmediatePropagation(),d.visible=!d.visible}}return I.\u0275fac=function(d){return new(d||I)},I.\u0275cmp=o.Xpm({type:I,selectors:[["fury-list"]],viewQuery:function(d,h){if(1&d&&o.Gf(S,5),2&d){let x;o.iGM(x=o.CRH())&&(h.filter=x.first)}},inputs:{name:"name",columns:"columns",hideHeader:"hideHeader"},outputs:{filterChange:"filterChange"},ngContentSelectors:Z,decls:6,vars:2,consts:[[1,"fury-list-table"],["class","fury-list-header","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",4,"ngIf"],["yPosition","below","xPosition","before"],["columnFilter","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",1,"fury-list-header"],[1,"fury-list-name"],["fxLayout","row","fxLayoutAlign","start center","fxFlex",""],[1,"fury-filter-input-icon"],["fxFlex","","placeholder","Search\u2026",1,"fury-filter-input"],["filter",""],["type","button","mat-icon-button","",1,"fury-column-filter",3,"matMenuTriggerFor"],[1,"checkbox-item","mat-menu-item",3,"click"],[1,"checkbox",3,"ngModel","ngModelChange","click"],["checkbox",""]],template:function(d,h){1&d&&(o.F$t(O),o.TgZ(0,"div",0),o.YNc(1,M,12,2,"div",1),o.TgZ(2,"mat-menu",2,3),o.YNc(4,P,4,2,"button",4),o.qZA(),o.Hsn(5),o.qZA()),2&d&&(o.xp6(1),o.Q6J("ngIf",!h.hideHeader),o.xp6(3),o.Q6J("ngForOf",h.columns))},directives:[f.O5,p.VK,f.sg,y.xw,y.Wh,y.SQ,y.yH,l.Hw,_.lW,p.p6,b.oG,v.JJ,v.On],styles:[".fury-list-table{display:flex;flex-direction:column}.fury-list-table .fury-list-header{padding-left:24px;padding-right:24px;height:64px;border-top-left-radius:8px;border-top-right-radius:8px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header{height:auto;padding-top:24px;padding-bottom:24px}}.fury-list-table .fury-list-header .fury-list-name{font-size:20px;line-height:32px;font-weight:500;padding-right:24px}@media screen and (max-width: 599px){.fury-list-table .fury-list-header .fury-list-name{border-right:none}}.fury-list-table .fury-list-header .fury-filter-input{font-size:16px;line-height:1.125;border:none;height:32px}.fury-list-table .fury-list-header .fury-filter-input:focus{outline:none}.fury-list-table .fury-list-header .fury-filter-input-icon{width:1.2em;vertical-align:bottom;height:22px;font-size:22px;margin-right:8px}.fury-list-table table{width:100%}.fury-list-table .mat-header-row .mat-header-cell .mat-sort-header-button{text-transform:uppercase}.fury-list-table .mat-cell.image-cell,.fury-list-table .mat-header-cell.image-cell{flex:0;width:59px}.fury-list-table .mat-cell.image-cell img,.fury-list-table .mat-header-cell.image-cell img{border-radius:50%;height:35px;width:35px;margin-right:24px;vertical-align:middle}.fury-list-table .mat-cell,.fury-list-table .mat-header-cell{white-space:nowrap;padding-left:12px;padding-right:12px}.fury-list-table .mat-cell.actions-cell,.fury-list-table .mat-header-cell.actions-cell{flex:0;width:40px;overflow:visible}.fury-list-table .paginator{display:block}\n"],encapsulation:2}),I})()},19165:(T,g,n)=>{n.d(g,{d:()=>a});var o=n(5e3);let a=(()=>{class i{constructor(){}}return i.\u0275fac=function(f){return new(f||i)},i.\u0275dir=o.lG2({type:i,selectors:[["","furyPageLayoutContent",""],["fury-page-layout-content"]],hostAttrs:[1,"fury-page-layout-content"]}),i})()},59968:(T,g,n)=>{n.d(g,{i:()=>a});var o=n(5e3);let a=(()=>{class i{constructor(){}}return i.\u0275fac=function(f){return new(f||i)},i.\u0275dir=o.lG2({type:i,selectors:[["","furyPage",""],["fury-page"]],hostAttrs:[1,"fury-page"]}),i})()},8062:(T,g,n)=>{n.d(g,{m:()=>o});class o{constructor(i){this.invoice_id=i&&i.invoice_id||0,this.invoice_number1=i&&i.invoice_number1||"",this.invoice_number2=i&&i.invoice_number2||"",this.invoice_date=i&&i.invoice_date||"",this.invoice_timestamp=i&&i.invoice_timestamp||"",this.volume_unit_of_measure_id=i&&i.volume_unit_of_measure_id||0,this.temperature_unit_of_measure_id=i&&i.temperature_unit_of_measure_id||0,this.currency_id=i&&i.currency_id||0,this.currency_exchange_rate=i&&i.currency_exchange_rate||0,this.invoice_volume=i&&i.invoice_volume||0,this.invoice_volume_liters=i&&i.invoice_volume_liters||0,this.invoice_temperature=i&&i.invoice_temperature||0,this.invoice_temperature_celsius=i&&i.invoice_temperature_celsius||0,this.invoice_ppv=i&&i.invoice_ppv||0,this.invoice_ppv_pesos=i&&i.invoice_ppv_pesos||0,this.invoice_total_price=i&&i.invoice_total_price||0,this.invoice_total_price_pesos=i&&i.invoice_total_price_pesos||0,this.timestamp=i&&i.timestamp||"",this.status=i&&i.status||0,this.user_id=i&&i.user_id||0,this.cre_permission_id=i&&i.cre_permission_id||0,this.tarifa_de_almac=i&&i.tarifa_de_almac||0,this.cargo_por_capacidad_almac=i&&i.cargo_por_capacidad_almac||0,this.cargo_por_uso_almac=i&&i.cargo_por_uso_almac||0,this.cargo_volumetrico_almac=i&&i.cargo_volumetrico_almac||0,this.tarifa_de_transporte=i&&i.tarifa_de_transporte||0,this.cargo_por_capacidad_trans=i&&i.cargo_por_capacidad_trans||0,this.cargo_por_uso_trans=i&&i.cargo_por_uso_trans||0,this.cargo_volumetrico_trans=i&&i.cargo_volumetrico_trans||0,this.tarifa_de_suministro=i&&i.tarifa_de_suministro||0,this.Remissions=i&&i.Remissions||[],this.TankDeliveryReadings=i&&i.TankDeliveryReadings||[],this.WeighingMachineReadings=i&&i.WeighingMachineReadings||[],this.ChemicalProductAnalyses=i&&i.ChemicalProductAnalyses||[]}}},13372:(T,g,n)=>{n.r(g),n.d(g,{InvoicesTableModule:()=>ye});var o=n(69808),a=n(93075),i=n(61264),C=n(4940),f=n(7057),p=n(72467),y=n(3299),l=n(70655),_=n(86087),b=n(84847),v=n(32075),S=n(96831),M=n(92198),P=n(88914),O=n(14499),Z=n(48966),G=n(37425),I=n(8062),e=n(5e3),d=n(57261),h=n(24629),x=n(95288),k=n(59968),A=n(36551),F=n(25245),U=n(30277),R=n(67322),J=n(74107),B=n(77531),E=n(86856),D=n(47423),Q=n(90508);function H(r,m){if(1&r&&(e.TgZ(0,"mat-option",32),e._uU(1),e.qZA()),2&r){const t=m.$implicit;e.Q6J("value",t.permission_id),e.xp6(1),e.Oqu(t.provider_name)}}function W(r,m){if(1&r&&(e.TgZ(0,"mat-option",32),e._uU(1),e.qZA()),2&r){const t=m.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.unit_of_measure)}}function Y(r,m){if(1&r&&(e.TgZ(0,"mat-option",32),e._uU(1),e.qZA()),2&r){const t=m.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.unit_of_measure)}}function $(r,m){if(1&r&&(e.TgZ(0,"mat-option",32),e._uU(1),e.qZA()),2&r){const t=m.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.currency)}}let N=(()=>{class r{constructor(t,s,c,u,q){this.data=t,this.dialogRef=s,this.snackbar=c,this._invoicesService=u,this._crePermissionsService=q,this.active_label="Activo",this.allowCreateUser=!1,this.theInvoice=new I.m,this.current_temperature_unit_of_measure=11,this.volume_conversion_factor=1,this.generalFormGroup=new a.cw({cre_permission_id:new a.NI("",[a.kI.required]),invoice_number1:new a.NI("",[a.kI.required]),invoice_number2:new a.NI,invoice_date:new a.NI("",[a.kI.required]),volume_unit_of_measure_id:new a.NI(1,[a.kI.required]),temperature_unit_of_measure_id:new a.NI(11,[a.kI.required]),currency_id:new a.NI(1,[a.kI.required]),currency_exchange_rate:new a.NI(1,[a.kI.required]),invoice_volume:new a.NI(0,[a.kI.required]),invoice_volume_liters:new a.NI(0,[a.kI.required]),invoice_temperature:new a.NI(0,[a.kI.required]),invoice_temperature_celsius:new a.NI(0,[a.kI.required]),invoice_ppv:new a.NI(0,[a.kI.required]),invoice_ppv_pesos:new a.NI(0,[a.kI.required]),invoice_total_price:new a.NI(0,[a.kI.required]),invoice_total_price_pesos:new a.NI(0,[a.kI.required]),timestamp:new a.NI,status:new a.NI(2),user_id:new a.NI("")}),this.dialogRef.disableClose=!0}ngOnInit(){return(0,l.mG)(this,void 0,void 0,function*(){this.vmus=yield this.getVolumeUnitsOfMeasure(),this.tmus=yield this.getTemperatureUnitsOfMeasure(),this.currencies=yield this.getCurrencies(),this.providers=yield this.getProviders(),null!=this.data&&(this.theInvoice=this.data,this.generalFormGroup.patchValue({cre_permission_id:this.theInvoice.cre_permission_id,invoice_number1:this.theInvoice.invoice_number1,invoice_number2:this.theInvoice.invoice_number2,invoice_date:new Date(this.theInvoice.invoice_date),volume_unit_of_measure_id:this.theInvoice.volume_unit_of_measure_id,temperature_unit_of_measure_id:this.theInvoice.temperature_unit_of_measure_id,currency_id:this.theInvoice.currency_id,currency_exchange_rate:this.theInvoice.currency_exchange_rate,invoice_volume:this.theInvoice.invoice_volume,invoice_volume_liters:this.theInvoice.invoice_volume_liters,invoice_temperature:this.theInvoice.invoice_temperature,invoice_temperature_celsius:this.theInvoice.invoice_temperature_celsius,invoice_ppv:this.theInvoice.invoice_ppv,invoice_ppv_pesos:this.theInvoice.invoice_ppv_pesos,invoice_total_price:this.theInvoice.invoice_total_price,invoice_total_price_pesos:this.theInvoice.invoice_total_price_pesos,timestamp:this.theInvoice.timestamp,status:2==this.theInvoice.status,user_id:this.theInvoice.user_id}))})}getVolumeUnitsOfMeasure(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getUnitsOfMeasure("volume").toPromise()})}getTemperatureUnitsOfMeasure(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getUnitsOfMeasure("temperature").toPromise()})}getCurrencies(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getCurrencies().toPromise()})}getProviders(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getAllByType(3).toPromise()})}submit(){this.theInvoice.cre_permission_id=this.generalFormGroup.controls.cre_permission_id.value,this.theInvoice.invoice_number1=this.generalFormGroup.controls.invoice_number1.value,this.theInvoice.invoice_number2=this.generalFormGroup.controls.invoice_number2.value,this.theInvoice.invoice_date=this.getMysqlDate(this.generalFormGroup.controls.invoice_date.value),this.theInvoice.volume_unit_of_measure_id=this.generalFormGroup.controls.volume_unit_of_measure_id.value,this.theInvoice.temperature_unit_of_measure_id=this.generalFormGroup.controls.temperature_unit_of_measure_id.value,this.theInvoice.currency_id=this.generalFormGroup.controls.currency_id.value,this.theInvoice.currency_exchange_rate=this.generalFormGroup.controls.currency_exchange_rate.value,this.theInvoice.invoice_volume=this.generalFormGroup.controls.invoice_volume.value,this.theInvoice.invoice_volume_liters=this.generalFormGroup.controls.invoice_volume_liters.value,this.theInvoice.invoice_temperature=this.generalFormGroup.controls.invoice_temperature.value,this.theInvoice.invoice_temperature_celsius=this.generalFormGroup.controls.invoice_temperature_celsius.value,this.theInvoice.invoice_ppv=this.generalFormGroup.controls.invoice_ppv.value,this.theInvoice.invoice_ppv_pesos=this.generalFormGroup.controls.invoice_ppv_pesos.value,this.theInvoice.invoice_total_price=this.generalFormGroup.controls.invoice_total_price.value,this.theInvoice.invoice_total_price_pesos=this.generalFormGroup.controls.invoice_total_price_pesos.value,this.theInvoice.timestamp=this.generalFormGroup.controls.timestamp.value,this.theInvoice.status=this.generalFormGroup.controls.status.value?2:1,this.theInvoice.user_id=this.generalFormGroup.controls.user_id.value,this.theInvoice.invoice_id>0?this.updateInvoice():this.createInvoice()}close(){this.dialogRef.close()}createInvoice(){this._invoicesService.create(this.theInvoice).subscribe(t=>{this.snackbar.open(t.message,null,{duration:5e3,panelClass:["green-snackbar"]}),this.dialogRef.close(this.theInvoice)},t=>{this.snackbar.open(t.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}updateInvoice(){this._invoicesService.update(this.theInvoice).subscribe(t=>{this.snackbar.open(t.message,null,{duration:5e3,panelClass:["green-snackbar"]}),this.dialogRef.close(this.theInvoice)},t=>{this.snackbar.open(t.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}setActiveInvoice(t){this.active_label=t.checked?"Activo":"Inactivo"}onChangeVolumeUnitOfMeasure(t){this.volume_conversion_factor=this.vmus.find(s=>s.id==t).conversion_factor,this.generalFormGroup.controls.invoice_volume_liters.setValue((this.volume_conversion_factor*this.generalFormGroup.controls.invoice_volume.value).toFixed(2))}onChangeTemperatureUnitOfMeasure(t){this.current_temperature_unit_of_measure=t,this.generalFormGroup.controls.invoice_temperature_celsius.setValue(12==this.current_temperature_unit_of_measure?((this.generalFormGroup.controls.invoice_temperature.value-32)/1.8).toFixed(2):13==this.current_temperature_unit_of_measure?(this.generalFormGroup.controls.invoice_temperature.value-273.15).toFixed(2):(+this.generalFormGroup.controls.invoice_temperature.value).toFixed(2))}onChangeCurrency(t){1==t&&(this.generalFormGroup.controls.currency_exchange_rate.setValue(1),this.generalFormGroup.controls.invoice_ppv_pesos.setValue((this.generalFormGroup.controls.invoice_ppv.value*this.generalFormGroup.controls.currency_exchange_rate.value).toFixed(2)),this.generalFormGroup.controls.invoice_total_price_pesos.setValue((this.generalFormGroup.controls.invoice_total_price.value*this.generalFormGroup.controls.currency_exchange_rate.value).toFixed(2)))}numericOnly(t){let s=t.target.value+t.key;return!!new RegExp(/^([1-9][0-9]{0,7}||[0]||[0][.][0-9]{0,2}||[1-9][0-9]{0,7}[.][0-9]{0,2})$/).test(s)&&(("currency_exchange_rate"==t.target.id||"invoice_ppv"==t.target.id||"invoice_total_price"==t.target.id)&&(this.generalFormGroup.controls.invoice_ppv_pesos.setValue((this.generalFormGroup.controls.invoice_ppv.value*this.generalFormGroup.controls.currency_exchange_rate.value).toFixed(2)),this.generalFormGroup.controls.invoice_total_price_pesos.setValue((this.generalFormGroup.controls.invoice_total_price.value*this.generalFormGroup.controls.currency_exchange_rate.value).toFixed(2)),("currency_exchange_rate"==t.target.id||"invoice_ppv"==t.target.id)&&(this.generalFormGroup.controls.invoice_total_price.setValue((this.generalFormGroup.controls.invoice_ppv.value*this.generalFormGroup.controls.invoice_volume.value).toFixed(2)),this.generalFormGroup.controls.invoice_total_price_pesos.setValue((this.generalFormGroup.controls.invoice_total_price.value*this.generalFormGroup.controls.currency_exchange_rate.value).toFixed(2)))),"invoice_volume"==t.target.id&&(this.generalFormGroup.controls.invoice_volume_liters.setValue((+this.generalFormGroup.controls.invoice_volume.value*this.volume_conversion_factor).toFixed(2)),this.generalFormGroup.controls.invoice_total_price.setValue((this.generalFormGroup.controls.invoice_ppv.value*this.generalFormGroup.controls.invoice_volume.value).toFixed(2)),this.generalFormGroup.controls.invoice_total_price_pesos.setValue((this.generalFormGroup.controls.invoice_total_price.value*this.generalFormGroup.controls.currency_exchange_rate.value).toFixed(2))),"invoice_temperature"==t.target.id&&this.generalFormGroup.controls.invoice_temperature_celsius.setValue(12==this.current_temperature_unit_of_measure?((+this.generalFormGroup.controls.invoice_temperature.value-32)/1.8).toFixed(2):13==this.current_temperature_unit_of_measure?(+this.generalFormGroup.controls.invoice_temperature.value-273.15).toFixed(2):(+this.generalFormGroup.controls.invoice_temperature.value).toFixed(2)),!0)}getMysqlDate(t){return null!==t?t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2):""}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(Z.WI),e.Y36(Z.so),e.Y36(d.ux),e.Y36(h.x),e.Y36(x.w))},r.\u0275cmp=e.Xpm({type:r,selectors:[["fury-form-wizard"]],decls:91,vars:11,consts:[[1,"modal-table"],[1,"title"],["svgIcon","cfdi"],[1,"card"],[2,"margin","15px",3,"formGroup"],["fxLayout","row","fxLayoutGap","8px",1,"content"],["fxFlex","auto","appearance","outline"],["formControlName","cre_permission_id"],[3,"value",4,"ngFor","ngForOf"],["formControlName","invoice_number1","matInput","","required",""],["formControlName","invoice_number2","matInput","","required",""],["appearance","outline","fxFlex","auto",1,"field"],["matInput","","formControlName","invoice_date","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["matDatepickerToggleIcon",""],["color","primary"],["invoiceDate",""],["formControlName","volume_unit_of_measure_id",3,"selectionChange"],["formControlName","temperature_unit_of_measure_id",3,"selectionChange"],["formControlName","currency_id",3,"selectionChange"],["formControlName","currency_exchange_rate","matInput","","required","","id","currency_exchange_rate",3,"keyup"],["formControlName","invoice_volume","matInput","","required","","id","invoice_volume",3,"keyup"],["formControlName","invoice_volume_liters","matInput","","required","","readonly",""],["formControlName","invoice_temperature","matInput","","required","","id","invoice_temperature",3,"keyup"],["formControlName","invoice_temperature_celsius","matInput","","required","","readonly",""],["formControlName","invoice_ppv","matInput","","required","","id","invoice_ppv",3,"keyup"],["formControlName","invoice_ppv_pesos","matInput","","required","","readonly",""],["formControlName","invoice_total_price","matInput","","required","","id","invoice_total_price",3,"keyup"],["formControlName","invoice_total_price_pesos","matInput","","required","","readonly",""],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","8px",1,"actions"],["color","primary","mat-raised-button","",3,"click"],["color","primary","mat-raised-button","",3,"disabled","click"],[3,"value"]],template:function(t,s){if(1&t&&(e.TgZ(0,"fury-page",0),e.TgZ(1,"fury-title",1),e._UZ(2,"mat-icon",2),e.TgZ(3,"span"),e._uU(4,"Facturas"),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"form",4),e.TgZ(7,"div",5),e.TgZ(8,"mat-form-field",6),e.TgZ(9,"mat-label"),e._uU(10,"Proveedor:"),e.qZA(),e.TgZ(11,"mat-select",7),e.YNc(12,H,2,2,"mat-option",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",5),e.TgZ(14,"mat-form-field",6),e.TgZ(15,"mat-label"),e._uU(16,"Folio de factura:"),e.qZA(),e._UZ(17,"input",9),e.qZA(),e.TgZ(18,"mat-form-field",6),e.TgZ(19,"mat-label"),e._uU(20,"UUID:"),e.qZA(),e._UZ(21,"input",10),e.qZA(),e.TgZ(22,"mat-form-field",11),e.TgZ(23,"mat-label"),e._uU(24,"Fecha de la factura:"),e.qZA(),e._UZ(25,"input",12),e.TgZ(26,"mat-datepicker-toggle",13),e.TgZ(27,"mat-icon",14),e._uU(28,"date_range"),e.qZA(),e.qZA(),e._UZ(29,"mat-datepicker",15,16),e.qZA(),e.qZA(),e.TgZ(31,"div",5),e.TgZ(32,"mat-form-field",6),e.TgZ(33,"mat-label"),e._uU(34,"Unidad de medida de volumen:"),e.qZA(),e.TgZ(35,"mat-select",17),e.NdJ("selectionChange",function(u){return s.onChangeVolumeUnitOfMeasure(u.value)}),e.YNc(36,W,2,2,"mat-option",8),e.qZA(),e.qZA(),e.TgZ(37,"mat-form-field",6),e.TgZ(38,"mat-label"),e._uU(39,"Unidad de medida de temperatura:"),e.qZA(),e.TgZ(40,"mat-select",18),e.NdJ("selectionChange",function(u){return s.onChangeTemperatureUnitOfMeasure(u.value)}),e.YNc(41,Y,2,2,"mat-option",8),e.qZA(),e.qZA(),e.TgZ(42,"mat-form-field",6),e.TgZ(43,"mat-label"),e._uU(44,"Moneda:"),e.qZA(),e.TgZ(45,"mat-select",19),e.NdJ("selectionChange",function(u){return s.onChangeCurrency(u.value)}),e.YNc(46,$,2,2,"mat-option",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(47,"div",5),e.TgZ(48,"mat-form-field",6),e.TgZ(49,"mat-label"),e._uU(50,"Tipo de cambio:"),e.qZA(),e.TgZ(51,"input",20),e.NdJ("keyup",function(u){return s.numericOnly(u)}),e.qZA(),e.qZA(),e.TgZ(52,"mat-form-field",6),e.TgZ(53,"mat-label"),e._uU(54,"Volumen documentado:"),e.qZA(),e.TgZ(55,"input",21),e.NdJ("keyup",function(u){return s.numericOnly(u)}),e.qZA(),e.qZA(),e.TgZ(56,"mat-form-field",6),e.TgZ(57,"mat-label"),e._uU(58,"Volumen documentado en litros:"),e.qZA(),e._UZ(59,"input",22),e.qZA(),e.qZA(),e.TgZ(60,"div",5),e.TgZ(61,"mat-form-field",6),e.TgZ(62,"mat-label"),e._uU(63,"Temperatura documentada:"),e.qZA(),e.TgZ(64,"input",23),e.NdJ("keyup",function(u){return s.numericOnly(u)}),e.qZA(),e.qZA(),e.TgZ(65,"mat-form-field",6),e.TgZ(66,"mat-label"),e._uU(67,"Temperatura documentada en grados celsius"),e.qZA(),e._UZ(68,"input",24),e.qZA(),e.TgZ(69,"mat-form-field",6),e.TgZ(70,"mat-label"),e._uU(71,"Precio por volumen documentado:"),e.qZA(),e.TgZ(72,"input",25),e.NdJ("keyup",function(u){return s.numericOnly(u)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"div",5),e.TgZ(74,"mat-form-field",6),e.TgZ(75,"mat-label"),e._uU(76,"Precio por volumen en pesos:"),e.qZA(),e._UZ(77,"input",26),e.qZA(),e.TgZ(78,"mat-form-field",6),e.TgZ(79,"mat-label"),e._uU(80,"Precio total documentado"),e.qZA(),e.TgZ(81,"input",27),e.NdJ("keyup",function(u){return s.numericOnly(u)}),e.qZA(),e.qZA(),e.TgZ(82,"mat-form-field",6),e.TgZ(83,"mat-label"),e._uU(84,"Precio total en pesos:"),e.qZA(),e._UZ(85,"input",28),e.qZA(),e.qZA(),e.TgZ(86,"div",29),e.TgZ(87,"button",30),e.NdJ("click",function(){return s.close()}),e._uU(88,"CANCELAR"),e.qZA(),e.TgZ(89,"button",31),e.NdJ("click",function(){return s.submit()}),e._uU(90,"GUARDAR"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const c=e.MAs(30);e.xp6(2),e.Q6J("@scaleIn",void 0),e.xp6(1),e.Q6J("@fadeInRight",void 0),e.xp6(2),e.Q6J("@fadeInUp",void 0),e.xp6(1),e.Q6J("formGroup",s.generalFormGroup),e.xp6(6),e.Q6J("ngForOf",s.providers),e.xp6(13),e.Q6J("matDatepicker",c),e.xp6(1),e.Q6J("for",c),e.xp6(10),e.Q6J("ngForOf",s.vmus),e.xp6(5),e.Q6J("ngForOf",s.tmus),e.xp6(5),e.Q6J("ngForOf",s.currencies),e.xp6(43),e.Q6J("disabled",s.generalFormGroup.invalid)}},directives:[k.i,A.M,F.Hw,a._Y,a.JL,a.sg,U.xw,U.SQ,R.KE,U.yH,R.hX,J.gD,a.JJ,a.u,o.sg,a.Fj,B.Nt,a.Q7,E.hl,E.nW,R.R9,E.Q0,E.Mq,U.Wh,D.lW,Q.ey],styles:[".title[_ngcontent-%COMP%]{color:#000}.card[_ngcontent-%COMP%]{overflow:scroll;height:550px;width:700px;margin:20px;border-radius:8px;padding:5px;box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.card[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font:var(--font-title)}.card[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{font:var(--font-subheading-1)}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:5px}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{max-width:32.5%}.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-top:12px}.card[_ngcontent-%COMP%]   .information-block[_ngcontent-%COMP%]{border-radius:10px;padding:10px;border:solid gray;border-top-width:thin;border-right-width:thin;border-bottom-width:thin;border-left-width:thin;width:100%}.card[_ngcontent-%COMP%]   .validation-block[_ngcontent-%COMP%]{border-radius:10px;padding:10px;border:solid gray;border-top-width:thin;border-right-width:thin;border-bottom-width:thin;border-left-width:thin;width:410px}.card[_ngcontent-%COMP%]   .validation-block[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.card[_ngcontent-%COMP%]   .validation-block[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px;width:245px}.card[_ngcontent-%COMP%]   .validation-block[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:0;width:245px}.card[_ngcontent-%COMP%]   .text-icon[_ngcontent-%COMP%]{max-width:49.5%}.card[_ngcontent-%COMP%]   .indented-right[_ngcontent-%COMP%]{margin-left:10px}.card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:24px;padding:24px 8px 0}.readonly-wrapper[_ngcontent-%COMP%]{cursor:not-allowed!important}.readonly-wrapper[_ngcontent-%COMP%]   .readonly-block[_ngcontent-%COMP%]{pointer-events:none!important}.modal-table[_ngcontent-%COMP%]{width:740px;padding:1px}"],data:{animation:[O.X,P.M,G.K]}}),r})();var V=n(39762),K=n(53580),z=n(38932),j=n(19165),X=n(94927),w=n(92181);function ee(r,m){if(1&r&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&r){const t=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",t.name,"")}}function te(r,m){if(1&r&&(e.TgZ(0,"td",18),e._uU(1),e.qZA()),2&r){const t=m.$implicit,s=e.oxw(2).$implicit,c=e.oxw();e.xp6(1),e.Oqu(c.getLabel(s.name,t[s.property]))}}function ie(r,m){if(1&r&&(e.ynx(0,14),e.YNc(1,ee,2,1,"th",15),e.YNc(2,te,2,1,"td",16),e.BQk()),2&r){const t=e.oxw().$implicit;e.Q6J("matColumnDef",t.property)}}function re(r,m){if(1&r&&(e.ynx(0),e.YNc(1,ie,3,1,"ng-container",13),e.BQk()),2&r){const t=m.$implicit;e.xp6(1),e.Q6J("ngIf",t.isModelProperty)}}function oe(r,m){1&r&&e._UZ(0,"th",19)}function ne(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit;return e.oxw().assignRemissions(c)}),e.TgZ(1,"span"),e._uU(2,"Asociar remisiones"),e.qZA(),e.qZA()}}function ae(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit;return e.oxw().assignTankDeliveryReadings(c)}),e.TgZ(1,"span"),e._uU(2,"Asociar incremento TLS"),e.qZA(),e.qZA()}}function se(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit;return e.oxw().assignPumpDeliveryReadings(c)}),e.TgZ(1,"span"),e._uU(2,"Asociar incremento por bomba"),e.qZA(),e.qZA()}}function le(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit;return e.oxw().assignWeighingMachineReadings(c)}),e.TgZ(1,"span"),e._uU(2,"Asociar pesaje"),e.qZA(),e.qZA()}}function ce(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"td",20),e.TgZ(1,"button",21),e.NdJ("click",function(c){return c.stopPropagation()}),e.TgZ(2,"mat-icon"),e._uU(3,"more_horiz"),e.qZA(),e.qZA(),e.TgZ(4,"mat-menu",22,23),e.TgZ(6,"button",24),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw().updateInvoice(u)}),e.TgZ(7,"span"),e._uU(8,"Editar"),e.qZA(),e.qZA(),e.YNc(9,ne,3,0,"button",25),e.YNc(10,ae,3,0,"button",25),e.YNc(11,se,3,0,"button",25),e.YNc(12,le,3,0,"button",25),e.qZA(),e.qZA()}if(2&r){const t=m.$implicit,s=e.MAs(5);e.xp6(1),e.Q6J("matMenuTriggerFor",s),e.xp6(8),e.Q6J("ngIf",2==t.status),e.xp6(1),e.Q6J("ngIf",2==t.status),e.xp6(1),e.Q6J("ngIf",2==t.status),e.xp6(1),e.Q6J("ngIf",2==t.status)}}function ue(r,m){1&r&&e._UZ(0,"tr",26)}function me(r,m){if(1&r){const t=e.EpF();e.TgZ(0,"tr",27),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw().updateInvoice(u)}),e.qZA()}}const _e=function(){return["Tables"]},de=[{path:"",component:(()=>{class r{constructor(t,s,c,u){this.dialog=t,this._invoicesService=s,this._crePermissionsService=c,this.snackbar=u,this.subject$=new S.t(1),this.data$=this.subject$.asObservable(),this.invoices=[],this.vmus=[],this.tmus=[],this.currencies=[],this.providers=[],this.columns=[{name:"Proveedor",property:"cre_permission_id",visible:!0,isModelProperty:!0},{name:"Id factura",property:"invoice_id",visible:!1,isModelProperty:!0},{name:"Folio de factura",property:"invoice_number1",visible:!0,isModelProperty:!0},{name:"Folio de factura 2",property:"invoice_number2",visible:!1,isModelProperty:!0},{name:"Fecha de factura",property:"invoice_date",visible:!0,isModelProperty:!0},{name:"Unidad de medida de volumen",property:"volume_unit_of_measure_id",visible:!1,isModelProperty:!0},{name:"Unidad de medidad de temperatura",property:"temperature_unit_of_measure_id",visible:!1,isModelProperty:!0},{name:"Moneda",property:"currency_id",visible:!1,isModelProperty:!0},{name:"Tipo de cambio",property:"currency_exchange_rate",visible:!1,isModelProperty:!0},{name:"Volumen en documento",property:"invoice_volume",visible:!1,isModelProperty:!0},{name:"Volumen en litros",property:"invoice_volume_liters",visible:!0,isModelProperty:!0},{name:"Temperatura en documento",property:"invoice_temperature",visible:!1,isModelProperty:!0},{name:"Temperatura en celsius",property:"invoice_temperature_celsius",visible:!0,isModelProperty:!0},{name:"Precio por volumen en documento",property:"invoice_ppv",visible:!1,isModelProperty:!0},{name:"Precio por volumen en pesos",property:"invoice_ppv_pesos",visible:!0,isModelProperty:!0},{name:"Precio total en documento",property:"invoice_total_price",visible:!1,isModelProperty:!0},{name:"Precio total en pesos",property:"invoice_total_price_pesos",visible:!0,isModelProperty:!0},{name:"\xdaltima actualizaci\xf3n",property:"timestamp",visible:!0,isModelProperty:!0},{name:"Estatus",property:"status",visible:!0,isModelProperty:!0},{name:"Actions",property:"actions",visible:!0}],this.pageSize=10}getLabel(t,s){if(null!=t){if("Unidad de medida de volumen"==t){let c=this.vmus.find(u=>u.id===s);return c?c.unit_of_measure:s}if("Unidad de medidad de temperatura"==t){let c=this.tmus.find(u=>u.id===s);return c?c.unit_of_measure:s}if("Moneda"==t){let c=this.currencies.find(u=>u.id===s);return c?c.currency:s}if("Estatus"==t)return 2==s?"Activa":"Inactiva";if("Proveedor"==t){let c=this.providers.find(u=>u.permission_id===s);return c?c.provider_name:s}return s}}get visibleColumns(){return this.columns.filter(t=>t.visible).map(t=>t.property)}getData(){this._invoicesService.getAll().subscribe(t=>{console.log(t),this.invoices=t,this.dataSource=new v.by(t)},t=>{console.log(t)})}ngOnInit(){return(0,l.mG)(this,void 0,void 0,function*(){this.dataSource=new v.by,this.getData(),this.currencies=yield this.getCurrencies(),this.tmus=yield this.getTemperatureUnitsOfMeasure(),this.vmus=yield this.getVolumeUnitsOfMeasure(),this.providers=yield this.getProviders(),this.data$.pipe((0,M.h)(t=>!!t)).subscribe(t=>{this.invoices=t,this.dataSource.data=t})})}getVolumeUnitsOfMeasure(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getUnitsOfMeasure("volume").toPromise()})}getTemperatureUnitsOfMeasure(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getUnitsOfMeasure("temperature").toPromise()})}getCurrencies(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getCurrencies().toPromise()})}getProviders(){return(0,l.mG)(this,void 0,void 0,function*(){return yield this._crePermissionsService.getAllByType(3).toPromise()})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}createInvoice(){this.dialog.open(N).afterClosed().subscribe(t=>{t&&(this.subject$.next(this.invoices),this.getData(),this.data$.pipe((0,M.h)(s=>!!s)).subscribe(s=>{this.invoices=s,this.dataSource.data=s},s=>{this.snackbar.open(s.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})}))})}updateInvoice(t){this._invoicesService.getInvoice(t.invoice_id).subscribe(s=>{this.invoice=s,this.dialog.open(N,{data:this.invoice}).afterClosed().subscribe(c=>{c&&(this.subject$.next(this.invoices),this.getData(),this.data$.pipe((0,M.h)(u=>!!u)).subscribe(u=>{this.invoices=u,this.dataSource.data=u}))})},s=>{this.snackbar.open(s.error.message,null,{duration:5e3,panelClass:["red-snackbar"]})})}assignRemissions(t){this.snackbar.open("Asignar remisiones a "+t,null,{duration:5e3,panelClass:["green-snackbar"]})}assignTankDeliveryReadings(t){this.snackbar.open("Asignar tank delivery readings to "+t,null,{duration:5e3,panelClass:["green-snackbar"]})}assignPumpDeliveryReadings(t){this.snackbar.open("Asignar pump delivery readings to "+t,null,{duration:5e3,panelClass:["green-snackbar"]})}assignWeighingMachineReadings(t){this.snackbar.open("Asignar weighing machine readings to "+t,null,{duration:5e3,panelClass:["green-snackbar"]})}changeInvoiceStatus(t){}onFilterChange(t){!this.dataSource||(t=(t=t.trim()).toLowerCase(),this.dataSource.filter=t)}ngOnDestroy(){}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(Z.uw),e.Y36(h.x),e.Y36(x.w),e.Y36(d.ux))},r.\u0275cmp=e.Xpm({type:r,selectors:[["invoices-table"]],viewQuery:function(t,s){if(1&t&&(e.Gf(_.NW,7),e.Gf(b.YE,7)),2&t){let c;e.iGM(c=e.CRH())&&(s.paginator=c.first),e.iGM(c=e.CRH())&&(s.sort=c.first)}},inputs:{columns:"columns"},decls:17,vars:10,consts:[["mode","card"],["current","Facturas",3,"crumbs"],["name","Facturas",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["mat-table","","matSort","",3,"dataSource"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["mat-cell","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements",3,"click"]],template:function(t,s){1&t&&(e.TgZ(0,"fury-page-layout",0),e.TgZ(1,"fury-page-layout-header"),e._UZ(2,"fury-breadcrumbs",1),e.qZA(),e.TgZ(3,"fury-page-layout-content"),e.TgZ(4,"fury-list",2),e.NdJ("filterChange",function(u){return s.onFilterChange(u)}),e.TgZ(5,"div",3),e.TgZ(6,"button",4),e.NdJ("click",function(){return s.createInvoice()}),e.TgZ(7,"mat-icon"),e._uU(8,"add"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"table",5),e.YNc(10,re,2,1,"ng-container",6),e.ynx(11,7),e.YNc(12,oe,1,0,"th",8),e.YNc(13,ce,13,5,"td",9),e.BQk(),e.YNc(14,ue,1,0,"tr",10),e.YNc(15,me,1,0,"tr",11),e.qZA(),e._UZ(16,"mat-paginator",12),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("@fadeInRight",void 0)("crumbs",e.DdM(9,_e)),e.xp6(1),e.Q6J("@fadeInUp",void 0),e.xp6(1),e.Q6J("columns",s.columns),e.xp6(5),e.Q6J("dataSource",s.dataSource),e.xp6(1),e.Q6J("ngForOf",s.columns),e.xp6(4),e.Q6J("matHeaderRowDef",s.visibleColumns),e.xp6(1),e.Q6J("matRowDefColumns",s.visibleColumns),e.xp6(1),e.Q6J("pageSize",s.pageSize))},directives:[V.N,K.U,z.n,j.d,X.n,D.lW,F.Hw,v.BZ,b.YE,o.sg,v.w1,v.fO,v.Dz,v.as,v.nj,_.NW,o.O5,v.ge,b.nU,v.ev,w.p6,w.VK,w.OP,v.XQ,v.Gk],styles:[".clickable[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:[P.M,O.X]}}),r})()}];let pe=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[y.Bz.forChild(de)],y.Bz]}),r})();var ve=n(61620);const ge=[{path:"",component:N}];let he=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[y.Bz.forChild(ge)],y.Bz]}),r})();var L=n(70024);let fe=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[o.ez,a.u5,a.UX,f.q,ve.o9,Z.Is,B.c,D.ot,F.Ps,J.LD,he,p.Z,L.EC,L.Yy,L.K]]}),r})(),ye=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[o.ez,pe,a.u5,f.q,p.Z,fe,C.p,i.J]]}),r})()},95288:(T,g,n)=>{n.d(g,{w:()=>f});var o=n(40520),a=n(98545),i=n(5e3),C=n(33344);let f=(()=>{class p{constructor(l,_){this.http=l,this.tokenStorage=_}getHeaders(){var l=new o.WM,_=this.tokenStorage.getToken();return l.set("token",_||"{}")}getAll(){var l=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.CRE_PERMISSIONS,{headers:l})}create(l){var _=this.getHeaders();return this.http.post(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.CRE_PERMISSIONS,l,{headers:_})}update(l){var _=this.getHeaders();return this.http.put(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.CRE_PERMISSIONS+"/"+l.permission_id,l,{headers:_})}getCurrencies(){var l=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.CURRENCIES,{headers:l})}getUnitsOfMeasure(l){var _=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.UNITS_OF_MEASURE+"?type="+l,{headers:_})}getCrePermissionTypes(){var l=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.CRE_PERMISSION_TYPES,{headers:l})}getAllByType(l){var _=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.CRE_PERMISSIONS+"?cre_permission_type="+l,{headers:_})}}return p.\u0275fac=function(l){return new(l||p)(i.LFG(o.eN),i.LFG(C.i))},p.\u0275prov=i.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},24629:(T,g,n)=>{n.d(g,{x:()=>f});var o=n(40520),a=n(98545),i=n(5e3),C=n(33344);let f=(()=>{class p{constructor(l,_){this.http=l,this.tokenStorage=_}getHeaders(){var l=new o.WM,_=this.tokenStorage.getToken();return l.set("token",_||"{}")}getAll(l){var _=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.INVOICES+(l||""),{headers:_})}getInvoice(l){var _=this.getHeaders();return this.http.get(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.INVOICES+"/"+l,{headers:_})}create(l,_){var b=this.getHeaders();return this.http.post(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.INVOICES+_,l,{headers:b})}update(l){var _=this.getHeaders();return this.http.put(a._.settings.apiServer.API_URL_BASE+a._.settings.apiServer.INVOICES+"/"+l.invoice_id,l,{headers:_})}}return p.\u0275fac=function(l){return new(l||p)(i.LFG(o.eN),i.LFG(C.i))},p.\u0275prov=i.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
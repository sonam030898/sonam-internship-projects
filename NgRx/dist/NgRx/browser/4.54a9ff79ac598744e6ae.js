(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return k}));var n=i("3Pt+"),r=i("tyNb"),c=i("PCNd"),o=i("fXoL"),s=i("lJxs"),b=i("l7P3"),p=i("ofXK");const a=function(e){return[e]};let d=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(o.Kb(0,"a",0),o.Kb(1,"div",1),o.Kb(2,"h4",2),o.fc(3),o.Jb(),o.Kb(4,"p",3),o.fc(5),o.Jb(),o.Jb(),o.Kb(6,"span",4),o.Ib(7,"img",5),o.Jb(),o.Jb()),2&e&&(o.Wb("routerLink",o.Yb(5,a,t.index)),o.xb(3),o.gc(t.recipe.name),o.xb(2),o.gc(t.recipe.description),o.xb(2),o.Xb("alt",t.recipe.name),o.Wb("src",t.recipe.imagePath,o.cc))},directives:[r.i,r.h],styles:[""]}),e})();function u(e,t){if(1&e&&o.Ib(0,"app-recipe-item",4),2&e){const e=t.index;o.Wb("recipe",t.$implicit)("index",e)}}let l=(()=>{class e{constructor(e,t,i){this.router=e,this.route=t,this.store=i}ngOnInit(){this.subscription=this.store.select("recipes").pipe(Object(s.a)(e=>e.recipes)).subscribe(e=>{this.recipes=e})}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(r.g),o.Hb(r.a),o.Hb(b.h))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Kb(2,"button",2),o.Rb("click",(function(){return t.onNewRecipe()})),o.fc(3,"New Recipe"),o.Jb(),o.Jb(),o.Jb(),o.Ib(4,"hr"),o.Kb(5,"div",0),o.Kb(6,"div",1),o.ec(7,u,1,2,"app-recipe-item",3),o.Jb(),o.Jb()),2&e&&(o.xb(7),o.Wb("ngForOf",t.recipes))},directives:[p.i,d],styles:[""]}),e})(),m=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Ib(2,"app-recipe-list"),o.Jb(),o.Kb(3,"div",2),o.Ib(4,"router-outlet"),o.Jb(),o.Jb())},directives:[l,r.k],styles:[""]}),e})();var g=i("P+IX");let f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(o.Kb(0,"h3"),o.fc(1,"Please select a Recipe!"),o.Jb())},styles:[""]}),e})();var h=i("g0Sx"),v=i("ceC1");function J(e,t){if(1&e){const e=o.Lb();o.Kb(0,"div",17),o.Kb(1,"div",18),o.Ib(2,"input",19),o.Jb(),o.Kb(3,"div",20),o.Ib(4,"input",21),o.Jb(),o.Kb(5,"div",20),o.Kb(6,"button",22),o.Rb("click",(function(){o.bc(e);const i=t.index;return o.Tb().onDeleteIngredients(i)})),o.fc(7,"X"),o.Jb(),o.Jb(),o.Jb()}2&e&&o.Wb("formGroupName",t.index)}let K=(()=>{class e{constructor(e,t,i,n){this.route=e,this.recipeService=t,this.router=i,this.store=n,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}onSubmit(){this.store.dispatch(this.editMode?new h.l({index:this.id,newRecipe:this.recipeForm.value}):new h.b(this.recipeForm.value)),this.onCancel()}onAddIngredients(){this.recipeForm.get("ingredients").push(new n.g({name:new n.e(null,n.t.required),amount:new n.e(null,[n.t.required,n.t.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredients(e){this.recipeForm.get("ingredients").removeAt(e)}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.storeSub&&this.storeSub.unsubscribe()}initForm(){let e="",t="",i="",r=new n.c([]);this.editMode&&(this.storeSub=this.store.select("recipes").pipe(Object(s.a)(e=>e.recipes.find((e,t)=>t==this.id))).subscribe(c=>{if(e=c.name,t=c.imagePath,i=c.description,c.ingredients)for(let e of c.ingredients)r.push(new n.g({name:new n.e(e.name,n.t.required),amount:new n.e(e.amount,[n.t.required,n.t.pattern(/^[1-9]+[0-9]*$/)])}))})),this.recipeForm=new n.g({name:new n.e(e,n.t.required),imagePath:new n.e(t,n.t.required),description:new n.e(i,n.t.required),ingredients:r})}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(r.a),o.Hb(v.a),o.Hb(r.g),o.Hb(b.h))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-edit"]],decls:38,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",2,"margin-right","10px",3,"disabled"],["type","submit",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",2,"margin-top","10px",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,t){if(1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Kb(2,"form",2),o.Rb("ngSubmit",(function(){return t.onSubmit()})),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"button",3),o.fc(6,"Save"),o.Jb(),o.Kb(7,"button",4),o.Rb("click",(function(){return t.onCancel()})),o.fc(8,"Cancel"),o.Jb(),o.Jb(),o.Jb(),o.Kb(9,"div",0),o.Kb(10,"div",1),o.Kb(11,"div",5),o.Kb(12,"label",6),o.fc(13,"Name"),o.Jb(),o.Ib(14,"input",7),o.Jb(),o.Jb(),o.Jb(),o.Kb(15,"div",0),o.Kb(16,"div",1),o.Kb(17,"div",5),o.Kb(18,"label",8),o.fc(19,"Image Url"),o.Jb(),o.Ib(20,"input",9,10),o.Jb(),o.Jb(),o.Jb(),o.Kb(22,"div",0),o.Kb(23,"div",1),o.Ib(24,"img",11),o.Jb(),o.Jb(),o.Kb(25,"div",0),o.Kb(26,"div",1),o.Kb(27,"div",5),o.Kb(28,"label",12),o.fc(29,"Description"),o.Jb(),o.Ib(30,"textarea",13),o.Jb(),o.Jb(),o.Jb(),o.Kb(31,"div",0),o.Kb(32,"div",14),o.ec(33,J,8,1,"div",15),o.Kb(34,"div",0),o.Kb(35,"div",1),o.Kb(36,"button",16),o.Rb("click",(function(){return t.onAddIngredients()})),o.fc(37,"Add Ingredients"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb()),2&e){const e=o.ac(21);o.xb(2),o.Wb("formGroup",t.recipeForm),o.xb(3),o.Wb("disabled",!t.recipeForm.valid),o.xb(19),o.Wb("src",e.value,o.cc),o.xb(9),o.Wb("ngForOf",t.recipeForm.get("ingredients").controls)}},directives:[n.u,n.m,n.h,n.a,n.l,n.f,n.d,p.i,n.i,n.p],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var x=i("eIep"),w=i("3V6w");function y(e,t){if(1&e&&(o.Kb(0,"li",10),o.fc(1),o.Jb()),2&e){const e=t.$implicit;o.xb(1),o.ic(" ",e.name," - ",e.amount," ")}}let I=(()=>{class e{constructor(e,t,i,n){this.recipeService=e,this.route=t,this.router=i,this.store=n}ngOnInit(){this.route.params.pipe(Object(s.a)(e=>+e.id),Object(x.a)(e=>(this.id=e,this.store.select("recipes"))),Object(s.a)(e=>e.recipes.find((e,t)=>t===this.id))).subscribe(e=>{this.recipe=e})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.store.dispatch(new h.d(this.id)),this.router.navigate(["/recipes"])}}return e.\u0275fac=function(t){return new(t||e)(o.Hb(v.a),o.Hb(r.a),o.Hb(r.g),o.Hb(b.h))},e.\u0275cmp=o.Bb({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(o.Kb(0,"div",0),o.Kb(1,"div",1),o.Ib(2,"img",2),o.Jb(),o.Jb(),o.Kb(3,"div",0),o.Kb(4,"div",1),o.Kb(5,"h1"),o.fc(6),o.Jb(),o.Jb(),o.Jb(),o.Kb(7,"div",0),o.Kb(8,"div",1),o.Kb(9,"div",3),o.Kb(10,"button",4),o.fc(11," Manage Recipe "),o.Ib(12,"span",5),o.Jb(),o.Kb(13,"ul",6),o.Kb(14,"li"),o.Kb(15,"a",7),o.Rb("click",(function(){return t.onAddToShoppingList()})),o.fc(16,"To Shopping List"),o.Jb(),o.Jb(),o.Kb(17,"li"),o.Kb(18,"a",7),o.Rb("click",(function(){return t.onEditRecipe()})),o.fc(19,"Edit Recipe"),o.Jb(),o.Jb(),o.Kb(20,"li"),o.Kb(21,"a",7),o.Rb("click",(function(){return t.onDeleteRecipe()})),o.fc(22,"Delete Recipe"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(23,"div",0),o.Kb(24,"div",1),o.fc(25),o.Jb(),o.Jb(),o.Kb(26,"div",0),o.Kb(27,"div",1),o.Kb(28,"ul",8),o.ec(29,y,2,2,"li",9),o.Jb(),o.Jb(),o.Jb()),2&e&&(o.xb(2),o.Xb("alt",t.recipe.name),o.Wb("src",t.recipe.imagePath,o.cc),o.xb(4),o.gc(t.recipe.name),o.xb(19),o.hc(" ",t.recipe.description," "),o.xb(4),o.Wb("ngForOf",t.recipe.ingredients))},directives:[w.a,p.i],styles:[""]}),e})();var F=i("GBzd");const O=[{path:"",component:m,canActivate:[g.a],children:[{path:"",component:f},{path:"new",component:K},{path:":id",component:I,resolve:[F.a]},{path:":id/edit",component:K,resolve:[F.a]}]}];let R=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(O)],r.j]}),e})(),k=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(t){return new(t||e)},imports:[[n.r,r.j,c.a,R]]}),e})()}}]);
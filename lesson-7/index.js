// calculator

// let Сalc = function(){
//     this.get = function(){
//         this.a = +prompt('Введите число а');
//         this.b = +prompt('Введите число b');
//         this.oper = prompt('Введите операцию: +,-,*,/ ');

//         this.operation();
//     };

//     this.operation = function(){
//         switch(this.oper) {
//             case '+':
//                 this.result = this.a + this.b;
//                 break;
//             case '-':
//                 this.result = this.a - this.b;
//                 break;
//             case '*':
//                 this.result = this.a * this.b;
//                 break;
//             case '/':
//                 this.result = this.a / this.b;
//                 break;
//             default: this.result = 0;
//         }
//         this.show();
//     };

//     this.show = function(){
//         alert(this.a + '' + this.oper + '' + this.b + '=' + this.result)
//     };
// };

// let calc = new Сalc();
// calc.get();


// chainik
// let Сhainik = function(){


//     this.get = function(){
//         this.a = +prompt('Какая мощность вашего чайника, Вт');
//         this.c = +prompt('Какое количество воды кипятим?,Л');

//         this.calculation();
//     };

//     this.calculation = function(){
//         this.result = (((4200 * this.c) / 80)/this.a)*60;
        
//         this.show();

//     };
    
//     this.show = function(){
//         alert(this.result + 'мин')
//     };
// };

// let chainik = new Сhainik();
// chainik.get();


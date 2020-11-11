/**
 * Video do Lucas Montano
 * https://www.youtube.com/watch?v=mKJSz6rn06c
 */

 function reverseArray(a) {
   let ponteiroMenor = 0;
   let ponteiroMaior = a.length - 1; // é - 1 pois estamos usando o indice do array

   while (ponteiroMenor < ponteiroMaior) {
    // swap
      let tmp = a[ponteiroMenor];

      a[ponteiroMenor] = a[ponteiroMaior];
      a[ponteiroMaior] = tmp;

      ponteiroMenor++
     ponteiroMaior--
   };
   return a;
 };

 console.log(reverseArray([1,2,3,4]));
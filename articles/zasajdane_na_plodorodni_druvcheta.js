
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }





// document.write('\
// 	<div class="wp-block-group has-global-padding is-content-justification-left is-layout-constrained wp-container-31 wp-block-group-is-layout-constrained expanded-articale" style = "display:none">\
// 		\
// 		<h2 class="wp-block-heading has-text-align-left has-xxx-large-font-size" style="margin-top:var(--wp--preset--spacing--40);font-style:normal;font-weight:800;line-height:0.9;text-transform:uppercase">Засаждане на здрави и плодородни дръвчета</h2>\
// 		\
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Чудили ли сте се как да направите така, че вашите дръвчета да бъдат здрави и плодородни в края на сезона, е на правилното място сте. За добрата реколта, добрият старт е толкова важен, колкото и последващите грижи. В тази статия ще опиша начините и принципите, по които аз съм засадил моите дръвчета, използвайки методите на регенеративното земеделие. Някои от ползите включващи този вид засяване са: по-голяма влажност през сухите периоди, устойчивост към болести по дърветата както и по-добро усвояване на хранителните вещества и менерали от почвата.</p>\
//         \
// 		<h3 class="wp-block-heading" style="text-transform:uppercase">Нужни материали:</h3>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Зеолит</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Поради порестата си структора, той поема влагата до 60% от своето тегло, задържайки я дори и през сухите периоди. По този начин се повишава устойчивостта на младите дръвчета. Също така е добре да се използва в песъчли почви, където водата се просмуква в почвата твърде бързо, докато наличието му в глинести предотвратява компактирането и помага за аерирането и. Дори някои производители твърдят, че зеолитът помага развитието на корените.</p>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Натрошени керемиди</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Ползата от керемидите е същата като при зеолита, с други думи те са по-евтината алтернатива, но за предпочитане е зеолитът.</p>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Фунгицид и бактериацид</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Тези полезни микроорганизми образуват симбиоза с кореновата система на дръвчетата, като по тозин начин имат следните ползи, ускоряват развитието на кореновата система, предпазват дърветата от болестите в почвата, осигуряват вода и хранителни вещества.[2]  Разтворът трябва да се прави с НЕхлорирана вода, такава може да е дъждовна, от кладенец или от поток, като за последната трябва да сме сигурни, че е чиста, в противен случай микроорганизмите ще загинат.</p>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Компост</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)"> Той се използва за естествено наторяване на почвата, подорбява цялостното здраве на почвата, осигурява благоприятни условия за ,,добрите“ микроорганизми, задържа въглерода, хранителните вещества и влагата в почвата.</p>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Торф</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Поради рехавата си структура предотвратява компактиране на почвата и улеснява развитието на корените. Искам да отбележа, че той повишава киселинността на почвата, това трябва да се вземе предвид при избора да видове дръвчета, макар че те са привърженици на високото Ph.</p>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Тор от червен калифорнийски червей</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Това са преработена от чевеите отпадъци, когови за моментално освояване от страна на дърветата, осигуряващи добър старт за тяхното развитие.</p>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Картон и слама</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Те имат три основни и еднакви фукнции: подтискат плевелите, предпазват почвата от директна слънчева светлина повишавайки влагата и запазвайки температурата на почвата ниска и разграждайки се, след време ще осигурят храна на дърветата.</p>\
//         \
// 		<h4 class="wp-block-heading has-small-font-size" style="text-transform:uppercase">Мрежа</h4>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Тя предпазва основата на дървото от гризачи, може да е както метална така и синтетична.</p>\
//         \
// 		<h3 class="wp-block-heading" style="text-transform:uppercase">План за действие</h3>\
//         \
// 		<p style="margin-top:var(--wp--preset--spacing--40)">Изкопаването на дупката е хубаво да се направи със свредели неспосредствено преди засаждането, за да не се разтройват микроорганизмите в почвата. Преди засаждането на фиданките корените им трябва да се накиснат в нехлорирана вода с разтворени в нея фунгициди и бакрериациди за 12-24 часа, разтворът не трябва да е изложен на пряка слънчева светлина. Диаметърът на дупките трябва да поне 70 см. а дълбочината 100 см. Преди започване на засаждането трябва да се направи същия разтвор, с който ще пръскаме в дупките.\
// 			Подготвянето на дупките започва с поръсване на 2-3 шепи зеолит на дъното на всяка дупката, след края той трябва да е с дебелина един пръст. След това трябва да да го напръскаме с направения разтвор. Върху зеолита поставяме една шепа натрошени керемиди.  В отделен контейнер трябва да трябва да сме приготвили смес от пръст, компост, тор от червен калифорнийски чевей и торф в съотношение 50:15:20:15, (съотношението може да търпи леки изменения в зависимост от почвата) може да се използва пръстта от дупките. Докато се подготвя сместта е препоръчително е да се добавят 1-2 шефи зеолит. След засаждането му, земята около него се покрива с дебел картон, или с няколко пласта вестсникарска хартия. След което се покрива със слама. Накравя стъблото се огражда с мрежа и дървото се полива с обилно количество вода. \
// 		</p>\
//         \
// 	</div>\
//         \
//         \
// <div class="wp-block-group has-global-padding is-content-justification-left is-layout-constrained wp-container-31 wp-block-group-is-layout-constrained expanded-articale" style = "display:block">\
// 		\
// 	<h2 class="wp-block-heading has-text-align-left has-xxx-large-font-size" style="margin-top:var(--wp--preset--spacing--40);font-style:normal;font-weight:800;line-height:0.9;text-transform:uppercase">Засаждане на здрави и плодородни дръвчета</h2>\
//         \
//     <style id="row-bg">.row{\
//         overflow:hidden;\
//         text-overflow: ellipsis;\
//         content: "";\
//         position:relative;\
//     }\
//     .row:before {\
//         content:'+"''"+';\
//         width:100%;\
//         height:100%;\
//         position:absolute;\
//         left:0;\
//         top:0;\
//         background:linear-gradient(transparent 80px, white);\
//     }\
//     </style>\
//             <p class="row" style="margin-top:var(--wp--preset--spacing--40)">Чудили ли сте се как да направите така, че вашите дръвчета да бъдат здрави и плодородни в края на сезона, е на правилното място сте. За добрата реколта, добрият старт е толкова важен, колкото и последващите грижи. В тази статия ще опиша начините и принципите, по които аз съм засадил моите дръвчета, използвайки методите на регенеративното земеделие. Някои от ползите включващи този вид засяване са: по-голяма влажност през сухите периоди, устойчивост към болести по дърветата както и по-добро усвояване на хранителните вещества и менерали от почвата.</p>\
//             \
//     <div class="wp-block-group has-base-color has-contrast-background-color has-text-color has-background has-global-padding is-layout-constrained wp-block-group-is-layout-constrained" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:var(--wp--preset--spacing--60);padding-bottom:5px;padding-left:var(--wp--preset--spacing--60);border-radius: 25px">\
//         \
//         <div class="wp-block-columns is-layout-flex wp-container-29 wp-block-columns-is-layout-flex">\
//             \
//             <div class="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style="flex-basis:38%">\
//             \
//                 <h2 class="wp-block-heading has-base-color has-text-color has-small-font-size" style="margin-top:8px;font-style:normal;font-weight:700"></h2>\
// 			\
//             </div>\
//             \
//             \
//             \
//             <div class="wp-block-column is-layout-flow wp-container-28 wp-block-column-is-layout-flow" style="flex-basis:50%">\
//                 <p class="has-xx-large-font-size" style="font-style:italic;font-weight:400"></p>\
//                 \
//                 <p class="has-small-font-size" style="margin-top:var(--wp--preset--spacing--0);height: 26px;width: 300px;">Прочети повече\
//                 </p>\
//                 \
//             </div>\
//             \
//         </div>\
//         \
//     </div>\
//     \
// </div>\
// ')
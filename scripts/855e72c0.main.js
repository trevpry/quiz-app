"use strict";var questions=[{work:"Don Giovanni",choices:{beethoven:"Ludwig van Beethoven",mozart:"Wolfgang Amadeus Mozart",bach:"Johann Sebastian Bach",stravinsky:"Igor Stravinsky"},answer:"mozart"},{work:"Swan Lake",choices:{tchaikovsky:"Piotr Ilyitch Tchaikovsky",handel:"Georg Frideric Handel",prokofiev:"Sergei Prokofiev",puccini:"Giacomo Puccini"},answer:"tchaikovsky"},{work:"The Four Seasons",choices:{rossini:"Gioacchino Rossini",verdi:"Giuseppe Verdi",haydn:"Franz Joseph Haydn",vivaldi:"Antonio Vivaldi"},answer:"vivaldi"},{work:'Symphony Number 9, "Ode to Joy"',choices:{beethoven:"Ludwig van Beethoven",handel:"Georg Frideric Handel",wagner:"Richard Wagner",donizetti:"Gaetano Donizetti"},answer:"beethoven"},{work:"Appalachian Spring",choices:{barber:"Samuel Barber",bernstein:"Leonard Bernstein",copland:"Aaron Copland",elgar:"Edward Elgar"},answer:"copland"}];$(document).ready(function(){function a(){$(".start").hide(),$(".quiz").show(),$("body").css({background:"#81d2ff"}),b(0)}function b(a){var b=1,c=questions[a];$(".work-title").text(c.work);for(var d in c.choices)$("#q"+b).attr("value",d),$("#q"+b).next().text(c.choices[d]),b++}var c=0,d=0,e=function(){return'<div class="finished">Congratulations! You got '+d+' questions right.<div class="button" id="restart-button">Try Again</div></div>'};$(document).on("click","#start-button",function(){a()}),$(document).on("click","#restart-button",function(){c=0,d=0,$("#answered").text("0"),$(".icons i").removeClass("completed"),$(".quiz").children().show(),$(".finished").remove(),a()}),$(document).on("click","#submit-button",function(){$("input:checked").attr("value")===questions[c].answer&&($("#prog-"+d).addClass("completed"),d++),c===questions.length-1?($(".quiz").children().hide(),$(".quiz").append(e)):($("input:checked").prop("checked",!1),$("#answered").text(c+1),b(++c))})});
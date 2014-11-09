'use strict';

$(document).ready(function() {
    var questionNo = 0;
    var correct = 0;
    var finished = function(){
        return '<div class="finished">Congratulations! You got ' + correct + ' questions right.' +
            '<div class="button" id="restart-button">Try Again</div></div>';
    };

    $(document).on('click', '#start-button', function(){
        startGame();
    });

    $(document).on('click', '#restart-button', function(){
        questionNo = 0;
        correct = 0;
        $('#answered').text('0');
        $('.icons i').removeClass('completed');
        $('.quiz').children().show();
        $('.finished').remove();
        startGame();
    });

    $(document).on('click', '#submit-button', function(){

        if ($('input:checked').attr('value') === questions[questionNo].answer) {
            $('#prog-' + correct).addClass('completed');
            correct++;
        }

        if (questionNo === (questions.length - 1)){
            $('.quiz').children().hide();
            $('.quiz').append(finished);
        } else {
            $('input:checked').prop('checked', false);
            $('#answered').text(questionNo + 1);
            showQuestion(++questionNo);
        }
    });

    function startGame(){
        $('.start').hide();
        $('.quiz').show();
        $('body').css({background: '#81d2ff'});

        showQuestion(0);
    }

    function showQuestion(number){
        var i = 1;
        var question = questions[number];
        $('.work-title').text(question.work);

        for (var choice in question.choices){
            $('#q' + i).attr('value', choice);
            $('#q' + i).next().text(question.choices[choice]);
            i++;
        }
    }
});
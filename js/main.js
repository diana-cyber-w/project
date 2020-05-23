$(function(){
    $('.product-one__tabs .tab,setting__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs,setting__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 1000,
            from:0,
            to: 900,
            prefix: ""
        });
        var balli = 0;
        $('.right1').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right1').addClass('none');
        });
        $('.right2').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right2').addClass('none');
        });
        $('.right3').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right3').addClass('none');
        });
        $('.right4').on('click',function(){
            balli++;
            $('.schet').html(balli);
            $('.right4').addClass('none');
        });
        
        $('.error1').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error1').addClass('none');
        });
        $('.error2').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error2').addClass('none');
        });
        $('.error3').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error3').addClass('none');
        });
        $('.error4').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error4').addClass('none');
        });
        $('.error5').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error5').addClass('none');
        });
        $('.error6').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error6').addClass('none');
        });
        $('.error7').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error7').addClass('none');
        });
        $('.error8').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error8').addClass('none');
        });
        $('.error9').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error9').addClass('none');
        });
        $('.error10').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error10').addClass('none');
        });
        $('.error11').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error11').addClass('none');
        });
        $('.error12').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error12').addClass('none');
        });
        $('.error13').on('click',function()
        {
            balli--;
            $('.schet').html(balli);
            $('.error13').addClass('none');
        });
          
    });
    const $pong = $('#pong');
    const $playerPadel = $('#player-padel');
    const $aiPadel = $('#ai-padel');
    const $ball = $('#ball');
    const $start = $('#start');
    
    const UP_LEFT = -3 * Math.PI / 4;
    const UP_RIGHT = -Math.PI / 4;
    const DOWN_LEFT = 3 * Math.PI / 4;
    const DOWN_RIGHT = Math.PI / 4;
    let interval = null;
    let aiPadel = null;
    let ball = null;
    let interval2 = null;
    $start.click(function() {
        init();
    })
    this.timenotourRemaining = 0;
    this.timeourRemaining = 0;
    var mismatchSound = new Audio('audio/6_sto-k-odnomu-ne-pra_ilnyy-ot_et (mp3cut.net).mp3');
    var matchSound = new Audio('audio/line_open (mp3cut.net).mp3');
    
    function init() {
        if (document.readyState == 'loading') {
            document.addEventListener('DOMContentLoaded', ready);
        }
        aiPadel = {
            direction: 1,
            SPEED: 2,
            top: 0
        }
    
        ball = {
            top: 340,
            left: 460,
            angle: UP_LEFT,
            speed: 9
        }
    
        interval = setInterval(update, 10);
    }
    
    $pong.mousemove(function(evt) {
        if (!interval) {
            return;
        }
        const top = Math.min(
            $pong.height() - $playerPadel.height(),
            evt.pageY - $pong.offset().top
        )
        $playerPadel.css({
            top: `${top}px`
        });
    });
    
    function update() {
        updateBall();
        updateAiPadel();
    }
    
    function updateBall() {
        ball.top += ball.speed * Math.sin(ball.angle);
        ball.left += ball.speed * Math.cos(ball.angle);
        $ball.css({
            top: `${ball.top}px`,
            left: `${ball.left}px`
        });
    
        if (isBallOverlappingWithPlayerPadel()) {
            if (ball.angle === UP_LEFT) {
                ball.angle = UP_RIGHT;
            } else {
                ball.angle = DOWN_RIGHT;
            }
        }
    
        if (isBallOverlappingWithAiPadel()) {
            if (ball.angle === UP_RIGHT) {
                ball.angle = UP_LEFT;
            } else {
                ball.angle = DOWN_LEFT;
            }
        }
    
        if (isBallOverlappingWithTop()) {
            if (ball.angle === UP_RIGHT) {
                ball.angle = DOWN_RIGHT;
            } else {
                ball.angle = DOWN_LEFT;
            }
        }
    
        if (isBallOverlappingWithBottom()) {
            if (ball.angle === DOWN_RIGHT) {
                ball.angle = UP_RIGHT;
            } else {
                ball.angle = UP_LEFT;
            }
        }
        if (timeourRemaining === 10) {
            victory();
        }
        if (timenotourRemaining === 10) {
            gameover();
        }
        const winner = getWinner();
        if (winner) {
            endGame(winner);
        }
    }
    
    function getWinner() {
        this.timerour = document.getElementById('our');
        this.timernotour = document.getElementById('notour');
        this.timernotour.innerText = this.timenotourRemaining;
        this.timerour.innerText = this.timeourRemaining;
        if (ball.left < 0) {
            this.timenotourRemaining++;
            return 'red';
        } else if (ball.left > $pong.width() - $ball.width()) {
            this.timeourRemaining++;
            return 'blue';
        } else {
            return false;
        }
    }
    
    
    function isBallOverlappingWithPlayerPadel() {
        return $ball.overlaps('#player-padel').length > 0
    }
    
    function isBallOverlappingWithAiPadel() {
        return $ball.overlaps('#ai-padel').length > 0
    }
    
    function isBallOverlappingWithTop() {
        return ball.top <= 0;
    }
    
    function isBallOverlappingWithBottom() {
        return ball.top >= $pong.height() - $ball.height();
    }
    
    function updateAiPadel() {
        if (aiPadel.top > $pong.height() - $aiPadel.height()) {
            aiPadel.direction = -1;
        }
    
        if (aiPadel.top < 0) {
            aiPadel.direction = 1;
        }
    
        aiPadel.top += aiPadel.direction * aiPadel.SPEED;
    
        $aiPadel.css({
            top: `${aiPadel.top}px`
        });
    }
    
    function endGame(winner) {
        this.timernotour.innerText = this.timenotourRemaining;
        this.timerour.innerText = this.timeourRemaining;
        clearInterval(interval);
        interval = null;
        interval2 = setTimeout(init, 600);
    
    }
    
    function victory() {
        clearInterval(interval);
        interval = null;
        matchSound.onplaying = function() {
            smoke.alert("Поздравляю!!! Ты настоящий Бруно Резенде!");
        }
        matchSound.play();
    }
    
    function gameover() {
        clearInterval(interval);
        interval = null;
        mismatchSound.onplaying = function() {
            smoke.alert("Увы! Бруно Резенде из тебя никакой.");
        }
        mismatchSound.play();
    }
    $('#click').click(function(){ $('#main').show(); $('#click').hide(); });
    $('#click-2').click(function(){ $('#main-2').show(); $('#click-2').hide(); });
    $('#click-3').click(function(){ $('#main-3').show(); $('#click-3').hide(); });
    $('#click-4').click(function(){ $('#main-4').show(); $('#click-4').hide(); });
    $('#click-5').click(function(){ $('#main-5').show(); $('#click-5').hide(); });
    $('#click-6').click(function(){ $('#main-6').show(); $('#click-6').hide(); });
    $('#click-7').click(function(){ $('#main-7').show(); $('#click-7').hide(); });
    $('#click-8').click(function(){ $('#main-8').show(); $('#click-8').hide(); });
    $('#click-9').click(function(){ $('#main-9').show(); $('#click-9').hide(); });
    $('#click-10').click(function(){ $('#main-10').show(); $('#click-10').hide(); });
    $('#click-11').click(function(){ $('#main-11').show(); $('#click-11').hide(); });
    $('#click-12').click(function(){ $('#main-12').show(); $('#click-12').hide(); });
    $('#click-13').click(function(){ $('#main-13').show(); $('#click-13').hide(); });
    $('#click-14').click(function(){ $('#main-14').show(); $('#click-14').hide(); });
    $('#click-15').click(function(){ $('#main-15').show(); $('#click-15').hide(); });
    $('#click-16').click(function(){ $('#main-16').show(); $('#click-16').hide(); });
    $('#click-17').click(function(){ $('#main-17').show(); $('#click-17').hide(); });
    $('#click-18').click(function(){ $('#main-18').show(); $('#click-18').hide(); });

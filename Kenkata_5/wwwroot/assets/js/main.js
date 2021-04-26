/* Countdown Flash Sale */
    var countDate = new Date('July 1, 2021 00:00:00').getTime();

    function countdown(){
      var now = new Date().getTime();
      gap = countDate - now;

      var second = 1000;
      var minute = second * 60;
      var hour = minute * 60;
      var day = hour * 24;

      var d = Math.floor(gap / (day));
      var h = Math.floor((gap % (day)) / (hour));
      var m = Math.floor((gap % (hour)) / (minute));
      var s = Math.floor((gap % (minute)) / second);

      document.getElementById('day').innerText = d;
      document.getElementById('hour').innerText = h;
      document.getElementById('minute').innerText = m;
      document.getElementById('second').innerText = s;
    }

    setInterval(function(){
        countdown();
    }, 1000)


/*Filter by Price*/
        (function () {
            const parent = document.querySelector('.range-slider');

            if (!parent) {
                return;
            }

            const rangeS = parent.querySelectorAll('input[type="range"]'),
                numberS = parent.querySelectorAll('input[type="number"]');

            rangeS.forEach((el) => {
                el.oninput = () => {
                    let slide1 = parseFloat(rangeS[0].value),
                        slide2 = parseFloat(rangeS[1].value);

                    if (slide1 > slide2) {
                        [slide1, slide2] = [slide2, slide1];
                    }

                    numberS[0].value = slide1;
                    numberS[1].value = slide2;
                }
            });

            numberS.forEach((el) => {
                el.oninput = () => {
                    let number1 = parseFloat(numberS[0].value),
                        number2 = parseFloat(numberS[1].value);

                    if (number1 > number2) {
                        let tmp = number1;
                        numberS[0].value = number2;
                        numberS[1].value = tmp;
                    }

                    rangeS[0].value = number1;
                    rangeS[1].value = number2;
                }
            });
        })();

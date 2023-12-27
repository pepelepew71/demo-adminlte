$('.knob').knob();

setInterval(() => {
  for (let i = 1; i < 6; i++) {
    let val = Math.random()*50.0;
    $(`.a${i}`).val(`${val.toFixed(1)}`).trigger('change');
    if (val > 25.0) {
      $(`.a${i}`).trigger('configure', {"inputColor": "#000000"});
    } else {
      $(`.a${i}`).trigger('configure', {"inputColor": "#000000"});
    }
  }

  for (let i = 1; i < 6; i++) {
    let val = Math.random()*50.0;
    $(`.v${i}`).val(`${val.toFixed(1)}`).trigger('change');
    if (val > 25.0) {
      $(`.v${i}`).trigger('configure', {"inputColor": "#000000"});
    } else {
      $(`.v${i}`).trigger('configure', {"inputColor": "#000000"});
    }
  }
}, 1000)

setInterval(() => {
  for (let i = 1; i < 31; i++) {
    if (i === 27 || i === 28) {
      continue;
    }
    if (Math.random() > 0.5) {
      $(`.alert${i}`).removeClass("bg-default").addClass("bg-danger");
      $(`.alert${i} h3`).html("異常");
    } else {
      $(`.alert${i}`).removeClass("bg-danger").addClass("bg-default");
      $(`.alert${i} h3`).html("正常");
    }
  }
}, 3000)

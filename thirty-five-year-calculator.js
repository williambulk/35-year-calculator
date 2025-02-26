document.querySelectorAll('.thirty-five-year-calculator').forEach((calculator) => {
  let offer = calculator.querySelector('.offer input');
  let rescissionFee = calculator.querySelector('.rescission-fee input');

  calculator.addEventListener("input", () => {
    let offerValue = parseInt(offer.value.replace(/,/g, '')) || 0;
    offer.value = offerValue.toLocaleString('en-CA');

    let fee = offerValue * 0.0025;
    rescissionFee.value = fee.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' });
  });
});

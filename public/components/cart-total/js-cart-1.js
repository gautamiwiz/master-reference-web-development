(function () {
  "use strict";
  //console.log("gScript loaded!");

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("cartForm")
      .addEventListener("submit", calculateCartTotals);
    let btnEstimate = document.getElementById("btn-estimate");
    btnEstimate.disabled = true;

    let state = document.getElementById("s-state");

    state.addEventListener("change", function () {
      if (state.value === "") {
        btnEstimate.disabled = true;
      } else {
        btnEstimate.disabled = false;
      }
    });

    function calculateCartTotals(e) {
      e.preventDefault();
      //console.log("cart Calculation Started!");

      //check the state selectbox
      if (state.value === "") {
        window.alert("Please choose your shipping state");

        //bring focus to the selct box
        state.focus();
        return;
      }

      let itemBball =
          parseInt(document.getElementById("txt-q-bball").value, 10) || 0,
        itemJersey =
          parseInt(document.getElementById("txt-q-jersey").value, 10) || 0,
        itemPower =
          parseInt(document.getElementById("txt-q-power").value, 10) || 0,
        shippingState = state.value,
        shippingMethod =
          document.querySelector("[name=r_method]:checked").value || "";

      let totalQty = itemBball + itemJersey + itemPower; //use total Qty in case of shipping per item
      let shippingCostPer,
        shippingCost,
        taxFactor = 1,
        estimate;

      let subTotal = 100 * itemBball + 100 * itemJersey + 100 * itemPower;

      if (shippingState === "ts") {
        taxFactor = 1.1;
      }

      switch (shippingMethod) {
        case "express":
          shippingCostPer = 500;
          break;

        case "economical":
          shippingCostPer = 200;
          break;

        default:
          shippingCostPer = 0;
          break;
      }
      //if shipping cost per item
      //ShippingCost = shippingCostPer * totalQty;
      shippingCost = shippingCostPer;

      estimate = subTotal * taxFactor + shippingCost;

      document.getElementById("txt-estimate").value =
        "Rs. " + estimate.toFixed(2);

      //total items
      //total shipping cost
      //tax

      let results = document.getElementById("results");
      results.innerHTML = "Total item qty : " + totalQty + "<br />";
      results.innerHTML +=
        "Tax type : " +
        ((taxFactor - 1) * 100).toFixed(2) +
        "%" +
        " (State = " +
        shippingState +
        ") <br />";
      results.innerHTML +=
        "Tax Amount : Rs. " + (subTotal * taxFactor).toFixed(2) + "<br />";
      results.innerHTML += "Shipping Cost : Rs. " + shippingCost;
    }
  });
})();

// Your JS code here
var subTypeElement = document.getElementById("subscription");
var subDurationElement = document.getElementById("months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;
subTypeElement.addEventListener("change", function(e) {
    subType = e.target.value;
    updateSubscriptionDiv();
    //console.log(subType);
  });
  subDurationElement.addEventListener("change", function(e) {
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
    //console.log(subDuration);
  });
  var updateSubscriptionDiv = function() {
    var monthlyCost = 5;
    if (subType === "standard") {
        monthlyCost = 7;
      } else if (subType === "premium") {
        monthlyCost = 10;
      }
      var total = monthlyCost * subDuration;
      result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
  };
  
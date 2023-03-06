console.log("gScript Loaded!");

/*=====================================
Replace the html elements with <> both begining and closing tag
====================================== */
//get the elements to replace with <>
let elementToAddHtmlTags = document.querySelectorAll(".htmlTagToAdd");

//run each element in a loop to check it odd or even i.e its the starting element or ending element
// if ending add /
elementToAddHtmlTags.forEach((item, i) => {
  i % 2 === 0
    ? (item.innerHTML = `&lt;${item.innerHTML}&gt;`)
    : (item.innerHTML = `&lt;/${item.innerHTML}&gt;`);
});
//console.log(elementToAddHtmlTags);
/*=====================================
Replace the html elements with <> ****end****
====================================== */

/*=====================================
Replace the html elements with <> get the ending / content from the element itself
====================================== */
//get the elements to replace with <>
let elementToAddHtmlTagsType2 = document.querySelectorAll(".htmlTagToAddType2");

//run each element in a loop to check it odd or even i.e its the starting element or ending element
// if ending add /
elementToAddHtmlTagsType2.forEach((item, i) => {
  item.innerHTML = `&lt;${item.innerHTML}&gt;`;
});
//console.log(elementToAddHtmlTags);
/*=====================================
Replace the html elements with <> ****end****
====================================== */

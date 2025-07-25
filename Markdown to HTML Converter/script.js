const htmlOutput = document.getElementById("html-output");

const markdownInput = document.getElementById("markdown-input")
const preview = document.getElementById("preview");

function convertMarkdown() {
 const input =  markdownInput.value;

let output = input;
   output = output.replace(/(?:\*\*|__)(.*?)(?:__|\*\*)/gm,"<strong>$1</strong>");
   output = output.replace(/(?:\*|_)(.*?)(?:_|\*)/gm,"<em>$1</em>");
   output = output.replace(/^>\s*(.+)/gm,"<blockquote>$1</blockquote>");
   output = output.replace(/^# (.*)$/gm, "<h1>$1</h1>");
   output = output.replace(/^## (.*)$/gm, "<h2>$1</h2>");
   output = output.replace(/^### (.*)$/gm, "<h3>$1</h3>");
   
   
   output = output.replace(/!\[(.*?)\]\((.*?)\)/g,`<img alt="$1" src="$2">`);
   output = output.replace(/\[(.*?)\]\((.*?)\)/gm,`<a href="$2">$1</a>`);
   
   output = output.replace(/^(?!<(h[1-3]|img|a|blockquote)\b)(.+)$/gm,"<p>$2</p>");
   
   
   htmlOutput.textContent = output;
   preview.innerHTML = output;
   return output;
}

markdownInput.addEventListener("input", 
  convertMarkdown
);






// const htmlOutput = document.getElementById("html-output");

// const markdownInput = document.getElementById("markdown-input")
// const preview = document.getElementById("preview");

// function convertMarkdown() {
//  const input =  markdownInput.value;

// //   const h1Regex = /^# /gm;
// //   const h2Regex = /^## /gm;
// //   const h3Regex = /^### /gm;
// // //   const pRegex = /^/gm;
// // //   const emRegex = /^\*$/gm;
// // //   const strongRegex = /^\*\* \*\*$/gm;

//   const h1Output = input.replace(/^# (.*)$/gm, "<h1>$1</h1>");
//   const h2Output = input.replace(/^## (.*)$/gm, "<h2>$1</h2>");
//   const h3Output = input.replace(/^### (.*)$/gm, "<h3>$1</h3>");
//   const pOutput = input.replace(/^(.*)$/gm,"<p>$1</p>");
//   const emOutput = input.replace(/\*(.*?)\*$/gm,"<p><em>$1</em></p>");
//   const strongOutput = input.replace(/\*\*(.*?)\*\*$/gm,"<p><strong>$1</strong></p>");

//   if(h1Regex.test(input)) {
//       htmlOutput.textContent = h1Output;
//       preview.innerHTML = h1Output;
//       console.log(h1Output);
//       return;
//   } else if(h2Regex.test(input)) {
//       htmlOutput.textContent = h2Output;
//       preview.innerHTML = h2Output;
      
//       console.log(h2Output);
//       return;
//   } else if(h3Regex.test(input)) {
//       htmlOutput.textContent = h3Output;
//       preview.innerHTML = h3Output;
//       console.log(h3Output);
//       return;
//   } else if(pRegex.test(input)) {
//       htmlOutput.textContent = pOutput;
//       preview.innerHTML = pOutput;
//   } else if(emRegex.test(input)) {
//       htmlOutput.textContent = emOutput;
//       preview.innerHTML = emOutput;
//   }
//   else if(strongRegex.test(input)) {
//       htmlOutput.textContent = strongOutput;
//       preview.innerHTML = strongOutput;
//   }
  
// }

// markdownInput.addEventListener("keydown", (event) => {
//   if(event.key === "Enter") {
      
//   convertMarkdown();
// }});



Readme md file


| **Title** | **Technical Documentation: Allowed, Not Allowed and Not Used as Selectors (EMA) XHTML Tags** |
|--|--|
| **Version** | <span style="background:gray;padding: 0px 5px;text-align:center;color:white;"><strong>0.2</strong> |
| **Status** | <span style="background:purple;padding: 0px 5px;text-align:center;color:white;"><strong>DRAFT</span> |
 
### Update History
|Version| Author | Comment | Date |
|--|--|--|--|
| 0.1 | Gautam Sharma  | Init | 2025-02-13 |
| 0.2 | Gautam Sharma  | Update based on  EMA feedback| 2025-02-19 |
 
[[_TOC_]]
Considering FHIR narratives with embedded images (XTHML 1.0 Strict and FHIR restrictions) and EMA requirements.
 
# **Legend**
*   ✅ **Allowed in FHIR XHTML narratives**
*   ❌ **Not allowed in FHIR XHTML narratives**
*   ⚠️ **Allowed but not used as an element selector by EMA**
 
# **1. Document Structure**
*   ❌ `<html>` – **Defines the entire HTML document**. Not allowed in FHIR.
*   ❌ `<head>` – **Contains metadata and links**. Not allowed in FHIR.
*   ❌ `<title>` – **Defines the document title**. Not allowed in FHIR.
*   ✅ `<body>` – **Document body container**. Allowed inside `<div>`.
 
# **2. Headings**
*   ✅ `<h1>` to `<h6>` – **Section headings** (largest `<h1>` to smallest `<h6>`).
 
# **3. Text Formatting & Semantic Elements**
*   ✅ `<p>` – **Paragraph**.
*   ⚠️ `<blockquote>` – **Block quotation for citing sources**.
*   ⚠️ `<q>` – **Short inline quotation**.
*   ⚠️ `<cite>` – **Citations for works (e.g., book titles, reports)**.
*   ⚠️ `<code>` – **Displays code snippets**.
*   ✅ `<em>` – **Emphasized (italic) text**.
*   ✅ `<strong>` – **Important (bold) text**.
*   ⚠️ `<dfn>` – **Definition term**.
*   ⚠️ `<abbr>` – **Abbreviation (e.g., "WHO" for World Health Organization)**.
*   ⚠️ `<acronym>` – **Acronym (like `<abbr>`).**
*   ⚠️ `<address>` – **Contact information**
*   ⚠️ `<pre>` – **Preformatted text (preserves spaces and line breaks)**.
*   ⚠️ `<ins>` – **Inserted text (e.g., corrections in legal documents)**.
*   ⚠️ `<del>` – **Deleted text (e.g., strike-through for removed content)**.
*   ⚠️ `<kbd>` – **Keyboard input (e.g., "Press `Ctrl+C`")**.
*   ⚠️ `<samp>` – **Sample output from a program**.
*   ⚠️ `<var>` – **Variable in programming/math expressions**.
*   ✅ `<sup>` – **Superscript (e.g., "m²")**.
*   ✅ `<sub>` – **Subscript (e.g., "H₂O")**.
*   ❌ `<bdo>` – **Overrides text direction (bidirectional text)**. Not allowed.
 
# **4. Lists**
*   ✅ `<ul>` – **Unordered list** (bulleted).
*   ✅ `<ol>` – **Ordered list** (numbered).
*   ✅ `<li>` – **List item** (inside `<ul>` or `<ol>`).
*   ⚠️ `<dl>` – **Definition list** (used for term/description pairs).
*   ⚠️ `<dt>` – **Definition term** (inside `<dl>`).
*   ⚠️ `<dd>` – **Definition description** (inside `<dl>`).
 
# **5. Links**
*   ✅ `<a>` – **Hyperlink to another page, document, or anchor**.
 
# **6. Tables**
*   ✅ `<table>` – **Defines a table**.
*   ✅ `<caption>` – **Table caption/title**.
*   ✅ `<thead>` – **Table header section**.
*   ✅ `<tbody>` – **Table body section**.
*   ✅ `<tfoot>` – **Table footer section**.
*   ✅ `<tr>` – **Table row**.
*   ✅ `<th>` – **Table header cell**.
*   ✅ `<td>` – **Table data cell**.
*   ✅ `<col>` – **Defines a column in a table**.
*   ✅ `<colgroup>` – **Groups multiple columns in a table**.
 
# **7. Forms and Inputs**
*   ❌ `<form>` – **Defines an input form**. Not allowed.
*   ❌ `<fieldset>` – **Groups form elements**. Not allowed.
*   ❌ `<legend>` – **Caption for `<fieldset>`**. Not allowed.
*   ❌ `<label>` – **Label for form inputs**. Not allowed.
*   ❌ `<input />` – **Form input field**. Not allowed.
*   ❌ `<textarea>` – **Multiline text input**. Not allowed.
*   ❌ `<select>` – **Dropdown list**. Not allowed.
*   ❌ `<option>` – **Option in `<select>`**. Not allowed.
*   ❌ `<optgroup>` – **Groups options in `<select>`**. Not allowed.
*   ❌ `<button>` – **Clickable button**. Not allowed.
 
# **8. Images and Objects**
*   ✅ `<img />` – **Displays an image (allowed only if using an embedded FHIR Binary Resource)**.
*   ❌ `<object>` – **Embeds external objects (e.g., multimedia, PDFs)**. Not allowed.
*   ❌ `<param />` – **Parameters for `<object>`**. Not allowed.
*   ❌ `<map>` – **Defines an image map (clickable areas)**. Not allowed.
*   ❌ `<area />` – **Clickable area in an image map**. Not allowed.
 
# **9. Scripting and Styles**
*   ❌ `<script>` – **JavaScript code**. Not allowed.
*   ❌ `<noscript>` – **Alternative content for no-script browsers**. Not allowed.
*   ❌ `<style>` – **Inline CSS styling**. Not allowed.
 
# **10. Miscellaneous**
*   ❌ `<hr />` – **Horizontal line divider**. Not allowed.
*   ⚠️ `<br />` – **Line break**.
*   ⚠️ `<span>` – **Generic inline container** (useful for applying styles).
*   ⚠️ `<div>` – **Generic block container (root element in FHIR narratives).**
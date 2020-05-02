This is documentation 

HTML is based on XML 

 HTML users tags/node/elements


 h1 -> a tag used to represent Header 1
 Ex <h1>Some text</h1>
 
 block element  - div
 inline element - span
 Image - img
 Headings - h1,h2,h3,...h6
 Paragraphs - p
 Text Box -input
 Links -a
 Bullets - ul ,li
 Numbers -ol,li
 Tables - table, tr, th, td
 button - input, button

 Cascading Style Sheets
 Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. More importantly, CSS enables you to do this independent of the HTML that makes up each web page
 
 REST  - Rperesentational State Transfer
 If you have a sharepoint site called https://xyz.sharepoint.com/sites/demo =>
 Your entry point to Sharepoint REST Api is https://xyz.sharepoint.com/sites/demo/_api
 The methods fore REST are: GET, POST, PUT, MERGE, PATCH, DELETE, ...

 Examples: 
 yourSite/_api/web => retrieves information about that specific web
 yourSite/_api/web/lists => Tells all properties/infomation about all the lists and libraries under that specific site
 What if I want to see few properties of lists? Ex Title,Description,ItemCount,HiddenTitle,Description,ItemCount,Hidden
 yourSite/_api/web/lists?$select=Title,Description,ItemCount,Hidden

 How ca we limit the data showing from REST API / dont bring Hidden = true lists , use oDATA $filter
  yourSite/_api/web/lists?$filter=Hidden eq false

  Reference: 
  https://social.technet.microsoft.com/wiki/contents/articles/35796.sharepoint-2013-using-rest-api-for-selecting-filtering-sorting-and-pagination-in-sharepoint-list.aspx






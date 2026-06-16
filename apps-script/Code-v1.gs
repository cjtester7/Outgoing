const SHEET_CARS='Cars';
function doPost(e){
 const req=JSON.parse(e.postData.contents);
 if(req.action==='getCars') return json(getCars());
 return json({ok:true});
}
function json(o){return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);}
function getCars(){
 const sh=SpreadsheetApp.getActive().getSheetByName(SHEET_CARS);
 const vals=sh.getDataRange().getValues(); const h=vals.shift();
 return vals.map(r=>Object.fromEntries(h.map((x,i)=>[x,r[i]])));
}
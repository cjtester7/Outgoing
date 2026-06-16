<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Drive Outs</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="css/styles-v1.css" rel="stylesheet"></head>
<body>
<div class="container py-3">
<h1>Drive Outs</h1>
<input id="search" class="form-control mb-2" placeholder="Search">
<button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#carModal">+ New Drive Out</button>
<div id="cars"></div>
</div>
<div class="modal fade" id="carModal"><div class="modal-dialog modal-lg"><div class="modal-content">
<div class="modal-header"><h5>Drive Out</h5></div>
<div class="modal-body">
<form id="carForm">
<input class="form-control mb-2" id="Driver" placeholder="Driver">
<input class="form-control mb-2" id="PhoneNumber" placeholder="Phone Number">
<input class="form-control mb-2" id="Company" placeholder="Company">
<input class="form-control mb-2" id="Make" placeholder="Make">
<input class="form-control mb-2" id="Model" placeholder="Model">
<input class="form-control mb-2" id="VIN" placeholder="VIN">
<input class="form-control mb-2" id="Stock" placeholder="Stock">
<textarea class="form-control mb-2" id="Comments" placeholder="Comments"></textarea>
<input class="form-control mb-2" id="Destination" placeholder="Destination">
<input class="form-control mb-2" id="Keys" type="number" placeholder="Keys">
<input class="form-control" id="photos" type="file" multiple accept="image/*" capture="environment">
</form>
</div>
<div class="modal-footer"><button class="btn btn-success" id="saveBtn">Save</button></div>
</div></div></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/api-v1.js"></script><script src="js/app-v1.js"></script>
</body></html>
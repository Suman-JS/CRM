

$(document).ready(function () {
    var table = $('#visitordatatble').DataTable({
        scrollX: true,
        responsive: true,
        autoWidth: false,
        deferRender: true,
        columnDefs: [
            { width: 'auto', targets: '_all' }
        ],
        "renderer": "bootstrap",
        "pageLength": 10,
        fixedHeader: true,
        language: {
            zeroRecords: function () {
                Swal.fire({
                    title: 'No records found',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
            }
        }
    });

    $('#empdatatable').DataTable({
        responsive: true,
        autoWidth: false,
        deferRender: true,
        columnDefs: [
            { width: 'auto', targets: '_all' }
        ],
        "renderer": "bootstrap",
        "pageLength": 10,
        fixedHeader: true

    });

    $('#allvisitordatatble').DataTable({
        responsive: true,
        autoWidth: false,
        deferRender: true,
        columnDefs: [
            { width: 'auto', targets: '_all' }
        ],
        "renderer": "bootstrap",
        "pageLength": 10,
        fixedHeader: true

    });
}); 

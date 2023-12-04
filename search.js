$(document).ready(function() {
    var isSearching = false; // Menandai apakah sedang dalam proses pencarian

    $('#searchIcon').on('click', function() {
        $('#searchInput').fadeToggle('fast');
        $('#searchInput').focus();
        isSearching = true; // Menandai bahwa sedang melakukan pencarian
    });

    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        var found = false;

        $('.isi').each(function() {
            var text = $(this).text().toLowerCase();
            var matched = text.indexOf(value) > -1;
            $(this).toggle(matched);
            
            if (matched) {
                found = true;
            }
        });

        if (!found) {
            $('#notFoundMessage').text('Barang tidak ditemukan');
        } else {
            $('#notFoundMessage').text('');
        }
    });

    $('#searchInput').on('focusout', function() {
        if (isSearching) {
            $(this).fadeOut('fast');
            $('.isi').show(); // Mengosongkan nilai input saat focus keluar dari area pencarian
            $('#notFoundMessage').text('');
            isSearching = false; // Menandai bahwa pencarian selesai
        }
    });

    $(document).on('keydown', function(event) {
        if (event.key === 'Escape') {
            $('#searchInput').fadeOut('fast');
            $('#searchInput').val(''); // Mengosongkan nilai input saat menekan tombol Escape
            $('#notFoundMessage').text('');
            isSearching = false; // Menandai bahwa pencarian selesai
        }
    });
});
